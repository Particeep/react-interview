import { createSlice } from '@reduxjs/toolkit';

/*=============================================
=            MovieState TYPE          =
=============================================*/
export interface IMovie{
    id: string,
    title: string,
    category: string,
    likes: number,
    dislikes: number
}
export interface IMovieListState{
    movieListRaw: IMovie[];
    movieListFiltred: IMovie[];
    movieLikedList: string[];
    categoriesList: string[];
    categoriesSelectedList: string[];
    isLoading: boolean;
    pagination: {
        currentPage: number;
        nbPage: number;
        nbMoviesPerPage: number;
    }
}

/*=============================================
=            INITIAL STATE        =
=============================================*/

const initialState: IMovieListState ={
    isLoading: false,
    movieListRaw: [],
    movieListFiltred: [],
    movieLikedList: [],
    categoriesList:[],
    categoriesSelectedList: [],
    pagination: {
        currentPage: 1,
        nbPage: 5,
        nbMoviesPerPage: 4,
    }
}

export const slice = createSlice({
    name: 'movieListReducer',
    initialState,
    reducers:{
        setMovieListRawAction: (state, action) => {
            state.movieListRaw = action.payload
        },
        setMovieListFiltredAction: (state, action) => {
            state.movieListFiltred = action.payload
        },
        setMovieLikedAction: (state, action) => {
            state.movieLikedList = action.payload
        },
        setCategoriesListAction: (state, action) => {
            state.categoriesList = action.payload
        },
        setCategoriesSelectedListAction: (state, action) => {
            state.categoriesSelectedList = action.payload
        },

        setPaginationAction: (state, action) => {
            state.pagination = action.payload
        },

        setIsLoadingAction: (state, action) => {
            state.isLoading = action.payload
        }

    }
});

export const {
    setMovieListRawAction,
    setMovieListFiltredAction,
    setMovieLikedAction, 
    setCategoriesListAction, 
    setCategoriesSelectedListAction,
    setPaginationAction,
    setIsLoadingAction
} = slice.actions;

export default slice.reducer