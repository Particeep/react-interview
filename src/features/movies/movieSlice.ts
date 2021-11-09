import { createAsyncThunk, createEntityAdapter, createSlice, EntityState, PayloadAction } from '@reduxjs/toolkit'
import { getMovies } from './movieAPI'

export interface Movie {
    id: string,
    title: string,
    category: string,
    likes: number,
    dislikes: number,
    image: string
}

export interface MovieState {
    fetchMoviesLoader: boolean,
    movies: EntityState<Movie>,
    filter: {
        categories:  Array<string>
    },
    pagination: {
        currentPage: number,
        rowsPerPage: number,
    },
    likedMovies: Array<string>,
    dislikedMovies: Array<string>,
}

export const movieAdapter = createEntityAdapter<Movie>();

export const fetchMovies = createAsyncThunk(
    'movie/fetchMovies',
    async () => {
        return await getMovies();
    }
)

export const initialState: MovieState = {
    fetchMoviesLoader: false,
    movies: movieAdapter.getInitialState(),
    filter: {
        categories: []
    },
    pagination: {
        currentPage: 0,
        rowsPerPage: -1,
    },
    likedMovies: [],
    dislikedMovies: [],
}

const { actions, reducer } = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        removeMovie(state, action: PayloadAction<string>){
            movieAdapter.removeOne(state.movies, action.payload)
        },
        likeMovie(state, action){
            movieAdapter.updateOne(state.movies, action.payload)
            state.likedMovies.push(action.payload.id)
        },
        unlikeMovie(state, action){
            movieAdapter.updateOne(state.movies, action.payload)
            state.likedMovies = state.likedMovies.filter((i) => i !== action.payload.id)
        },
        dislikeMovie(state, action){
            movieAdapter.updateOne(state.movies, action.payload)
            state.dislikedMovies.push(action.payload.id)
        },
        undislikeMovie(state, action){
            movieAdapter.updateOne(state.movies, action.payload)
            state.dislikedMovies = state.dislikedMovies.filter((i) => i !== action.payload.id)
        },
        setCategories(state, action: PayloadAction<Array<string>>){
            state.filter.categories = action.payload.includes('all') ? [] : action.payload
        },
        setPage(state, action: PayloadAction<number>){
            state.pagination.currentPage = action.payload
        },
        setRowsPerPage(state, action: PayloadAction<number>){
            state.pagination.rowsPerPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.fetchMoviesLoader = true;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                movieAdapter.setAll(state.movies, action.payload)
                state.fetchMoviesLoader = false;
            })
            .addCase(fetchMovies.rejected, (state) => {
                state.fetchMoviesLoader = false;
            })
    }
});

export const { 
    removeMovie,
    likeMovie,
    unlikeMovie,
    dislikeMovie,
    undislikeMovie,
    setPage,
    setRowsPerPage, 
    setCategories, 
} = actions;
export default reducer;


export const {
    selectAll: selectMovies,
    selectById: selectMovieById
 } = movieAdapter.getSelectors((state: { movies: MovieState}) => state.movies.movies)

 export const selectMovieFilter = (state: { movies: MovieState}) => state.movies.filter
