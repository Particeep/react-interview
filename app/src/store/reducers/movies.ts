import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../actions";

const initialState = {
  loading: false,
  list: [],
  error: null,
} as any;
const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    deleteFromList(state, action: { payload: number }) {
      state.list = state.list.filter((e: any) => e.id !== action.payload);
    },
    toggleLike(state, action) {
      const movie = state.list.find(
        (x: { id: string }) => x.id === action.payload
      );
      if (movie) {
        if (typeof movie.userLike === "boolean") {
          movie.userLike = !movie.userLike;
          movie[movie.userLike ? "likes" : "dislikes"]++;
          movie[!movie.userLike ? "likes" : "dislikes"]--;
        } else {
          movie.userLike = !movie.userLike;
          movie[movie.userLike ? "likes" : "dislikes"]++;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getMovies.fulfilled, (state, action: { payload: any }) => {
      return {
        ...state,
        loading: false,
        list: action.payload.data,
      };
    });
    builder.addCase(getMovies.rejected, (state, action: { error: any }) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    });
  },
});

export const { deleteFromList, toggleLike } = movies.actions;
export default movies.reducer;
