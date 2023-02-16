import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from './CategoriesOperations';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getCategories.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.error = null;
    },
    [getCategories.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});
export const categoriesReducer = categoriesSlice.reducer;
