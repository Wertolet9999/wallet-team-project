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
import { transactionsReducer } from './transactions/transactionSlice';
import { statisticReducer } from './transactionStatistic/statisticSlice';

export const store = configureStore({
  reducer: {
    // auth:,
    transactions: transactionsReducer,
    // categories:,
    // monoBank:,
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
