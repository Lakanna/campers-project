import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import campersReducer from './campersSlice.js';
import filtersReducer from './filtersSlice.js';
import favoriteReducer from './favoriteSlice.js';
import themeReducer from './themeSlice.js';

const favoritePersistConfig = {
  key: 'favorite',
  storage,
  whitelist: ['items'],
};

const themePersistConfig = {
  key: 'theme',
  storage,
  whitelist: ['theme'],
};

const favoritePersistedReducer = persistReducer(
  favoritePersistConfig,
  favoriteReducer,
);

const persistedThemeReducer = persistReducer(themePersistConfig, themeReducer);

export const store = configureStore({
  reducer: {
    campers: campersReducer,
    filters: filtersReducer,
    favorite: favoritePersistedReducer,
    theme: persistedThemeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
