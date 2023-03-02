import React from "react";
import { Box, Button, Grid, MenuItem, Select, Typography } from "@mui/material";

const Pagination = ({
  moviesPerPage,
  totalMovies,
  paginate,
  currentPage,
  setMoviesPerPage,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageChange = (pageNumber) => {
    paginate(pageNumber);
  };

  const handleMoviesPerPageChange = (event) => {
    setMoviesPerPage(parseInt(event.target.value, 10));
    paginate(1);
  };

  return (
    <Grid container spacing={4} sx={{ mt: 4 }}>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" sx={{ mr: 1 }}>
            Afficher
          </Typography>
          <Select value={moviesPerPage} onChange={handleMoviesPerPageChange}>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
          <Typography variant="body2" sx={{ mx: 1 }}>
            éléments par page
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Typography variant="body2" sx={{ mr: 1 }}>
            Page {currentPage} sur {totalPages}
          </Typography>
          <Button
            variant="contained"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Précédent
          </Button>
          {pageNumbers.map((number) => (
            <Button
              key={number}
              variant={number === currentPage ? "contained" : "outlined"}
              onClick={() => handlePageChange(number)}
            >
              {number}
            </Button>
          ))}
          <Button
            variant="contained"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Suivant
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Pagination;
