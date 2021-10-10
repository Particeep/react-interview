import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import pagesReducer from "./pagesSlice";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    pages: pagesReducer,
  },
});
