import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBooks, searchBooks } from './bookActions';

export interface BookType {
  id: string;
  title: string;
  authors: string[];
  shelf: string;
  imageLinks: { smallThumbnail: string; thumbnail: string };
}
export interface bookState {
  books: BookType[];
  searchedBooks: BookType[];
}

const initialState: bookState = {
  books: [],
  searchedBooks: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(
        getBooks.fulfilled,
        (state, action: PayloadAction<BookType[]>) => {
          state.books = action.payload;
        }
      )
      .addCase(
        searchBooks.fulfilled,
        (state, action: PayloadAction<BookType[]>) => {
          state.searchedBooks = action.payload;
        }
      );
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = bookSlice.actions;

export default bookSlice.reducer;
