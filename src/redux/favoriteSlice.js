import { createSlice } from '@reduxjs/toolkit';

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorite(state, action) {
      const existingItemIndex = state.items.findIndex(
        (item) => item === action.payload,
      );

      if (existingItemIndex !== -1) {
        state.items.splice(existingItemIndex, 1);
      } else {
        state.items.push(action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
