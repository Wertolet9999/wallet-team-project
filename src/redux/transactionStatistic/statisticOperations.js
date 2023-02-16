import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseAPI } from 'API/api';

export const getStatistic = createAsyncThunk(
  'trSummary/getTransactionsSummary',
  async ({ month, year }, { rejectWithValue }) => {
    try {
      const { data } = await baseAPI.get(
        `/transactions-summary?month=${month}&year=${year}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
