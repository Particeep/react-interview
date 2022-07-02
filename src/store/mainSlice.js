import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    movies: null,
    moviesDisplayed: null,
    moviesFiltered: null,
    moviesFilteredToDisplay: null,
    currentPage: 1,
    moviesPerPage: 4,
    selectedCategory: null,
    endOfNext: false,
  },
  reducers: {
    loadingMovies(state, action) {
      state.movies = action.payload;
      state.moviesDisplayed = action.payload.slice(0, state.moviesPerPage);
      state.moviesFiltered = action.payload;
      state.moviesFilteredToDisplay = action.payload.slice(0, state.moviesPerPage);
    },

    like(state, action) {
      const id = action.payload;

      const newMovies = state.moviesDisplayed.map(movie => {
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

      state.moviesDisplayed = newMovies;
    },

    dislike(state, action) {
      const id = action.payload; 

      const newMovies = state.moviesDisplayed.map(movie => {
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

      state.moviesDisplayed = newMovies;
    },

    removeMovie(state, action) {
      const id = action.payload;

      state.moviesFiltered = state.moviesFiltered.filter(movie => movie.id !== id)
      state.moviesFilteredToDisplay = state.moviesFilteredToDisplay.filter(movie => movie.id !== id)
      state.movies = state.movies.filter(movie => movie.id !== id)
      state.moviesDisplayed = state.moviesDisplayed.filter(movie => movie.id !== id)
    },

    filter(state, action) {
      state.selectedCategory = action.payload;
      let newMovies;

      if (state.selectedCategory === "All") {
        newMovies = state.movies
      } else {
        newMovies = state.movies.filter(movie => movie.category === state.selectedCategory)
      }

      if (newMovies.length < state.moviesPerPage) {
        state.endOfNext = true;
      } else {
        state.endOfNext = false;
      }

      state.currentPage = 1;
      state.moviesFiltered = newMovies;
      state.moviesFilteredToDisplay = newMovies.slice(0, state.moviesPerPage);
    },

    setMoviesPerPage(state, action) {
      state.currentPage = 1;
      state.moviesPerPage = action.payload
      let baseListMovies;

      if (state.selectedCategory !== 'All' && state.selectedCategory) {
        baseListMovies = state.moviesFiltered;
        state.moviesFilteredToDisplay = baseListMovies.slice(0, action.payload);
      } else {
        baseListMovies = state.movies;
        state.moviesDisplayed = baseListMovies.slice(0, action.payload);
      }

      console.log(baseListMovies.length)
      console.log(state.currentPage * state.moviesPerPage)
      if ((state.currentPage * state.moviesPerPage) > baseListMovies.length) {
        state.endOfNext = true
      } else {
        state.endOfNext = false
      }
    },

    setCurrentPage(state, action) {
      let baseListMovies;

      if (state.selectedCategory !== 'All' && state.selectedCategory) {
        baseListMovies = state.moviesFiltered;
      } else {
        baseListMovies = state.movies;
      }

      const typeOfAction = action.payload;

      const isFirstPage = state.currentPage === 1; 

      if (typeOfAction === 'next' && !state.endOfNext) {
        state.currentPage = state.currentPage + 1;
        let lastMovie;

        const firstMovie = (state.currentPage - 1) * state.moviesPerPage

        console.log(baseListMovies.length)
        console.log(state.currentPage * state.moviesPerPage)
        if ((state.currentPage * state.moviesPerPage) >= baseListMovies.length) {
          lastMovie = baseListMovies.length;
          state.endOfNext = true
        } else {
          lastMovie = firstMovie + state.moviesPerPage
          state.endOfNext = false
        }
        const currentMovies = baseListMovies.slice(firstMovie, lastMovie)

        if (state.selectedCategory !== 'All' && state.selectedCategory) {
          state.moviesFilteredToDisplay = currentMovies; 
        } else {
          state.moviesDisplayed = currentMovies; 
        }
        
      } else if (typeOfAction === 'prev' && !isFirstPage) {
        if (state.selectedCategory !== 'All' && state.selectedCategory) {
          if (state.moviesFiltered > state.moviesPerPage) {
            state.endOfNext = false;
          } else {
            state.endOfNext = true;
          }
        } else {
          state.endOfNext = false;
        }

        state.currentPage = state.currentPage - 1;
        
        const firstMovie = (state.currentPage - 1) * state.moviesPerPage
        const lastMovie = firstMovie + state.moviesPerPage
        const currentMovies = baseListMovies.slice(firstMovie, lastMovie)
        
        if (state.selectedCategory !== 'All' && state.selectedCategory) {
          state.moviesFilteredToDisplay = currentMovies; 
        } else {
          state.moviesDisplayed = currentMovies; 
        }
      }
    }
  }
});

export const { 
  loadingMovies,
  like, 
  dislike, 
  removeMovie, 
  filter, 
  setMoviesPerPage, 
  setCurrentPage, 
} = mainSlice.actions

export default mainSlice.reducer