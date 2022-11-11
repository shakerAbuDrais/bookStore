import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    status: 'loading',
  },
  reducers: {
    checkStatus: (state) => {
      const newState = state;
      newState.status = 'under construction';
    },
  },
});

export const { checkStatus } = categoriesSlice.actions;

export default categoriesSlice.reducer;
