import { configureStore } from '@reduxjs/toolkit';
import moviesList from './reducers/moviesList';
import categoriesList from './reducers/categoriesList';
import checkedCategoriesList from './reducers/checkedCategoriesList';
import allMoviesList from './reducers/allMoviesList';

export default configureStore({
  reducer: {
    moviesList,
    categoriesList,
    checkedCategoriesList,
    allMoviesList
  },
});
