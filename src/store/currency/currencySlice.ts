import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TDataCurrency } from '../../scripts/utils/type';

const initialStateCurrency: TDataCurrency = {
  conversion_rates: {},
  time_last_update_utc: '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: initialStateCurrency,
  reducers: {
    setDataCurrency: (state, action: PayloadAction<TDataCurrency>) => {
      state.conversion_rates = action.payload.conversion_rates;
      state.time_last_update_utc = action.payload.time_last_update_utc;
    },
  },
});

export const { setDataCurrency } = currencySlice.actions;
export const currencyReducer = currencySlice.reducer;
