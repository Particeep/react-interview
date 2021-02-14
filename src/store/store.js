import { configureStore } from '@reduxjs/toolkit';
import moviesList from './reducers/moviesList';
import categoriesList from './reducers/categoriesList';

export default configureStore({
  reducer: {
    moviesList,
    categoriesList
  },
});
