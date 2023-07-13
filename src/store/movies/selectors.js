import { createSelector } from "reselect";

const getPending = (state) => state.movies.pending;

const getMovies = (state) => state.movies.movies;

const getError = (state) => state.movies.error;

const getCategories = (state) => state.movies.categories;
const getSelectedCategories = (state) => state.movies.selectedCategories;

export const getMoviesSelector = createSelector(getMovies, (movies) => movies);

export const getPendingSelector = createSelector(
  getPending,
  (pending) => pending
);

export const getErrorSelector = createSelector(getError, (error) => error);

export const getCategoriesSelector = createSelector(
  getCategories,
  (categories) => categories
);

export const getSelectedcategoriesSelector = createSelector(
  getSelectedCategories,
  (selectedCategories) => selectedCategories
);
