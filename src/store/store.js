import { configureStore } from '@reduxjs/toolkit';
import moviesList from './reducers/moviesList';
import categoriesList from './reducers/categoriesList';
import checkedCategoriesList from './reducers/checkedCategoriesList';
import allMoviesList from './reducers/allMoviesList';
import pageNumbers from './reducers/pageNumbers';
import currentPage from './reducers/currentPage';
import moviesPerPage from './reducers/moviesPerPage';

export default configureStore({
  reducer: {
    moviesList,
    categoriesList,
    checkedCategoriesList,
    allMoviesList,
    pageNumbers,
    currentPage,
    moviesPerPage
  },
});
