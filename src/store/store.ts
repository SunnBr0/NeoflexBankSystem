import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currency/currencySlice';
import { newsReducer } from './news/newsSlice';
import { subcribeNewsReducer } from './subscribeNews/subcribeNewsSlice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    news: newsReducer,
    subcribeNews: subcribeNewsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
