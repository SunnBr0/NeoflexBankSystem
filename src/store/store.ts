import { configureStore } from '@reduxjs/toolkit';
import { currencyReducer } from './currency/currencySlice';
import { newsReducer } from './news/newsSlice';
import { subcribeNewsReducer } from './subscribeNews/subcribeNewsSlice';
import { applicationReducer } from './application/applicationSlice';

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    news: newsReducer,
    subcribeNews: subcribeNewsReducer,
    application: applicationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
