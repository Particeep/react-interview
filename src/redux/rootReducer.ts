import { combineReducers } from "redux";
import movieListReducer, {
  IMovieListState,
} from "./movieListSlice/movieListSlice";

export interface IState {
  movieListReducer: IMovieListState;
}

export const rootReducer = combineReducers({
  movieListReducer,
});

export default rootReducer;
