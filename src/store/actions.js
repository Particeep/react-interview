import { loadingMovies } from './mainSlice';
import { movies$ } from '../data/movies';

export const fetchMovies = () => {
  return async (dispatch) => {
    try {
      const movies = await movies$
      dispatch(loadingMovies(movies));
    } catch (err) {
      console.log(err);
    }
  }
};