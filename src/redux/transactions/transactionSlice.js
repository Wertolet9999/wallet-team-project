import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  fetchTransactions,
  updateTransaction,
} from './transactionOperation';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchTransactions.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [addTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [updateTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteTransaction.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [fetchTransactions.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
      state.isLoading = false;
    },
    [updateTransaction.fulfilled]: (state, { payload }) => {
      const index = state.items.findIndex(({ id }) => id === payload.id);
      state.items[index] = payload;
      state.isLoading = false;
    },
    [deleteTransaction.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(({ id }) => id !== payload);
      state.isLoading = false;
    },

    [fetchTransactions.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [addTransaction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [updateTransaction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
    [deleteTransaction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});
export const transactionsReducer = transactionsSlice.reducer;
