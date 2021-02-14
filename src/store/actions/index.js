export const ADD_MOVIES = 'ADD_MOVIES';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const FILTER_MOVIES = 'FILTER_MOVIES';
export const SET_CATEGORIES = 'SET_CATEGORIES';

export const addMovies = (movies) => {
    return {
        type: ADD_MOVIES,
        movies
    }
};

export const deleteMovie = (movie) => {
    return {
        type: DELETE_MOVIE,
        movie
    }
};

export const filterMovies = (categories) => {
    return {
        type: FILTER_MOVIES,
        categories
    }
}

export const setCategories = (movies) => {
    return {
        type: SET_CATEGORIES,
        movies
    }
}