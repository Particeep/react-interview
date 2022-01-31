import { createSlice } from "@reduxjs/toolkit";
import { getMovies } from "../actions";

const paginate = (
  array: string | any[],
  page_size: number,
  page_number: number
) => array.slice((page_number - 1) * page_size, page_number * page_size);

const initialState = {
  loading: false,
  data: [],
  list: [],
  selectedCategories: [],
  page: { size: 8, number: 1 },
  error: null,
} as any;
const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {
    deleteFromList(state, action: { payload: number }) {
      state.list = state.list.filter((e: any) => e.id !== action.payload);
    },
    toggleLike(state, action: { payload: string }) {
      const movie = state.list.find(
        (x: { id: string }) => x.id === action.payload
      );
      if (movie) {
        if (typeof movie.userLike === "boolean") {
          movie.userLike = !movie.userLike;
          movie[movie.userLike ? "likes" : "dislikes"]++;
          movie[!movie.userLike ? "likes" : "dislikes"]--;
        } else {
          movie.userLike = !movie.userLike;
          movie[movie.userLike ? "likes" : "dislikes"]++;
        }
      }
    },
    addTag(state, action: { payload: string }) {
      state.selectedCategories = [...state.selectedCategories, action.payload];
      state.list = paginate(
        state.data.filter((e: any) =>
          state.selectedCategories.includes(e.category)
        ),
        state.page.size,
        state.page.number
      );
    },
    removeTag(state, action: { payload: string }) {
      state.selectedCategories = state.selectedCategories.filter(
        (e: string) => e !== action.payload
      );
      if (!state.selectedCategories.length) {
        state.list = paginate(state.data, state.page.size, state.page.number);
      } else {
        state.list = state.data.filter((e: any) =>
          state.selectedCategories.includes(e.category)
        );
      }
    },
    updatePageSize(state, action: { payload: number }) {
      state.page.size = action.payload;
      state.page.number = 1;
      state.list = paginate(state.data, state.page.size, state.page.number);
    },
    updatePageNumber(state, action) {
      action.payload === "next" ? state.page.number++ : state.page.number--;
      state.list = paginate(state.data, state.page.size, state.page.number);
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
        data: action.payload.data,
        list: paginate(action.payload.data, state.page.size, state.page.number),
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

export const {
  deleteFromList,
  toggleLike,
  addTag,
  removeTag,
  updatePageSize,
  updatePageNumber,
} = movies.actions;
export default movies.reducer;
