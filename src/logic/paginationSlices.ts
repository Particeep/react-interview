import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface IPagination {
  page: number;
  filter: number;
}

const initialState: IPagination = {
  page: 1,
  filter: 12,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    previousPage: (state) => {
      state.page -= 1;
    },
    setFilter: (state, action: PayloadAction<number>) => {
      state.filter = action.payload;
    },
  },
});

export const { nextPage, previousPage, setFilter } = paginationSlice.actions;

export default paginationSlice.reducer;
