import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { IPagination } from './i.paginationSlice';

const initialState: IPagination = {
  currentPage:1,
  elementPerPage:4,
  maxPage:4
};

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    updateElementPerPage:(state, action: PayloadAction<number>) => {
      state.elementPerPage = action.payload;
    },
    nextPage: (state) => {
      state.currentPage = (state.currentPage+1 < state.maxPage) ? state.currentPage+1 : state.maxPage;
    },
    previousPage: (state) => {
      state.currentPage = (state.currentPage-1 > 1) ? state.currentPage-1 : 1;
    },
    updateMaxPage: (state, action:PayloadAction<number>) => {
      state.maxPage = action.payload;
    },
    goToPage: (state, action:PayloadAction<number>) => {
      state.currentPage = action.payload;
    }
  }
});

export const { updateElementPerPage, nextPage, previousPage, updateMaxPage, goToPage } = paginationSlice.actions;
export const elementPerPage = (state: RootState) => state.pagination.elementPerPage;
export const currentPage = (state: RootState) => state.pagination.currentPage;
export const maxPage = (state: RootState) => state.pagination.maxPage;
export default paginationSlice.reducer;
