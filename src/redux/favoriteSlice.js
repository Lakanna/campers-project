import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: [],
  },
  reducers: {
    setFavorite(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
