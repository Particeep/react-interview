import { 
    SET_MOVIES,
    SET_MOVIES_CATEGORIES,
    SET_CATEGORY_FILTERS
   } from "../../action-types";
  
import MovieType from "../../../types/movie";

export const setMovies = (movies: MovieType[]) => ({
    type: SET_MOVIES,
    payload: { movies }
});


export const setMoviesCategories = (categories: string[]) => ({
    type: SET_MOVIES_CATEGORIES,
    payload: { categories }
});

export const setCategoryFilters = (filters: string[]) => ({
    type: SET_CATEGORY_FILTERS,
    payload: { filters }
});
