import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseRequestMono } from 'API/api';

export const getCurrency = createAsyncThunk(
  'monoBank/getCurrency',
  async (_, { rejectWithValue, getState }) => {
    const dataMono = getState().monoBank.date
    const currency = getState().monoBank.currency;

    if (dataMono > (Date.now() + 1000 * 60 * 60)) {
      return {
        currency,
        date: dataMono,
      };
    }
    try {
      const { data } = await baseRequestMono.get('bank/currency');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
