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

      toast.success('💹 Transaction successful!', toastStyled);
      const newDate = data.transactionDate.split('T')[0];
      console.log(newDate);
      data.transactionDate = newDate;
      // transactionDate: '2023-02-20T10:33:06.128Z';
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
