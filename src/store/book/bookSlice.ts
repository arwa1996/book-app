import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getBooks, searchBooks } from './bookActions';

export interface bookState {
  books: [];
}

const initialState: bookState = {
  books: [],
};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  extraReducers(builder) {
    builder
      .addCase(getBooks.fulfilled, (state, action: PayloadAction<any>) => {
        state.books = action.payload;
      })
      .addCase(searchBooks.fulfilled, (state, action: PayloadAction<any>) => {
        state.books = action.payload;
      });
  },
  reducers: {},
});

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = bookSlice.actions;

export default bookSlice.reducer;
