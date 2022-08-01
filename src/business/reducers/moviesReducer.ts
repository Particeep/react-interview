import { DELETE_MOVIE, GET_MOVIES } from '../constants';

export const initialState = [];

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      localStorage.setItem(
        'movies',
        JSON.stringify({
          movies: action.payload
        })
      );
      return action.payload;
    case DELETE_MOVIE:
      return state.filter((movie) => movie.id !== action.payload.movieId);
    default:
      return state;
  }
}
