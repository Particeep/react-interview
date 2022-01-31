import { createAsyncThunk } from "@reduxjs/toolkit";
import services from "../../utils/API";

export const getMovies = createAsyncThunk("movies/getList", async () => {
  const res = await services.movies();
  return res;
});
