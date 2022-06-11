import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { movies$ } from "../../assets/data/movies";

export enum StatusEnum {
  "IDLE" = "IDLE",
  "LOADING" = "LOADING",
  "FAILED" = "FAILED",
}

export enum ReactionTypeEnum {
  "LIKE" = "likes",
  "DISLIKE" = "dislikes",
}

export interface MovieModel {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  link: string;
  reacted?: ReactionTypeEnum;
}

export interface MoviesState {
  allMovies: MovieModel[];
  moviesPerCategory: MovieModel[];
  movies: MovieModel[];
  status: StatusEnum;
  categories: string[];
  currentCategory: string | null;
  moviesPerPage: number;
  currentPage: number;
  totalPages: number;
}

const initialState: MoviesState = {
  allMovies: [],
  moviesPerCategory: [],
  movies: [],
  status: StatusEnum.IDLE,
  categories: [],
  currentCategory: null,
  moviesPerPage: 8,
  currentPage: 1,
  totalPages: 1,
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(fetchMoviesAsync())`.
export const fetchMoviesAsync = createAsyncThunk("movies/fetchMovies", async () => {
  try {
    const response = movies$;
    // The value we return becomes the `fulfilled` action payload
    return response;
  } catch (error) {
    console.log("error", error);
  }
});

export const moviesSlice = createSlice({
  name: "moviesStore",
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
      const moviesFiltered = state.allMovies.filter((movie) => movie.category === action.payload);
      state.moviesPerCategory = moviesFiltered;
      moviesSlice.caseReducers.updateMoviesState(state);
    },
    setMoviesPerPage: (state, action: PayloadAction<number>) => {
      state.moviesPerPage = action.payload;
      moviesSlice.caseReducers.updateMoviesState(state);
    },

    changePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      moviesSlice.caseReducers.updateMoviesState(state);
    },

    reactToMovie: (state, action: PayloadAction<{ reactionType: ReactionTypeEnum; movieId: string }>) => {
      const { reactionType, movieId } = action.payload;
      const updateMovies = (arrayMovie: MovieModel[]) =>
        arrayMovie.map((movie) => {
          if (movie.id === movieId) {
            movie.reacted = reactionType;
          }
          return movie;
        });
      state.allMovies = updateMovies(state.allMovies);
      state.movies = updateMovies(state.movies);
    },

    deleteMovie: (state, action: PayloadAction<string>) => {
      const movieId = action.payload;
      const updateMovies = (arrayMovie: MovieModel[]) => arrayMovie.filter((movie) => movie.id !== movieId);
      state.allMovies = updateMovies(state.allMovies);
      state.movies = updateMovies(state.movies);
      state.moviesPerCategory = updateMovies(state.moviesPerCategory);

      /* Update the category select, we might don't have anymore movie of one category */
      const categories = [...new Set(state.allMovies.map((movie: MovieModel) => movie.category))] as string[];
      state.categories = categories;

      moviesSlice.caseReducers.updateMoviesState(state);
    },

    /* This is used when we change page, change movie per page, change category or delete movie */
    updateMoviesState: (state) => {
      const updatedMovies = state.moviesPerCategory.slice(
        (state.currentPage - 1) * state.moviesPerPage,
        state.currentPage * state.moviesPerPage
      );
      state.totalPages = Math.ceil(state.moviesPerCategory.length / state.moviesPerPage);
      /* Here we make sure no matter the action we've made,
       we still have movie to show so we go down one page and rerun function 
       until we reach first page if neccessary
       */
      if (updatedMovies.length === 0 && state.currentPage !== 1) {
        state.currentPage = state.currentPage - 1;
        moviesSlice.caseReducers.updateMoviesState(state);
      } else if (updatedMovies.length === 0 && state.currentPage === 1) {
        state.currentCategory = null;
        state.movies = state.allMovies;
        state.moviesPerCategory = state.allMovies;
        moviesSlice.caseReducers.updateMoviesState(state);
      } else {
        state.movies = updatedMovies;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        state.status = StatusEnum.LOADING;
      })
      /* Called when the movies are loaded, here we set the movies, categories & page number */
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.status = StatusEnum.IDLE;
        /* All movies is our original response, we'll use it when we modify the page,
         element to show or category to set the movies accordingly 
         */
        state.allMovies = action.payload;
        state.moviesPerCategory = action.payload;
        state.movies = action.payload;

        /* Set up Categories options to select header */
        const categories = [...new Set(action.payload.map((movie: MovieModel) => movie.category))] as string[];
        state.categories = categories;
      })
      .addCase(fetchMoviesAsync.rejected, (state) => {
        state.status = StatusEnum.FAILED;
      });
  },
});

export const { filterByCategory, setMoviesPerPage, changePage, reactToMovie, deleteMovie } = moviesSlice.actions;

// The function below is called a selector and allows us to select a value from
export const selectMovies = ({
  moviesStore: { movies, status, categories, currentCategory, moviesPerPage, currentPage, totalPages },
}: RootState) => ({
  movies,
  status,
  categories,
  currentCategory,
  moviesPerPage,
  currentPage,
  totalPages,
});

export default moviesSlice.reducer;
