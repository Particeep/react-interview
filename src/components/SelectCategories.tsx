import {
  FormControl,
  InputLabel,
  Select,
  OutlinedInput,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Category } from "../app/types";

import {
  setFilteredMovieIds,
  setSelectedCategories,
} from "../features/movies/moviesSlice";

export function SelectCategories() {
  const { categories, movies } = useAppSelector((state) => state.movies);

  const dispatch = useAppDispatch();

  const [selectedCategorieNames, setSelectedCategorieNames] = useState<
    string[]
  >([]);

  const handleChange = (event: SelectChangeEvent<Category>) => {
    const {
      target: { value },
    } = event;

    // On autofill we get a stringified value.
    const selectedValues = typeof value === "string" ? value.split(",") : value;
    if (selectedValues) {
      dispatch(setSelectedCategories(selectedValues));
      setSelectedCategorieNames(selectedValues);
      const filteredMovieIds = movies
        .filter((movie) =>
          selectedValues.length > 0
            ? selectedValues.includes(movie.category)
            : true
        )
        .map((movie) => movie.id);
      dispatch(setFilteredMovieIds(filteredMovieIds));
    }
  };

  if (categories.length === 0) {
    return null;
  }

  return (
    <FormControl sx={{ m: 1, width: 350 }}>
      <InputLabel id="select-categories-label">Categories</InputLabel>
      <Select
        labelId="select-categories-label"
        id="select-categories"
        multiple
        value={selectedCategorieNames as unknown as string}
        // Fix for two incompatible type errors: value must be a string and it must
        // be an array of strings (for multiple select)
        // Enforce the type until the issue is fixed
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
            borderBottom: "1px solid #000",
            borderRadius: 0,
          },
        }}
      >
        {categories.map((categorie) => (
          <MenuItem key={categorie} value={categorie}>
            {categorie}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
