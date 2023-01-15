import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Movie } from "../../app/types";
import { rowsPerPageOptions } from "../../components/Pagination";

export interface Page {
  currentPage: number;
  moviesPerPage: number;
}
export interface MoviesState {
  movies: Movie[];
  filteredMovieIds: string[];
  categories: Category[];
  selectedCategories: Category[];
  page: Page;
  errorMessage: string | null;
}

const initialState: MoviesState = {
  categories: [],
  filteredMovieIds: [],
  movies: [],
  selectedCategories: [],
  page: {
    currentPage: 0,
    moviesPerPage: rowsPerPageOptions[rowsPerPageOptions.length - 1],
  },
  errorMessage: null,
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
      state.filteredMovieIds = state.filteredMovieIds.filter(
        (id) => id !== action.payload
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
    setPage: (state, action: PayloadAction<Page>) => {
      state.page = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string | null>) => {
      state.errorMessage = action.payload;
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
  setPage,
  setErrorMessage,
} = moviesSlice.actions;

export default moviesSlice.reducer;
