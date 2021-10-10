import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { movies$ } from "../movies";

const initialState = {
  status: null,
  error: null,
  movies: [],
  liked: [], // Contains IDs of liked movies
  disliked: [], // Contains IDs of disliked movies
  filter: null, // Filtered category
};

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async ({ rejectWithValue }) => {
    try {
      const response = await movies$;
      return response;
    } catch (err) {
      console.log(err.reponse.data);
      return rejectWithValue("An error occured.");
    }
  }
);

export const moviesSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    fetch_movies: (state, action) => {
      return {
        ...state,
        movies: action.payload,
      };
    },

    filter_movies: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },

    like_movie: (state, action) => {
      return {
        ...state,
        liked: [...state.liked, action.payload],
        movies: state.movies.map((movie) =>
          movie.id !== action.payload
            ? movie
            : { ...movie, likes: movie.likes + 1 }
        ),
      };
    },

    unlike_movie: (state, action) => {
      return {
        ...state,
        liked: state.liked.filter((movie) => movie !== action.payload),
        movies: state.movies.map((movie) =>
          movie.id !== action.payload
            ? movie
            : { ...movie, likes: movie.likes - 1 }
        ),
      };
    },

    dislike_movie: (state, action) => {
      return {
        ...state,
        disliked: [...state.disliked, action.payload],
        movies: state.movies.map((movie) =>
          movie.id !== action.payload
            ? movie
            : { ...movie, dislikes: movie.dislikes + 1 }
        ),
      };
    },

    undislike_movie: (state, action) => {
      return {
        ...state,
        disliked: state.disliked.filter((movie) => movie !== action.payload),
        movies: state.movies.map((movie) =>
          movie.id !== action.payload
            ? movie
            : { ...movie, dislikes: movie.dislikes - 1 }
        ),
      };
    },

    remove_movie: (state, action) => {
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "success";
        state.movies = action.payload;
        state.filtered = action.payload;
      })
      .addCase(fetchMovies.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const {
  fetch_movies,
  filter_movies,
  like_movie,
  unlike_movie,
  dislike_movie,
  undislike_movie,
  remove_movie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
