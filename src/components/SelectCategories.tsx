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

import { setSelectedCategories } from "../features/movies/moviesSlice";

export function SelectCategories() {
  const { categories } = useAppSelector((state) => state.movies);

  const dispatch = useAppDispatch();

  const [names, setNames] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<Category>) => {
    const {
      target: { value },
    } = event;

    // On autofill we get a stringified value.
    const selectedValues = typeof value === "string" ? value.split(",") : value;
    if (selectedValues) {
      dispatch(setSelectedCategories(selectedValues));
      setNames(selectedValues);
    }
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="select-categories-label">Categories</InputLabel>
      <Select
        labelId="select-categories-label"
        id="select-categories"
        multiple
        value={names as any}
        onChange={handleChange}
        input={<OutlinedInput label="Name" />}
        sx={{ border: "none" }}
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
