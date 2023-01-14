import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Category, Movie } from "../../app/types";

export interface MoviesState {
  movies: Movie[];
  categories: Category[];
}

const initialState: MoviesState = {
  categories: [],
  movies: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action: PayloadAction<Movie[]>) => {
      state.movies = action.payload;
    },
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setMovies, setCategories } = moviesSlice.actions;

export default moviesSlice.reducer;
