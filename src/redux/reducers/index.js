import { combineReducers } from "redux";
import moviesReducer from "./moviesReducers";

const rootReducer = combineReducers({
  movies: moviesReducer,
});

export default rootReducer;
