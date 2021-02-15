export const ADD_MOVIES = 'ADD_MOVIES';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const FILTER_MOVIES = 'FILTER_MOVIES';
export const SET_ALL_MOVIES = 'SET_ALL_MOVIES';
export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES';
export const SET_CHECKED_CATEGORIES = 'SET_CHECKED_CATEGORIES';
export const ADD_LIKE = 'ADD_LIKE';
export const DELETE_LIKE = 'DELETE_LIKE';
export const ADD_DISLIKE = 'ADD_DISLIKE';
export const DELETE_DISLIKE = 'DELETE_DISLIKE';
export const SET_MOVIES_PER_PAGE = 'SET_MOVIES_PER_PAGE';
export const SET_PAGE_NUMBERS = 'SET_PAGE_NUMBERS';
export const PAGINATE = 'PAGINATE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';

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

export const filterMovies = (movies, categories) => {
    return {
        type: FILTER_MOVIES,
        movies,
        categories
    }
}

export const setAllMovies = (movies) => {
    return {
        type: SET_ALL_MOVIES,
        movies
    }
}

export const setAllCategories = (movies) => {
    return {
        type: SET_ALL_CATEGORIES,
        movies
    }
}

export const setCheckedCategories = (category) => {
    return {
        type: SET_CHECKED_CATEGORIES,
        category
    }
}

export const addLike = (movie) => {
    return {
        type: ADD_LIKE,
        movie
    }
}

export const deleteLike = (movie) => {
    return {
        type: DELETE_LIKE,
        movie
    }
}

export const addDislike = (movie) => {
    return {
        type: ADD_DISLIKE,
        movie
    }
}

export const deleteDislike = (movie) => {
    return {
        type: DELETE_DISLIKE,
        movie
    }
}

export const setMoviesPerPage = (number) => {
    return {
        type: SET_MOVIES_PER_PAGE,
        number
    }
}

export const setPageNumbers = (moviesNumber, moviesPerPage) => {
    return {
        type: SET_PAGE_NUMBERS,
        moviesNumber,
        moviesPerPage
    }
}

export const paginate = (pageNumber) => {
    return {
        type: PAGINATE,
        pageNumber
    }
}

export const nextPage = (lastPage) => {
    return {
        type: NEXT_PAGE,
        lastPage
    }
}

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
}