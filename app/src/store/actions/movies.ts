import { createAsyncThunk } from "@reduxjs/toolkit";
import services from "../../utils/API";

export const getMovies = createAsyncThunk("movies/getList", async () => {
  const res = await services.movies();
  console.log("LOG", res);
  
  return res;
});
