import { createSlice } from '@reduxjs/toolkit';

import { fetchCampers } from './operations.js';

const handlePending = (state) => {
  state.isLoading = true;
};

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      });
  },
});

export default campersSlice.reducer;
