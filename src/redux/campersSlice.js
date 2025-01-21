import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers, fetchCamperById } from './operations.js';

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: { items: [], total: 0 },
    selectedCamper: null,
    isFiltersChange: false,
    isLoading: false,
    error: null,
  },
  reducers: {
    changeFilters(state) {
      state.isFiltersChange = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (state.isFiltersChange) {
          state.items = action.payload;
          state.isFiltersChange = false;
        } else {
          state.items.items = [
            ...state.items.items,
            ...action.payload.items.filter(
              (newItem) =>
                !state.items.items.some((item) => item.id === newItem.id),
            ),
          ];
          state.items.total = action.payload.total;
        }
      })
      .addCase(fetchCampers.rejected, handleRejected)
      .addCase(fetchCamperById.pending, handlePending)
      .addCase(fetchCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.selectedCamper = action.payload;
      })
      .addCase(fetchCamperById.rejected, handleRejected);
  },
});

export const { changeFilters } = campersSlice.actions;

export default campersSlice.reducer;
