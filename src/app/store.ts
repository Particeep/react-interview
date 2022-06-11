import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moviesReducer from '../components/movies/moviesSlice';

export const store = configureStore({
  reducer: {
    moviesStore: moviesReducer,
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
