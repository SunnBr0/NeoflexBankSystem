import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type {
  TArrayNewsData,
  TNewsDataArticles,
} from '../../scripts/utils/type';

const initialState: TArrayNewsData = {
  articles: [],
};

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    setNewsData: (state, action: PayloadAction<TNewsDataArticles[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { setNewsData } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
