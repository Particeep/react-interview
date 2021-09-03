import { ALL_MOVIE_ACTION, DELETE_MOVIE_ACTION, FILTER_MOVIE_ACTION, UPDATE_MOVIE_ACTION } from "./MoviesReducer";

export const allMovieAction = (movie) => ({
    type: ALL_MOVIE_ACTION,
    payload: movie
})

export const filterMovieAction = (movie) => ({
    type: FILTER_MOVIE_ACTION,
    payload: movie
})

export const toggleLikeMovieAction = (movie) => ({
    type: UPDATE_MOVIE_ACTION,
    payload: {...movie, likes: movie.likes + 1}
})

export const toggleDislikeMovieAction = (movie) => ({
    type: UPDATE_MOVIE_ACTION,
    payload: {...movie, dislikes: movie.dislikes + 1}
})

export const deleteMovieAction = (movie) => ({
    type: DELETE_MOVIE_ACTION,
    payload: movie.id
})