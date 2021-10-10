import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPage: 1,
  itemsPerPage: 4, // Limit of items to be displayed per page
  indexOfFirstItem: 0,
  indexOfLastItem: 4,
};

export const pagesSlice = createSlice({
  name: "pages",
  initialState,

  reducers: {
    set_amount_per_page: (state, action) => {
      return {
        ...state,
        itemsPerPage: action.payload,
        indexOfFirstItem: action.payload * (state.currentPage - 1),
        indexOfLastItem: action.payload * state.currentPage,
      };
    },
    change_page: (state, action) => {
      return {
        ...state,
        currentPage: action.payload,
        indexOfFirstItem: state.itemsPerPage * (action.payload - 1),
        indexOfLastItem: state.itemsPerPage * action.payload,
      };
    },
  },
});

export const { set_amount_per_page, change_page } = pagesSlice.actions;

export default pagesSlice.reducer;
