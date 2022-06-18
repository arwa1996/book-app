import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book } from '../../components/BookShelf/Book';
import { searchBooks, updateBookShelf } from '../../store/book/bookActions';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const SearchBooks = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const books = useAppSelector((state: any) => state.book.books);
  const [searchWord, setSearchWord] = useState<string>('');
  const updateShelf = (book: any, shelf: string) => {
    dispatch(updateBookShelf({ book, shelf }));
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
              dispatch(searchBooks(searchWord));
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
          {books.map((book: any, index: number) => (
            <li key={index}>
              <Book
                bookTitle={book.title}
                bookAuthor={`Arwa`}
                URL={`url(${book.imageLinks.smallThumbnail})`}
                book={book}
                updateBookShelf={updateShelf}
                shelf={book.shelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
