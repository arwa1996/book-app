import React, { useEffect, useState } from 'react';
import * as BooksAPI from '../BooksAPI';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { Book } from '../components/BookShelf/Book';
import { BookShelf } from '../components/BookShelf/BookShelf';
import { SearchBooks } from '../components/SearchBooks/SearchBooks';
import { getBooks, updateBookShelf } from '../store/book/bookActions';
import { useAppDispatch, useAppSelector } from '../store/hooks';

const HomePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const books = useAppSelector((state: any) => state.book.books);

  const [showSearchPage, setShowSearchPage] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const updateShelf = (book: any, shelf: string) => {
    dispatch(updateBookShelf({ book, shelf }));
    dispatch(getBooks());
  };
  const currentlyReadingBooks = books.filter(
    (book: any) => book.shelf === 'currentlyReading'
  );

  const wantToReadBooks = books.filter(
    (book: any) => book.shelf === 'wantToRead'
  );

  const readBooks = books.filter((book: any) => book.shelf === 'read');

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
                  {currentlyReadingBooks.map((book: any, index: number) => (
                    <li key={index}>
                      <Book
                        bookTitle={book.title}
                        bookAuthor={`Arwa`}
                        URL={`url(${book.imageLinks.smallThumbnail})`}
                        book={book}
                        updateBookShelf={updateShelf}
                      />
                    </li>
                  ))}
                </ol>
              </BookShelf>

              <BookShelf title={'Want to Read'}>
                <ol className='books-grid'>
                  {wantToReadBooks.map((book: any, index: number) => (
                    <li key={index}>
                      <Book
                        bookTitle={book.title}
                        bookAuthor={`Arwa`}
                        URL={`url(${book.imageLinks.smallThumbnail})`}
                        book={book}
                        updateBookShelf={updateShelf}
                      />
                    </li>
                  ))}
                </ol>
              </BookShelf>

              <BookShelf title={'Read'}>
                <ol className='books-grid'>
                  {readBooks.map((book: any, index: number) => (
                    <li key={index}>
                      <Book
                        bookTitle={book.title}
                        bookAuthor={`Arwa`}
                        URL={`url(${book.imageLinks.smallThumbnail})`}
                        book={book}
                        updateBookShelf={updateShelf}
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
