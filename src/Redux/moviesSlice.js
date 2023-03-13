import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit';
import {movies$} from "../data/movies"

const moviesSlice = createSlice({
  name: 'movies',
  initialState:{
    movies: [],
    status: 'idle',
    error: null
  },
  reducers: {
    deleteMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload);
    },
    toggleLike: (state, action) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        if (movie.isDisliked) {
          movie.isDisliked = false;
          movie.dislikes--;
        }
        movie.isLiked = !movie.isLiked;
        movie.likes = movie.isLiked ? movie.likes + 1 : movie.likes - 1;
      }
    },
    toggleDisLike: (state, action) => {
      const movie = state.movies.find((movie) => movie.id === action.payload);
      if (movie) {
        if (movie.isLiked) {
          movie.isLiked = false;
          movie.likes--;
        }
        movie.isDisliked = !movie.isDisliked;
        movie.dislikes = movie.isDisliked ? movie.dislikes + 1 : movie.dislikes - 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchMovies.pending, (state) => {
      state.status = 'loading';
    })
    .addCase(fetchMovies.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.movies = action.payload;
    })
    .addCase(fetchMovies.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  },
});


/* Creating a thunk that will be dispatched to the reducer. */
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await movies$;
  return response;
});

export const {deleteMovie, toggleLike, toggleDisLike } = moviesSlice.actions;
export const selectAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;
