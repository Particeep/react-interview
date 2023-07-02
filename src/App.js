import React, { useEffect, useState } from "react";
import { movies$ } from "./movies";
import {
  Box,
  Typography,
  Card,
  Grid,
  CardMedia,
  IconButton,
  Autocomplete,
  TextField,
  CardActionArea,
} from "@mui/material";
import placeholder from "./technology.png";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Pagination from "@mui/lab/Pagination";

function MovieCard({ movie }) {
  return (
    <Card
      sx={{
        boxShadow: "0px 4px 10px rgba(21, 57, 45, 0.1)",
        margin: "20px",
        width: "18rem",
        position: "relative",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
        }}>
        <Typography variant='h6' sx={{ fontWeight: "bold", margin: "0.6rem" }}>
          {movie.title}
        </Typography>
        <Typography variant='body2'>{movie.category}</Typography>
        <CardMedia
          sx={{ height: "4rem", width: "4rem", margin: "1.4rem" }}
          component='img'
          image={placeholder}
          alt={movie.title}
        />
        <IconButton sx={{ position: "absolute", top: "5px", right: "5px" }}>
          <CloseIcon />
        </IconButton>
        <CardActionArea sx={{ display: "flex" }} disableSpacing>
          <Typography>{3}</Typography>
          <IconButton onClick={() => console.log("liked")}>
            <ThumbUpOutlinedIcon />
          </IconButton>
          <Typography>{2}</Typography>
          <IconButton onClick={() => console.log("disliked")}>
            <ThumbDownOffAltOutlinedIcon />
          </IconButton>
        </CardActionArea>
      </Box>
    </Card>
  );
}

function MovieList({ movies, currentPage, moviesPerPage }) {
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);

  return (
    <Grid container>
      {currentMovies.map((movie) => (
        <Grid item xs={6} md={4} lg={4} key={movie.id}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

function CategoryFilter({ movies, handleFilterChange }) {
  const categories = Array.from(new Set(movies.map((movie) => movie.category)));

  return (
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
      renderInput={(params) => <TextField {...params} label='Search a movie' />}
    />
  );
}

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);

  useEffect(() => {
    movies$.then((movies) => {
      setMovies(movies);
      setFilteredMovies(movies);
    });
  }, []);

  const handleFilterChange = (selectedCategory) => {
    if (selectedCategory) {
      const filteredMovies = movies.filter(
        (movie) => movie.category === selectedCategory
      );
      setFilteredMovies(filteredMovies);
    } else {
      setFilteredMovies(movies);
    }
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleMoviesPerPageChange = (event) => {
    const selectedMoviesPerPage = parseInt(event.target.value);
    setMoviesPerPage(selectedMoviesPerPage);
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  return (
    <div>
      <Typography variant='h2' align='center'>
        Movies App
      </Typography>
      <CategoryFilter movies={movies} handleFilterChange={handleFilterChange} />
      <label>
        Movies per Page:
        <select value={moviesPerPage} onChange={handleMoviesPerPageChange}>
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </label>
      <MovieList
        movies={filteredMovies}
        currentPage={currentPage}
        moviesPerPage={moviesPerPage}
      />
      <Pagination
        sx={{ display: "flex", justifyContent: "center" }}
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => handlePageChange(page)}
      />
    </div>
  );
}

export default App;
