import { createSlice } from '@reduxjs/toolkit';

const initialState: { isSubscribe: boolean } = {
  isSubscribe: sessionStorage.getItem('isSubscribed') === 'true',
};

const subcribeNewsSlice = createSlice({
  name: 'subcribeNews',
  initialState: initialState,
  reducers: {
    setSubcribeNews: (state) => {
      state.isSubscribe = true;
      sessionStorage.setItem('isSubscribed', 'true');
    },
  },
});

export const { setSubcribeNews } = subcribeNewsSlice.actions;
export const subcribeNewsReducer = subcribeNewsSlice.reducer;
