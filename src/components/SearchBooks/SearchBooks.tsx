import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';
import { Book } from '../../components/BookShelf/Book';

export const SearchBooks = () => {
  const navigate = useNavigate();

  const [searchWord, setSearchWord] = useState<string>('');
  const [books, setBooks] = useState([]);

  const updateBookShelf = (book: any, shelf: string) => {
    BooksAPI.update(book, shelf);
  };

  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        <button
          className='close-search'
          onClick={() => {
            navigate('/');
          }}
        >
          Close
        </button>
        <div className='search-books-input-wrapper'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              BooksAPI.search(searchWord).then((books) => {
                setBooks(books);
              });
            }}
          >
            <input
              type='text'
              placeholder='Search by title or author'
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
            />
          </form>
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {books.map((book: any, index) => (
            <li key={index}>
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
      </div>
    </div>
  );
};
