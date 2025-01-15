import { configureStore } from '@reduxjs/toolkit';
import campersReducer from './campersSlice.js';
import filtersReducer from './filtersSlice.js';
import favoriteReducer from './favoriteSlice.js';

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorite: favoriteReducer,
  },
});
