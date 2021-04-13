import {LOAD_MOVIES,DELETE_MOVIE,LIKE_MOVIE,DISLIKE_MOVIE,CANCEL_LIKE_MOVIE,CANCEL_DISLIKE_MOVIE } from './index';

export const loadMovies = data => {
    
    return {
        type: LOAD_MOVIES,
        payload: data
    }
}

export const deleteMovie = id => {
    
    return {
        type: DELETE_MOVIE,
        payload: id,

       
    }
}

export const likeMovie = id => {
    
    return {
        type: LIKE_MOVIE,
        payload: id
    }
}
export const dislikeMovie = id => {
    
    return {
        type: DISLIKE_MOVIE,
        payload: id
    }
}

export const cancelLikeMovie = id => {
    
    return {
        type: CANCEL_LIKE_MOVIE,
        payload: id
    }
}
export const cancelDisLikeMovie = id => {
    
    return {
        type: CANCEL_DISLIKE_MOVIE,
        payload: id
    }
}