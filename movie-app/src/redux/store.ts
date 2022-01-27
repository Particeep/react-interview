import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from './store/moviesSlice';
import filtersReducer from './store/filtersSlice';
import likedReducer from './store/likedSlice';
import paginationReducer from './store/paginationSlice';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    filters: filtersReducer,
    liked: likedReducer,
    pagination: paginationReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
