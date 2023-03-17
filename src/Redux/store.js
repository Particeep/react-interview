import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import moviesReducer from "./moviesSlice";

/**
 * The middleware function takes a function as an argument, and returns an array of middleware
 * functions.
 */
const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunk);

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware,
});

export default store;
