import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import monitorReducersEnhancer from "./enhancers/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./store/reducers";

export default function configureStore(preloadedState?: any) {
  const middlewares: any = [
    thunkMiddleware,
    process.env.NODE_ENV === "development" && loggerMiddleware,
  ].filter(Boolean);
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers: any = [
    middlewareEnhancer,
    process.env.NODE_ENV === "development" && monitorReducersEnhancer,
  ].filter(Boolean);

  let composedEnhancers: any = compose(...enhancers);
  if (process.env.NODE_ENV === "development") {
    composedEnhancers = composeWithDevTools(...enhancers);
  }
  
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return store;
}
