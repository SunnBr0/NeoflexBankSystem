import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { TOffer } from '../../scripts/utils/type';

interface ApplicationState {
  offers: TOffer[];
  selectedOffer: TOffer | null;
}

const initialState: ApplicationState = {
  offers: [],
  selectedOffer: null,
};

const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setApplicationData(state, action: PayloadAction<TOffer[]>) {
      state.offers = action.payload;
    },
    clearApplicationData(state) {
      state.offers = [];
    },
    selectOffer(state, action: PayloadAction<TOffer>) {
      state.selectedOffer = action.payload;
    },
  },
});

export const { setApplicationData, clearApplicationData,selectOffer } =
  applicationSlice.actions;
export const applicationReducer = applicationSlice.reducer;
