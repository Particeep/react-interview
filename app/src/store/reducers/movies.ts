import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../actions";

const initialState = {
  loading: false,
  list: [],
  error: null,
} as any;
const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    resetEntryPoints(state) {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      return { ...state, loading: true };
    });
    builder.addCase(getMovies.fulfilled, (state, action: { payload: any }) => {
      return {
        ...state,
        loading: false,
        list: action.payload.movies,
      };
    });
    builder.addCase(getMovies.rejected, (state, action: { error: any }) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    });
  },
});

export default movies.reducer;
