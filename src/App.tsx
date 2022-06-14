import React, { useCallback, useEffect, useState } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Book } from './components/BookShelf/Book';
import { BookShelf } from './components/BookShelf/BookShelf';
import { SearchBooks } from './components/SearchBooks/SearchBooks';

const BooksApp = () => {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false,
  // };
  const [books, setBooks] = useState([]);
  const [showSearchPage, setShowSearchPage] = useState<boolean>(false);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setBooks(books);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  const updateBookShelf = (book: any, shelf: string) => {
    BooksAPI.update(book, shelf);
  };
  const currentlyReadingBooks = books
    .filter((book: any) => book.shelf === 'currentlyReading')
    .map((book) => book);

  const wantToReadBooks = books
    .filter((book: any) => book.shelf === 'wantToRead')
    .map((book) => book);

  const readBooks = books
    .filter((book: any) => book.shelf === 'read')
    .map((book) => book);

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
                  {currentlyReadingBooks.map((book: any) => (
                    <li>
                      <Book
                        bookTitle={book.title}
                        bookAuthor={`Arwa`}
                        URL={`url(${book.imageLinks.smallThumbnail})`}
                        book={book}
                        updateBookShelf={updateBookShelf}
                      />
                    </li>
                  ))}
                </ol>
              </BookShelf>

              <BookShelf title={'Want to Read'}>
                <ol className='books-grid'>
                  {wantToReadBooks.map((book: any) => (
                    <li>
                      <Book
                        bookTitle={book.title}
                        bookAuthor={`Arwa`}
                        URL={`url(${book.imageLinks.smallThumbnail})`}
                        book={book}
                        updateBookShelf={updateBookShelf}
                      />
                    </li>
                  ))}
                </ol>
              </BookShelf>

              <BookShelf title={'Read'}>
                <ol className='books-grid'>
                  {readBooks.map((book: any) => (
                    <li>
                      <Book
                        bookTitle={book.title}
                        bookAuthor={`Arwa`}
                        URL={`url(${book.imageLinks.smallThumbnail})`}
                        book={book}
                        updateBookShelf={updateBookShelf}
                      />
                    </li>
                  ))}
                </ol>
              </BookShelf>
            </div>
          </div>
          <div className='open-search'>
            <button onClick={() => setShowSearchPage(true)}>Add a book</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BooksApp;
