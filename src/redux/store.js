import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authPersistedReducer } from './auth/authSlice';
import { categoriesReducer } from './categories/categoriesSlice';
import { monoBankPersistedReducer } from './monoBank/monoBankSlice';
import { transactionsReducer } from './transactions/transactionSlice';
import { statisticReducer } from './transactionStatistic/statisticSlice';

export const store = configureStore({
  reducer: {
    auth: authPersistedReducer,
    transactions: transactionsReducer,
    categories: categoriesReducer,
    monoBank: monoBankPersistedReducer,
    statistic: statisticReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
