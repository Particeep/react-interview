  
import { combineReducers } from 'redux'
import moviesReducer from './movies/reducer'

const reducers = combineReducers({
    moviesReducer
});

export default reducers;