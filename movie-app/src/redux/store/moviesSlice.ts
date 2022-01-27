import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IMovie, IMovies } from './i.moviesSlice';

const initialState: IMovies = {
  list: [],
  filtered: []
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    initMovies: (state, action: PayloadAction<Array<IMovie>>) => {
      state.list = action.payload;
    },
    removeMovie:(state, action: PayloadAction<IMovie>) => {
      state.list = state.list.filter((item: IMovie) => !(item.id.indexOf(action.payload.id) > -1) );
    },
    setFiltered:(state, action: PayloadAction<Array<IMovie>>) => {
      state.filtered = action.payload;
    }
  }
});

export const { initMovies, removeMovie, setFiltered } = moviesSlice.actions;
export const moviesList = (state: RootState) => state.movies.list;
export const filteredMoviesList = (state:RootState) => state.movies.filtered; 
export default moviesSlice.reducer;
