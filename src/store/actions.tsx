import { setLoading, setMoviesAndCategories } from './mainSlice';
import { movies$ } from '../data/movies';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

export const fetchMovies = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    try {
      const movies = await movies$
      dispatch(setMoviesAndCategories(movies));
      dispatch(setLoading(false));
    } catch (err) {
      console.error(err);
    }
  }
};