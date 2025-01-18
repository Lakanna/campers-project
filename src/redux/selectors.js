import { createSelector } from 'reselect';

export const selectAllCampers = (state) => state.campers.items;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;

export const selectFavorite = (state) => state.favorite.items;

export const selectSelectedCamper = (state) => state.campers.selectedCamper;

// Базові селектори для доступу до стану
const selectFilters = (state) => state.filters;

// Селектор для формування пошукових параметрів
export const selectSearchParams = createSelector([selectFilters], (filters) => {
  const searchParams = {};

  if (filters.location.trim() !== '') {
    searchParams.location = filters.location;
  }

  if (filters.form.trim() !== '') {
    searchParams.form = filters.form;
  }

  if (filters.equipment.length > 0) {
    filters.equipment.forEach((item) => {
      searchParams[item] = true;
    });
  }

  return searchParams;
});
