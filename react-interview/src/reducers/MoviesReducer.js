import { movies$ } from "../components/Movies"

const initialMovies = movies$.then((data) => {
    return data
})

console.log(initialMovies)

export const UPDATE_MOVIE_ACTION = "UPDATE_MOVIE_ACTION"

export function MoviesReducer(state = initialMovies, action){
    switch (action.type) {
        case UPDATE_MOVIE_ACTION:
            return [...state,]
        default:
            return state
    }
}