import {
  GET_MOVIES,
  LIKE_MOVIE,
  DISLIKE_MOVIE,
  FILTER_BY_CATEGORY,
  DELETE_MOVIE,
} from "../actions/actionTypes";

const initialState = {
  movies: [],
  filteredMovies: [], // Add filteredMovies array to the initial state
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
        filteredMovies: action.payload, // Initialize filteredMovies with all movies
      };
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredMovies: action.payload,
      };
    case LIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, likes: movie.likes + 1 }
            : movie
        ),
        filteredMovies: state.filteredMovies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, likes: movie.likes + 1 }
            : movie
        ),
      };
    case DISLIKE_MOVIE:
      return {
        ...state,
        movies: state.movies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, dislikes: movie.dislikes + 1 }
            : movie
        ),
        filteredMovies: state.filteredMovies.map((movie) =>
          movie.id === action.payload
            ? { ...movie, dislikes: movie.dislikes + 1 }
            : movie
        ),
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
        filteredMovies: state.filteredMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
export default moviesReducer;
