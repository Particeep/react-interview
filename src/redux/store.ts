import {
  configureStore,
  MiddlewareArray,
  PreloadedState,
} from "@reduxjs/toolkit";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

export let store = configureStore({
  reducer: rootReducer,
  //middleware: new MiddlewareArray().concat(logger)
});

export type RootState = ReturnType<typeof rootReducer>;

export default {
  store,
};
