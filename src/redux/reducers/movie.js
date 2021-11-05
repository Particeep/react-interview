import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'

const movieAdapter = createEntityAdapter({ selectId: (movie) => movie.id })

const movieSelectors = movieAdapter.getSelectors((state) => state.movie.movies)

export const selectMovies = movieSelectors.selectAll
export const selectMovieById = movieSelectors.selectById
export const selectLikedMovieIds = (state) => state.movie.likedMovies
export const selectDislikedMovieIds = (state) => state.movie.dislikedMovies
export const selectMovieFilter = (state) => state.movie.filter
export const selectMoviePagination = (state) => state.movie.pagination

const initialState = {
  request: {
    list: {
      error: null,
      loading: false
    }
  },
  movies: movieAdapter.getInitialState(),
  likedMovies: [],
  dislikedMovies: [],
  filter: {
    categories: []
  },
  pagination: {
    currentPage: 1,
    itemsPerPage: 4 // should be taken from a list of items per page option, not a hard-coded value
  }
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    listMovies(state) {
      state.request.list.loading = true
    },
    listMoviesFailed(state, action) {
      state.request.list.error = action.payload
      state.request.list.loading = false
    },
    listMoviesSucceed(state, action) {
      movieAdapter.setAll(state.movies, action.payload)
      state.request.list.loading = false
    },
    likeMovie(state, action) {
      const movieId = action.payload
      if (state.movies.entities[movieId]) state.movies.entities[movieId].likes += 1
      state.likedMovies.push(movieId)
    },
    unlikeMovie(state, action) {
      const movieId = action.payload
      if (state.movies.entities[movieId]) state.movies.entities[movieId].likes -= 1
      state.likedMovies = state.likedMovies.filter(likedMovieId => likedMovieId !== movieId)
    },
    dislikeMovie(state, action) {
      const movieId = action.payload
      if (state.movies.entities[movieId]) state.movies.entities[movieId].dislikes += 1
      state.dislikedMovies.push(movieId)
    },
    undislikeMovie(state, action) {
      const movieId = action.payload
      if (state.movies.entities[movieId]) state.movies.entities[movieId].dislikes -= 1
      state.dislikedMovies = state.dislikedMovies.filter(dislikedMovieId => dislikedMovieId !== movieId)
    },
    deleteMovie(state, action) {
      movieAdapter.removeOne(state.movies, action.payload)
    },
    filterMovies(state, action) {
      state.filter = action.payload
    },
    changePage(state, action) {
      state.pagination.currentPage = action.payload
    },
    changeItemsPerPage(state, action) {
      state.pagination.itemsPerPage = action.payload
    }
  }
})

export const {
  listMovies,
  listMoviesFailed,
  listMoviesSucceed,
  likeMovie,
  unlikeMovie,
  dislikeMovie,
  undislikeMovie,
  deleteMovie,
  filterMovies,
  changePage,
  changeItemsPerPage
} = movieSlice.actions

export default movieSlice.reducer
