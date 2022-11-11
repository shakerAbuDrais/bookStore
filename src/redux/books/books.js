import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/u77mSBCSxbBkVWREEpxM/books');
  return response.data;
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  const response = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/u77mSBCSxbBkVWREEpxM/books', book);
  return response.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  const response = await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/u77mSBCSxbBkVWREEpxM/books/${id}`);
  return response.data;
});

const booksSlice = createSlice({
  name: 'books',
  initialState: {
    allBooks: [],
    status: '',
  },
  reducers: {
    checkStatus: (state) => {
      const newState = state;
      newState.status = 'under construction';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        const newState = state;
        newState.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        const newState = state;
        newState.allBooks = Object.keys(action.payload).map((id) => {
          const obj = action.payload[id][0];
          obj.id = id;
          return obj;
        });
      })
      .addCase(fetchBooks.rejected, (state) => {
        const newState = state;
        newState.status = 'failed';
      })
      .addCase(addBook.pending, (state) => {
        const newState = state;
        newState.status = 'loading';
      })
      .addCase(addBook.fulfilled, (state) => {
        const newState = state;
        newState.status = 'succeeded';
      })
      .addCase(addBook.rejected, (state) => {
        const newState = state;
        newState.status = 'failed';
      })
      .addCase(removeBook.pending, (state) => {
        const newState = state;
        newState.status = 'loading';
      })
      .addCase(removeBook.fulfilled, (state) => {
        const newState = state;
        newState.status = 'succeeded';
      })
      .addCase(removeBook.rejected, (state) => {
        const newState = state;
        newState.status = 'failed';
      });
  },
});

export const { checkStatus } = booksSlice.actions;

export default booksSlice.reducer;
