import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import { fetchCurrentUser, login, logout, register } from './authOperations';

const initialState = {
  user: { username: '', email: '', id: '' },
  token: null,
  isLoading: false,
  isAuth: false,
  error: null,
  isFetching: false,
};

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [login.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [logout.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchCurrentUser.pending]: state => {
      state.isLoading = true;
      state.isFetching = true;
    },

    [register.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [login.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [logout.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [fetchCurrentUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
      state.isFetching = false;
    },

    [register.fulfilled]: (state, { payload: { user, token } }) => {
      state.token = token;
      state.user = user;
      state.isAuth = true;
      state.isLoading = false;
    },
    [login.fulfilled]: (state, { payload: { user, token } }) => {
      state.token = token;
      state.user = user;
      state.isAuth = true;
      state.isLoading = false;
    },
    [logout.fulfilled]: state => {
      state.token = null;
      state.user = { name: '', email: '' };
      state.isAuth = false;
      state.isLoading = false;
    },
    [fetchCurrentUser.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.isFetching = false;
      state.isAuth = true;
      state.isLoading = false;
    },
  },
});

export const authPersistedReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
