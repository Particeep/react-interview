import { createSlice,createAsyncThunk  } from '@reduxjs/toolkit';
import {movies$} from "../data/movies"



// 
export const deleteMovie = createAsyncThunk('movies/deleteMovie', async (id, { getState }) => {
  const { movies } = getState();
  const updatedMovies = movies.movies.filter((movie) => movie.id !== id);
  // Simulate a delay in the delete operation
  await new Promise((resolve) => setTimeout(resolve, 100));
  return updatedMovies;
});

export const toggleLike = createAsyncThunk('movies/toggleLike', async (title, { getState }) => {
  const { movies } = getState();
  const updatedMovies = movies.movies.map((movie) => {
    if (movie.title === title) {
      return {
        ...movie,
        isLiked: !movie.isLiked,
        likes: movie.isLiked ? movie.likes - 1 : movie.likes + 1,
        dislikes: movie.dislikes,
      };
    }
    return movie;
  });
  // Simulate a delay in the toggle operation
  await new Promise((resolve) => setTimeout(resolve, 100));
  return updatedMovies;
});







const moviesSlice = createSlice({
  name: 'movies',
  initialState:{
    movies: [],
    status: 'idle',
    error: null
  },
  reducers: {},
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
    .addCase(deleteMovie.fulfilled, (state, action) => {
      state.movies = action.payload;
    })
    .addCase(toggleLike.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});


export const fetchMovies = createAsyncThunk('movies/fetchMovies', async () => {
  const response = await movies$;
  return response;
});

// export const {deleteMovie, toggleLike } = moviesSlice.actions;
export const selectAllMovies = (state) => state.movies.movies;
export default moviesSlice.reducer;
