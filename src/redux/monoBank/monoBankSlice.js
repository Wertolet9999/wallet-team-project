import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { getCurrency } from './monoBankOperations';

const initialState = {
  currency: [],
  date: null,
  isLoading: false,
  error: null,
};

const monoBankPersistConfig = {
  key: 'currency',
  storage,
  whitelist: ['currency', 'date'],
};

const monoBankSlice = createSlice({
  name: 'monoBank',
  initialState,
  extraReducers: {
    [getCurrency.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [getCurrency.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.data = payload.date;
    },
    [getCurrency.fulfilled]: (state, { payload }) => {
      const array = payload.slice(0,2)
      state.currency = array;
      const data = payload.map(({ date }) => date);
      state.date = data[0];
      state.isLoading = false;
    },
  },
});

export const monoBankPersistedReducer = persistReducer(
  monoBankPersistConfig,
  monoBankSlice.reducer
);
