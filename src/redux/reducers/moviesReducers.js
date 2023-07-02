import {
  GET_MOVIES,
  LIKE_MOVIE,
  DISLIKE_MOVIE,
  FILTER_BY_CATEGORY,
  DELETE_MOVIE,
} from "../actions/actionTypes";

const initialState = {
  movies: [],
  filteredMovies: [],
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES: {
      return {
        ...state,
        movies: action.payload,
        filteredMovies: action.payload,
      };
    }
    case LIKE_MOVIE: {
      const updatedMovies = state.movies.map((movie) => {
        if (movie.id === action.payload) {
          console.log("movie r: ", movie.id, movie.likes, action.payload);
          return {
            ...movie,
            likes: movie.likes + 1,
          };
        }
        return movie;
      });

      return {
        ...state,
        movies: updatedMovies,
      };
    }
    case DISLIKE_MOVIE: {
      const updatedMovies = state.movies.map((movie) => {
        if (movie.id === action.payload) {
          return {
            ...movie,
            dislikes: movie.dislikes + 1,
          };
        }
        return movie;
      });

      return {
        ...state,
        movies: updatedMovies,
      };
    }
    case FILTER_BY_CATEGORY: {
      return {
        ...state,
        filteredMovies: action.payload,
      };
    }
    case DELETE_MOVIE: {
      const updatedMovies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
      const updatedFilteredMovies = state.filteredMovies.filter(
        (movie) => movie.id !== action.payload
      );

      return {
        ...state,
        movies: updatedMovies,
        filteredMovies: updatedFilteredMovies,
      };
    }
    default:
      return state;
  }
};

export default moviesReducer;
