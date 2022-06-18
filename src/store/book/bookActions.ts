import { createAsyncThunk } from '@reduxjs/toolkit';
import * as BookAPI from '../../BooksAPI';

const getBooks = createAsyncThunk('book/getBooks', async () => {
  const result = await BookAPI.getAll();
  return result;
});

const updateBookShelf = createAsyncThunk(
  'book/updateBookShelf',
  async ({ book, shelf }: any) => {
    await BookAPI.update(book, shelf);
  }
);

const searchBooks = createAsyncThunk(
  'book/searchBooks',
  async (searchWord: any) => {
    const result = await BookAPI.search(searchWord);
    return result;
  }
);

export { getBooks, updateBookShelf, searchBooks };
