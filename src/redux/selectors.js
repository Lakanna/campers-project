export const selectAllCampers = (state) => state.campers.items;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;

export const selectFavorite = (state) => state.favorite.items;
