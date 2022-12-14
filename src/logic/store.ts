import { configureStore } from "@reduxjs/toolkit";
import filmsReducer from "./filmsSlices";
import categoriesReducer from "./categoriesSlices";

export const store = configureStore({
  reducer: {
    films: filmsReducer,
    categories: categoriesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
