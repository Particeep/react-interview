import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'
import { Movie } from '../interfaces';

export interface mainState {
  movies: Movie[] | null | undefined;
  currentPage: number;
  moviesPerPage: number;
  categories: string[] | null;
  selectedCategory: string;
  endOfNext: boolean;
  loading: boolean;
  isLastMovie: boolean;
}

const initialState: mainState =  {
  movies: null,
  currentPage: 1,
  moviesPerPage: 4,
  categories: null,
  selectedCategory: 'all',
  endOfNext: false,
  loading: true,
  isLastMovie: false
}

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload
    },

    setMoviesAndCategories(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
      state.categories = [...new Set(state.movies.map(movie => movie.category))];
    },

    like(state, action: PayloadAction<number>) {
      const id = action.payload;

      const newMovies = state.movies?.map((movie) => {
        if (movie.id === id && !movie.liked && !movie.disliked) {
          return ({
            ...movie,
            likes: movie.likes + 1,
            liked: true
          })
        } else if (movie.id === id && !movie.liked && movie.disliked) {
          return ({
            ...movie,
            likes: movie.likes + 1,
            dislikes: movie.dislikes - 1,
            liked: true,
            disliked: false
          })
        } else if (movie.id === id && movie.liked) {
          return ({
            ...movie,
            likes: movie.likes - 1,
            liked: false
          })
        } else {
          return movie
        }
      })

      state.movies = newMovies;
    },

    dislike(state, action: PayloadAction<number>) {
      const id = action.payload; 

      const newMovies = state.movies?.map(movie => {
        if (movie.id === id && !movie.disliked && !movie.liked) {
          return ({
            ...movie,
            dislikes: movie.dislikes + 1,
            disliked: true
          })
        } else if (movie.id === id && !movie.disliked && movie.liked) {
          return ({
            ...movie,
            dislikes: movie.dislikes + 1,
            likes: movie.likes - 1,
            disliked: true,
            liked: false
          })
        } else if (movie.id === id && movie.disliked) {
          return ({
            ...movie,
            dislikes: movie.dislikes - 1,
            disliked: false
          })
        } else {
          return movie
        }
      })

      state.movies = newMovies;
    },

    removeMovie(state, action: PayloadAction<{ id: number, category: string }>) {
      const id = action.payload.id;
      const isLastMovieOfCurrentCategory = state.movies?.filter(movie => movie.category === action.payload.category).length === 1;
      const isLastMovie = state.movies?.length === 1;
      
      state.movies = state.movies?.filter(movie => movie.id !== id);
      state.categories = [...new Set(state.movies?.map(movie => movie.category))];
      
      if (isLastMovieOfCurrentCategory) state.selectedCategory = 'all';
      if (isLastMovie) state.isLastMovie = true;
    },

    filter(state, action: PayloadAction<string>) {
      state.currentPage = 1;
      state.selectedCategory = action.payload;
    },

    setMoviesPerPage(state, action: PayloadAction<number>) {
      state.currentPage = 1;
      state.moviesPerPage = action.payload
    },

    setCurrentPage(state, action: PayloadAction<string>) {
      if (action.payload === 'next' && !state.endOfNext) {
        state.currentPage = state.currentPage + 1;
      } else if (action.payload === 'prev' && state.currentPage !== 1) {
        state.currentPage = state.currentPage - 1;
      }
    },

    setEndOfNext(state) {
      const firstMovie = state.currentPage === 1 ? 0 : (state.currentPage - 1) * state.moviesPerPage;
      const lastMovie = firstMovie + state.moviesPerPage;

      if (state.selectedCategory === 'all') {
        state.movies!.length <= lastMovie ?
        state.endOfNext = true :
        state.endOfNext = false;
      } else {
        state.movies!.filter(movie => movie.category === state.selectedCategory).length <= lastMovie ?
        state.endOfNext = true :
        state.endOfNext = false;
      }
    }
  }
});

export const {
  setLoading, 
  setMoviesAndCategories,
  like, 
  dislike, 
  removeMovie, 
  filter, 
  setMoviesPerPage, 
  setCurrentPage,
  setEndOfNext 
} = mainSlice.actions

export default mainSlice.reducer