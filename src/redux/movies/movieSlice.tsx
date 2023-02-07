//React libraries
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

//Typescript type
import {Movie} from "../../data/movies";
import {RootState} from "../../store";

type State = {
    categories: string[];
    currentPage: number;
    itemsPerPage: number;
    movies: Movie[];
};

const initialState: State = {
    categories: [],
    currentPage: 0,
    itemsPerPage: 12,
    movies: [],
};

export const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        dislikeMovie: (state, action: PayloadAction<string>) => {
            state.movies = state.movies.map(movie => {
                if (movie.id === action.payload) {
                    movie.dislikes = movie.dislikes + 1
                }
                return movie
            })
        },
        likeMovie: (state, action: PayloadAction<string>) => {
            state.movies = state.movies.map(movie => {
                if (movie.id === action.payload) {
                    movie.likes = movie.likes + 1
                }
                return movie
            })
        },
        removeMovie: (state, action: PayloadAction<string>) => {
            state.movies = state.movies.filter(movie => movie.id !== action.payload)
        },
        setCategories: (state, action: PayloadAction<string[]>) => {
            state.categories = action.payload;
        },
        setCurrentPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setItemsPerPage: (state, action: PayloadAction<number>) => {
            state.itemsPerPage = action.payload;
        },
        setMovies: (state, action: PayloadAction<Movie[]>) => {
            state.movies = action.payload;
        }
    },
});

export const { dislikeMovie, likeMovie, removeMovie, setCategories, setCurrentPage, setItemsPerPage, setMovies } = movieSlice.actions;

export const selectCategories = (state: RootState) => Array.from(new Set<string>(state.movies.movies.map(movie => movie.category)));
export const selectMovies = (state: RootState) => state.movies;

export default movieSlice.reducer;
