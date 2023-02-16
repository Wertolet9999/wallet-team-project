import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseRequestMono } from 'API/api';

export const getCurrency = createAsyncThunk(
  'monoBank/getCurrency',
  async (_, { rejectWithValue, getState }) => {
    const dataMono = getState().bank.date;
    const currency = getState().bank.currency;

    if (dataMono && dataMono > Date.now()) {
      return {
        currency,
        date: dataMono,
      };
    }
    try {
      const { data } = await baseRequestMono.get('bank/currency');
      const result = {
        currency: data,
        data: Date.now() + 1000 * 60 * 60,
      };
      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
