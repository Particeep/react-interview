import { configureStore } from "@reduxjs/toolkit";
import movieReduceur from "./store/movieSlice";

export default configureStore({
  reducer: {
    movies: movieReduceur,
  },
});
