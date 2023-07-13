import {
  FETCH_MOVIES_REQUEST,
  FETCH_MOVIES_SUCCESS,
  FETCH_MOVIES_FAILURE,
  DELETE_MOVIE_REQUEST,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  SET_SELECTED_CATEGORIES,
} from "./actionTypes";

const initialState = {
  movies: {
    pending: false,
    movies: [],
    error: null,
  },
  categories: {
    pending: false,
    categories: [],
    error: null,
  },
  selectedCategories: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_REQUEST:
      return {
        ...state,
        movies: {
          ...{
            pending: true,
          },
        },
      };
    case FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movies: {
          pending: false,
          movies: action.payload.movies,
          error: null,
        },
      };
    case FETCH_MOVIES_FAILURE:
      return {
        ...state,
        movies: {
          pending: false,
          movies: [],
          error: action.payload.error,
        },
      };
    case DELETE_MOVIE_REQUEST:
      return {
        ...state,
        movies: {
          ...{
            pending: true,
          },
        },
      };

    case DELETE_MOVIE_SUCCESS:
      return {
        ...state,
        movies: {
          pending: false,
          movies: action.payload.movies,
          error: null,
        },
      };
    case DELETE_MOVIE_FAILURE:
      return {
        ...state,
        movies: {
          pending: false,
          movies: [],
          error: action.payload.error,
        },
      };
    case FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        categories: {
          ...{
            pending: true,
          },
        },
      };
    case SET_SELECTED_CATEGORIES:
      return {
        ...state,
        selectedCategories: action.payload.selectedCategories,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: {
          pending: false,
          categories: action.payload.categories,
          error: null,
        },
      };
    case FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        categories: {
          pending: false,
          categories: [],
          error: action.payload.error,
        },
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
