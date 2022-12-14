import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ICategories {
  categories: string[];
  currentCategory: string;
}

const initialState: ICategories = {
  categories: [],
  currentCategory: "",
};

export const categoriesSlices = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCurrentCategorie: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload;
    },
    setCategories: (state, action: PayloadAction<string[]>) => {
      state.categories = action.payload;
    },
  },
});

export const { setCurrentCategorie, setCategories } = categoriesSlices.actions;

export default categoriesSlices.reducer;
