import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseAPI, token } from 'API/api';
import { toast } from 'react-toastify';
import { toastStyled } from 'stylesheet/baseStyle';

export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    const currentToken = getState().auth.token;
    if (currentToken) {
      token.set(currentToken);
      try {
        const { data } = await baseAPI.get('/users/current');
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
    return rejectWithValue();
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await baseAPI.post('/auth/sign-up', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('🆘 User with such email already exists!', toastStyled);
      } else {
        toast.error('🆘 Validation error.', toastStyled);
      }

      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await baseAPI.post('/auth/sign-in', userData);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        toast.error('🆘 User with such email not found!', toastStyled);
      } else if (error.response.status === 403) {
        toast.error('🆘 Provided password is incorrect!', toastStyled);
      } else {
        toast.error('🆘 Validation error.', toastStyled);
      }

      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await baseAPI.delete('/auth/sign-out');
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
