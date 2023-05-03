import {
  configureStore,
} from "@reduxjs/toolkit";


import rootReducer from "./rootReducer";

export let store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default {
  store,
};
