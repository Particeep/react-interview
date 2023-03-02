import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

import moviesReducer from "./moviesSlice";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(thunk);

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
  middleware: middleware,
});

export default store;
