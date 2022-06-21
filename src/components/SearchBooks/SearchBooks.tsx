import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Book } from '../../components/BookShelf/Book';
import {
  getBooks,
  searchBooks,
  updateBookShelf,
} from '../../store/book/bookActions';
import { BookType } from '../../store/book/bookSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const SearchBooks = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchedBooks = useAppSelector((state) => state.book.searchedBooks);
  const books = useAppSelector((state) => state.book.books);
  const [searchWord, setSearchWord] = useState<string>('');
  const updateShelf = async (book: BookType, shelf: string) => {
    await dispatch(updateBookShelf({ book, shelf }));
    await dispatch(getBooks());
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
          <input
            type='text'
            placeholder='Search by title or author'
            value={searchWord}
            onChange={async (e) => {
              setSearchWord(e.target.value);
              await dispatch(searchBooks(e.target.value));
            }}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchedBooks?.length > 0 ? (
            searchedBooks.map((book: BookType, index: number) => {
              const defaultShelf = books?.find(
                (b: BookType) => b.id === book.id
              );
              return (
                <li key={index}>
                  <Book
                    bookTitle={book.title}
                    bookAuthor={book.authors}
                    URL={`url(${book.imageLinks?.smallThumbnail})`}
                    book={book}
                    updateBookShelf={updateShelf}
                    shelf={defaultShelf ? defaultShelf.shelf : 'none'}
                  />
                </li>
              );
            })
          ) : (
            <p>No books were found</p>
          )}
        </ol>
      </div>
    </div>
  );
};
