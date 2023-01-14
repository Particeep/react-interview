import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Movie } from "../../app/types";

export interface MoviesState {
  movies: Movie[];
  filteredMovieIds: string[];
  categories: Category[];
  selectedCategories: Category[];
}

const initialState: MoviesState = {
  categories: [],
  filteredMovieIds: [],
  movies: [],
  selectedCategories: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    deleteMovie: (state, action: PayloadAction<string>) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    setFilteredMovieIds: (state, action: PayloadAction<string[]>) => {
      state.filteredMovieIds = action.payload;
    },
    addLike: (state, action: PayloadAction<string>) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.likes++;
      }
    },
    addDislike: (state, action: PayloadAction<string>) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.dislikes++;
      }
    },
    removeLike: (state, action: PayloadAction<string>) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.likes--;
      }
    },
    removeDislike: (state, action: PayloadAction<string>) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        movie.dislikes--;
      }
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
    setSelectedCategories: (state, action: PayloadAction<Category[]>) => {
      state.selectedCategories = action.payload;
    },
  },
});

export const {
  setMovies,
  setCategories,
  deleteMovie,
  addDislike,
  addLike,
  removeDislike,
  removeLike,
  setFilteredMovieIds,
  setSelectedCategories,
} = moviesSlice.actions;

export default moviesSlice.reducer;
