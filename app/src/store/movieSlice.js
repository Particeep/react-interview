import { createSlice } from "@reduxjs/toolkit";

// import { movies$ } from "../utils/movies";

const initialState = {
  movies: [],
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,

  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload
    },
    removeMovie: (state, action) => {
      state.movies = state.movies.filter((movie) => movie.id !== action.payload.id);
    },
    addLike: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload.id && !movie.isLiked) {
          movie.likes += 1;
          movie.isLiked = true;
          movie.isDisliked = false;
        } else  if (movie.id === action.payload.id) {
          movie.likes -= 1;
          movie.isLiked = false;
          movie.isDisliked = false;
        }

        return movie;
      });
    },
    addDislike: (state, action) => {
      state.movies = state.movies.map((movie) => {
        if (movie.id === action.payload.id && !movie.isDisliked) {
          movie.dislikes += 1;
          movie.isLiked = false;
          movie.isDisliked = true;
        } else if (movie.id === action.payload.id) {
          movie.dislikes -= 1;
          movie.isLiked = false;
          movie.isDisliked = false;
        }

        return movie;
      });
    },
  },
});


export const { addMovies, removeMovie, addLike, addDislike } = movieSlice.actions;

export const selectMovies = (state) => state.movies.movies;

export default movieSlice.reducer;
