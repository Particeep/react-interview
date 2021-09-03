import { combineReducers, createStore} from "redux"
import { MoviesReducer } from "./MoviesReducer"



export default createStore(
    combineReducers({
        movies: MoviesReducer,
        filter: (state = 0, action) => state
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

