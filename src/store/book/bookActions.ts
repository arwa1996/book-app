import { createAsyncThunk } from '@reduxjs/toolkit';
import * as BookAPI from '../../BooksAPI';
import { BookType } from './bookSlice';

const getBooks = createAsyncThunk('book/getBooks', async () => {
  const result = await BookAPI.getAll();
  return result;
});

const updateBookShelf = createAsyncThunk(
  'book/updateBookShelf',
  async ({ book, shelf }: { book: BookType; shelf: string }) => {
    return await BookAPI.update(book, shelf);
  }
);

const searchBooks = createAsyncThunk(
  'book/searchBooks',
  async (searchWord: string) => {
    let result;
    if (searchWord.trim()) {
      result = await BookAPI.search(searchWord);
    }
    return result;
  }
);

export { getBooks, updateBookShelf, searchBooks };
