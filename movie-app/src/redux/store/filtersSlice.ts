import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ICategory, IFilters } from './i.filtersSlice';

const initialState: IFilters = {
  categories: [],
  currentFilter: []
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    initFilters: (state, action: PayloadAction<Array<ICategory>>) => {
      state.categories = action.payload;
    },
    addFilter: (state, action: PayloadAction<ICategory>) => {
      state.currentFilter.push(action.payload);
    },
    removeFilter: (state, action: PayloadAction<ICategory>) => {
      state.currentFilter = state.currentFilter.filter((item: ICategory) => !(item.id.indexOf(action.payload.id) > -1) );
    }
  }
});

export const { initFilters, addFilter, removeFilter } = filtersSlice.actions;
export const filtersList = (state: RootState) => state.filters.categories;
export const currentFiltersList = (state: RootState) => state.filters.currentFilter;
export default filtersSlice.reducer;
