import { createSelector } from 'reselect';

export const selectAllCampers = (state) => state.campers.items;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;

export const selectSelectedCamper = (state) => state.campers.selectedCamper;

export const selectFavorite = (state) => state.favorite.items;

export const selectPage = (state) => state.filters.page;

export const selectLimit = (state) => state.filters.limit;

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

  searchParams.page = filters.page;
  searchParams.limit = filters.limit;

  return searchParams;
});
