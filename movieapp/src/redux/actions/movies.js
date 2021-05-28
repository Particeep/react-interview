import { HANDLE_LIKE ,SET_TEXT_FILTER, DELETE_MOVIE, FILTER_MOVIE, REMOVE_FILTER_MOVIE, SET_CHECKBOX_FILTER } from '../constants/actionTypes';

export const deleteMovie = (id) => {
    return {
        type: DELETE_MOVIE,
        id
    }
}

export const setTextFilter = (name) => {
   return {
    type: SET_TEXT_FILTER,
    name
   }
}

export const filterMovie = (category) => {
    return {
        type: FILTER_MOVIE,
        category
    }
}

export const removeFilterMovie = (category) => {
    return {
        type: REMOVE_FILTER_MOVIE,
        category
    }
}

export const setCheckboxFilter = (category) => {
    return{
        type: SET_CHECKBOX_FILTER,
        category
    }
}

export const handleLike = (likes) => {
    return {
        type: HANDLE_LIKE,
        likes
    }
}
