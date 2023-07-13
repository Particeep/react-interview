import {
	FETCH_MOVIES_REQUEST,
	FETCH_MOVIES_FAILURE,
	FETCH_MOVIES_SUCCESS,
	DELETE_MOVIE_REQUEST,
	DELETE_MOVIE_SUCCESS,
	DELETE_MOVIE_FAILURE,
	FETCH_CATEGORIES_SUCCESS,
	FETCH_CATEGORIES_REQUEST,
	FETCH_CATEGORIES_FAILURE,
	SET_SELECTED_CATEGORIES
} from "./actionTypes";

export const fetchMoviesRequest = (payload) => ({
	type: FETCH_MOVIES_REQUEST,
	payload
});

export const fetchMoviesSuccess = (payload) => ({
	type: FETCH_MOVIES_SUCCESS,
	payload,
});

export const fetchMoviesFailure = (payload) => ({
	type: FETCH_MOVIES_FAILURE,
	payload,
});

export const deleteMovieRequest = (payload) => ({
	type: DELETE_MOVIE_REQUEST,
	payload,
});

export const deleteMovieSuccess = (payload) => ({
	type: DELETE_MOVIE_SUCCESS,
	payload,
});

export const deleteMovieFailure = (payload) => ({
	type: DELETE_MOVIE_FAILURE,
	payload,
});

export const fetchCategoriesRequest = () => ({
	type: FETCH_CATEGORIES_REQUEST,
});

export const setSelectedCategories = (payload) => ({
	type: SET_SELECTED_CATEGORIES,
	payload,
});

export const fetchCategoriesSuccess = (payload) => ({
	type: FETCH_CATEGORIES_SUCCESS,
	payload,
});

export const fetchCategoriesFailure = (payload) => ({
	type: FETCH_CATEGORIES_FAILURE,
	payload,
});
