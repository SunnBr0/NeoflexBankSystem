import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currency/currencySlice';
import { newsReducer } from './news/newsSlice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    news: newsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
