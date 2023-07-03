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
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#b2201f",
            },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "black",
          },
        }}
        size='small'
        onChange={(event, value) => handleFilterChange(value)}
        renderInput={(params) => (
          <TextField {...params} label='Select movie category' />
        )}
      />
    </Box>
  );
}

export default CategoryFilter;
