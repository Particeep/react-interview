import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store'
import { Movie, movies$ } from '@/movies'

export interface MovieState {
	movies: Movie[]
	loading: boolean
	hasErrors: boolean
	error: string
	filter: string[]
}

const initialState: MovieState = {
	movies: [],
	loading: false,
	hasErrors: false,
	error: '',
	filter: [],
}

export const fetchMovies = createAsyncThunk('movies/fetchMovies', () => movies$)

export const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {
		setFilter: (state, action: PayloadAction<string[]>) => {
			state.filter = action.payload
		},
		deleteMovie: (state, action: PayloadAction<string>) => {
			state.movies = state.movies.filter(
				movie => movie.id !== action.payload
			)
		},
		like: (state, action: PayloadAction<string>) => {
			state.movies = state.movies.map(movie => {
				if (movie.id === action.payload) {
					movie.likes = movie.likes + 1
				}
				return movie
			})
		},
		unlike: (state, action: PayloadAction<string>) => {
			state.movies = state.movies.map(movie => {
				if (movie.id === action.payload) {
					movie.likes = movie.likes - 1
				}
				return movie
			})
		},
		dislike: (state, action: PayloadAction<string>) => {
			state.movies = state.movies.map(movie => {
				if (movie.id === action.payload) {
					movie.dislikes = movie.dislikes + 1
				}
				return movie
			})
		},
		undislike: (state, action: PayloadAction<string>) => {
			state.movies = state.movies.map(movie => {
				if (movie.id === action.payload) {
					movie.dislikes = movie.dislikes - 1
				}
				return movie
			})
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchMovies.pending, state => {
				state.loading = true
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.movies = action.payload
				state.loading = false
				state.hasErrors = false
			})
			.addCase(fetchMovies.rejected, state => {
				state.loading = false
				state.hasErrors = true
				state.error = 'Error fetching movies'
			})
	},
})

export const { deleteMovie, like, dislike, unlike, undislike, setFilter } =
	moviesSlice.actions
export const selectMovies = (state: RootState) => state.movies
export const selectCategories = (state: RootState) =>
	Array.from(
		new Set<string>(state.movies.movies.map(movie => movie.category))
	)
export default moviesSlice.reducer
