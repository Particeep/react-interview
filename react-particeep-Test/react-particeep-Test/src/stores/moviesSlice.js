import { createSlice } from "@reduxjs/toolkit";
import { movies$ } from "../data/movies";

const initialState = {
  allMovies: undefined,
  movies: undefined,
  categories: undefined,
  loading: true,
  error: undefined,
  pagination: {
    page: 1,
    perPage: 4,
    hasPreviousPage: false,
    hasNextPage: false,
  },
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    // set movies and categories
    setMoviesAndCategories: (state, action) => {
      state.movies = action.payload.movies;
      state.categories = action.payload.categories;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.movies = undefined;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // set pagination
    setPagination: (state, action) => {
      state.pagination = action.payload;
    },
    // delete movie
    deleteMovie: (state, action) => {
      const id = action.payload;
      const newMovies = state.movies.filter((movie) => movie.id !== id);
      state.movies = newMovies;
      state.categories = getCategories(newMovies);
    },
    // Add a Like to a movie
    addLike: (state, action) => {
      const id = action.payload;
      const newMovies = state.movies.map((movie) => {
        if (movie.id === id) {
          movie.likes++;
        }
        return movie;
      });
      state.movies = newMovies;
    },
    // Add a Dislike to a movie
    addDislike: (state, action) => {
      const id = action.payload;
      const newMovies = state.movies.map((movie) => {
        if (movie.id === id) {
          movie.dislikes++;
        }
        return movie;
      });
      state.movies = newMovies;
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteMovie, addLike, addDislike, setMoviesAndCategories, setCategories, setError, setLoading, setPagination } = moviesSlice.actions;

export default moviesSlice.reducer;

function getCategories(movies) {
  let categories = [];
  categories = movies.reduce((acc, movie) => {
    if (!acc.includes(movie.category)) {
      acc.push(movie.category);
    }
    return acc;
  }, []);
   return categories;
}
// fetchMovies
export function fetchMovies() {
  return async (dispatch) => {
    dispatch(setLoading());
    try {
      // get movies
      let movies = await movies$;
      // extract categories from movies
      let categories = getCategories(movies);
      dispatch(setMoviesAndCategories({ movies, categories }));
    } catch (error) {
      dispatch(setError(error.message || "Something went wrong during fetching movies"));
    }
  };
}
