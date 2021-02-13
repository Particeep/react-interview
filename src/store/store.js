import { configureStore } from '@reduxjs/toolkit';
import moviesList from './reducers/moviesList';

export default configureStore({
  reducer: {
    moviesList
  },
});
