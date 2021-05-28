













import {combineReducers} from 'redux';
import {moviesReducer} from './movie'


const rootReducer= combineReducers({
    movies:moviesReducer,
})

export default rootReducer;