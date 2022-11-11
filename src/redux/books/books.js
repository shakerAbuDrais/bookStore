import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    allBooks: [
      {
        id: 1,
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
      },
      {
        id: 2,
        title: 'Economics',
        author: 'Paul Krugman',
      },
      {
        id: 3,
        title: 'Like Water for Chocolate',
        author: 'Laura Esquivel',
      },
    ],
  },
  reducers: {
    addBook: (state, action) => {
      state.allBooks.push(action.payload);
    },
    removeBook(state, action) {
      const bookId = action.payload;
      const filterBooks = state.allBooks.filter((book) => book.id !== bookId);
      return { allBooks: filterBooks };
    },
  },
});

export const { addBook, removeBook } = bookSlice.actions;

export default bookSlice.reducer;
