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
    upVote: (state, action: PayloadAction<number>) => {
      state.films[action.payload].likes += 1;
    },
    downVote: (state, action: PayloadAction<number>) => {
      state.films[action.payload].dislikes += 1;
    },
    removeMovie: (state, action: PayloadAction<number>) => {
      state.films.splice(action.payload, 1);
    },
    setMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.films = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { upVote, downVote, removeMovie, setMovies } = filmSlice.actions;

export default filmSlice.reducer;
