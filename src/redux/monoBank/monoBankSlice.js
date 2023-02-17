import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { getCurrency } from './monoBankOperations';

const initialState = {
  current: null,
  data: null,
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
  [getCurrency.pending]: state => {
    state.isLoading = true;
    state.error = null;
  },
  [getCurrency.rejected]: (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
    state.data = payload.data;
  },
  [getCurrency.fulfilled]: (state, { payload: { current, data } }) => {
    state.current = current;
    state.data = data;
    state.isLoading = false;
  },
});

export const monoBankPersistedReducer = persistReducer(
  monoBankPersistConfig,
  monoBankSlice.reducer
);
