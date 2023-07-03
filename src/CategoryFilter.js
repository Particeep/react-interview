import React from "react";
import { Box, Autocomplete, TextField } from "@mui/material";

function CategoryFilter({ filteredMovies, handleFilterChange }) {
  const categories = Array.from(
    new Set(filteredMovies.map((movie) => movie.category))
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Autocomplete
        disablePortal
        id='category-filter'
        options={categories}
        sx={{
          width: 400,
          borderRadius: "22px",
          display: "flex",
          justifyContent: "center",
        }}
        size='small'
        onChange={(event, value) => handleFilterChange(value)}
        renderInput={(params) => (
          <TextField {...params} label='Search a movie' />
        )}
      />
    </Box>
  );
}

export default CategoryFilter;
