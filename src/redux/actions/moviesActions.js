import {
  GET_MOVIES,
  LIKE_MOVIE,
  DISLIKE_MOVIE,
  FILTER_BY_CATEGORY,
  DELETE_MOVIE,
} from "./actionTypes";
import { movies$ } from "../../movies";

export const fetchMovies = () => {
  return (dispatch) => {
    movies$.then((movies) => {
      dispatch(getMovies(movies));
    });
  };
};

export const getMovies = (movies) => {
  return {
    type: GET_MOVIES,
    payload: movies,
  };
};

export const likeMovie = (movieId) => {
  return {
    type: LIKE_MOVIE,
    payload: movieId,
  };
};

export const dislikeMovie = (movieId) => {
  return {
    type: DISLIKE_MOVIE,
    payload: movieId,
  };
};

export const filterByCategory = (filteredMovies) => {
  return {
    type: FILTER_BY_CATEGORY,
    payload: filteredMovies,
  };
};

export const deleteMovie = (movieId) => {
  return {
    type: DELETE_MOVIE,
    payload: movieId,
  };
};
