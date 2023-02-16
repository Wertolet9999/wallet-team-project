import { createSlice } from '@reduxjs/toolkit';
import { getStatistic } from './statisticOperations';

const statisticSlice = createSlice({
  name: 'transactions',
  initialState: {
    summary: null,
    isLoadingSummary: false,
    error: null,
  },

  extraReducers: {
    [getStatistic.pending]: state => {
      state.isLoadingSummary = true;
      state.error = null;
    },
    [getStatistic.fulfilled]: (state, { payload }) => {
      state.isLoadingSummary = false;
      state.summary = payload;
    },
    [getStatistic.rejected]: (state, { payload }) => {
      state.isLoadingSummary = false;
      state.error = payload;
    },
  },
});

export const statisticReducer = statisticSlice.reducer;
