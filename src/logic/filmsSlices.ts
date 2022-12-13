import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../interfaces/IMovie";

export interface IFilmState {
  films: IMovie[];
}

const initialState: IFilmState = {
  films: [],
};

export const filmSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    // upVote: (state, action: PayloadAction<number>) => {
    //   state.films[action.payload].up += 1;
    // },
    // downVote: (state, action: PayloadAction<number>) => {
    //   state.films[action.payload].up -= 1;
    // },
    // addMovie: (state, action: PayloadAction<{ title: string; up: number }>) => {
    //   state.films.push({ title: action.payload.title, up: action.payload.up });
    // },
    setMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.films = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  //  upVote, downVote, addMovie,
  setMovies,
} = filmSlice.actions;

export default filmSlice.reducer;
