import React, { useState } from 'react';
import * as BooksAPI from '../BooksAPI';
import { Book } from '../components/BookShelf/Book';

const SearchPage = () => {
  // state = {
  //   /**
  //    * TODO: Instead of using this state variable to keep track of which page
  //    * we're on, use the URL in the browser's address bar. This will ensure that
  //    * users can use the browser's back and forward buttons to navigate between
  //    * pages, as well as provide a good URL they can bookmark and share.
  //    */
  //   showSearchPage: false,
  // };
  const [searchWord, setSearchWord] = useState<string>('');
  const [books, setBooks] = useState([]);

  const updateBookShelf = (book: any, shelf: string) => {
    console.log(book, shelf);
    BooksAPI.update(book, shelf);
  };
  return (
    <div className='app'>
      <form
        //  action='/'
        onSubmit={(e) => {
          e.preventDefault();
          BooksAPI.search(searchWord).then((books) => {
            setBooks(books);
          });
          console.log('submit', searchWord);
        }}
      >
        <label>Search book:</label>
        <input
          type='search'
          id='booksearch'
          name='booksearch'
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
        />
        <input type='submit' value='Submit' />
      </form>
      <div className='list-books-content'>
        <div className='books-grid'>
          <ul>
            {books.map((book: any) => (
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
          </ul>
        </div>
      </div>
      <a href='/'>Back to books list</a>
    </div>
  );
};

export default SearchPage;
