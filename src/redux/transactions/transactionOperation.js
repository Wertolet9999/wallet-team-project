import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseAPI } from 'API/api';
import { toast } from 'react-toastify';
import { toastStyled } from 'stylesheet/baseStyle';

export const fetchTransactions = createAsyncThunk(
  'transaction/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await baseAPI.get('/transactions');
      return data;
    } catch (error) {
      toast.error('🆘 Something Went Wrong', toastStyled);
      return rejectWithValue(error.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await baseAPI.post('/transactions', transaction);
      console.log('data :>> ', data);
      toast.success('💹 Transaction successful!', toastStyled);
      return data;
    } catch (error) {
      toast.error('🆘 Something Went Wrong', toastStyled);
      return rejectWithValue(error.message);
    }
  }
);

export const updateTransaction = createAsyncThunk(
  'transaction/updateTransaction',
  async ({ id, ...transaction }, { rejectWithValue }) => {
    try {
      const { data } = await baseAPI.patch(`/transactions/${id}`, transaction);
      toast.success('💹 Comment was updated!', toastStyled);
      return data;
    } catch (error) {
      toast.error('🆘 Something Went Wrong', toastStyled);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/deleteTransaction',
  async (id, { rejectWithValue }) => {
    try {
      await baseAPI.delete(`/transactions/${id}`);
      toast.success('💹 Transaction delete!', toastStyled);
      return id;
    } catch (error) {
      toast.error('🆘 Something Went Wrong', toastStyled);
      return rejectWithValue(error.message);
    }
  }
);
