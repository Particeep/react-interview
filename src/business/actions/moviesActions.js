import { DELETE_MOVIE, GET_MOVIES } from '../constants';

import { movies$ as movies } from '../mock/movies';

export const getMovies = (moviesData) => {
  return (dispatch) => {
    if (moviesData) {
      dispatch({ type: GET_MOVIES, payload: moviesData });
    } else {
      movies.then((data) => {
        dispatch({ type: GET_MOVIES, payload: data });
      });
    }
  };
};

export const deleteMovie = (movieId) => {
  return (dispatch) => {
    dispatch({ type: DELETE_MOVIE, payload: { movieId } });
  };
};
