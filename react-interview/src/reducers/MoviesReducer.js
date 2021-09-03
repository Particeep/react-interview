import { movies$ } from "../components/Movies"

export const initialMovies = []

export const UPDATE_MOVIE_ACTION = "UPDATE_MOVIE_ACTION"
export const DELETE_MOVIE_ACTION = "DELETE_MOVIE_ACTION"
export const ALL_MOVIE_ACTION = "ALL_MOVIE_ACTION"
export const FILTER_MOVIE_ACTION = "ALL_MOVIE_ACTION"
export const DISLIKE_MOVIE_ACTION = "DISLIKE_MOVIE_ACTION"

export function MoviesReducer(state = initialMovies, action){
    switch (action.type) {
        case ALL_MOVIE_ACTION:
            return action.payload
        
        case UPDATE_MOVIE_ACTION:
            return state.map(movie => {
                if (movie.id === action.payload.id) {
                    return {...movie, ...action.payload}
                } else {
                    return movie
                }
            })
        
        case DISLIKE_MOVIE_ACTION:
            return state.map(movie => {
                if (movie.id === action.payload.id) {
                    return {...movie, ...action.payload}
                } else {
                    return movie
                }
            })
        
        case FILTER_MOVIE_ACTION:
            return state.map(movie => {
                if (movie.category === action.payload.category) {
                    return {...movie, ...action.payload}
                } else {
                    return movie
                }
            })
        
        case DELETE_MOVIE_ACTION:
            return state.filter(movie => movie.id !== action.payload)
        
        default:
            return state
    }
}