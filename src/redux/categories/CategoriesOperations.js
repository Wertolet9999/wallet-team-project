import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseAPI } from 'API/api';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await baseAPI.get('/transaction-categories');
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
