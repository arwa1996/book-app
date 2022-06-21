import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Book } from '../components/BookShelf/Book';
import { BookShelf } from '../components/BookShelf/BookShelf';
import { SearchBooks } from '../components/SearchBooks/SearchBooks';
import { getBooks, updateBookShelf } from '../store/book/bookActions';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { BookType } from '../store/book/bookSlice';
const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const books = useAppSelector((state) => state.book.books);

  const [showSearchPage, setShowSearchPage] = useState<boolean>(false);
  useEffect(() => {
    dispatch(getBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const updateShelf = async (book: BookType, shelf: string) => {
    await dispatch(updateBookShelf({ book, shelf }));
    await dispatch(getBooks());
  };

  return (
    <div className='app'>
      {showSearchPage ? (
        <SearchBooks />
      ) : (
        <div className='list-books'>
          <div className='list-books-title'>
            <h1>MyReads</h1>
          </div>
          <div className='list-books-content'>
            <div>
              <BookShelf title={'Currently Reading'}>
                <ol className='books-grid'>
                  {books
                    .filter(
                      (book: BookType) => book.shelf === 'currentlyReading'
                    )
                    .map((book: BookType, index: number) => (
                      <li key={index}>
                        <Book
                          bookTitle={book.title}
                          bookAuthor={book.authors}
                          URL={`url(${book.imageLinks.smallThumbnail})`}
                          book={book}
                          updateBookShelf={updateShelf}
                          shelf={book.shelf}
                        />
                      </li>
                    ))}
                </ol>
              </BookShelf>

              <BookShelf title={'Want to Read'}>
                <ol className='books-grid'>
                  {books
                    .filter((book: BookType) => book.shelf === 'wantToRead')
                    .map((book: BookType, index: number) => {
                      return (
                        <li key={index}>
                          <Book
                            bookTitle={book.title}
                            bookAuthor={book.authors}
                            URL={`url(${book.imageLinks.smallThumbnail})`}
                            book={book}
                            updateBookShelf={updateShelf}
                            shelf={book.shelf}
                          />
                        </li>
                      );
                    })}
                </ol>
              </BookShelf>

              <BookShelf title={'Read'}>
                <ol className='books-grid'>
                  {books
                    .filter((book: BookType) => book.shelf === 'read')
                    .map((book: BookType, index: number) => (
                      <li key={index}>
                        <Book
                          bookTitle={book.title}
                          bookAuthor={book.authors}
                          URL={`url(${book.imageLinks.smallThumbnail})`}
                          book={book}
                          updateBookShelf={updateShelf}
                          shelf={book.shelf}
                        />
                      </li>
                    ))}
                </ol>
              </BookShelf>
            </div>
          </div>
          <div className='open-search'>
            <button
              onClick={() => {
                setShowSearchPage(true);
                navigate('/search');
              }}
            >
              Add a book
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
