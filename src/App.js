import React, { useEffect, useState } from "react";
import { movies$ } from "./movies";
import { Box, Typography, Card, Grid } from "@mui/material";

function MovieCard({ movie }) {
  return (
    <Card sx={{ border: "1px solid red", margin: "20px", width: "200px" }}>
      <Box>
        <Typography variant='body2' sx={{ fontWeight: "bold" }}>
          {movie.title}
        </Typography>
        <Typography variant='body2'>{movie.category}</Typography>
      </Box>
    </Card>
  );
}

function MovieList({ movies }) {
  return (
    <Grid container>
      {movies.map((movie) => (
        <Grid item xs={6} md={4} lg={4}>
          <MovieCard key={movie.id} movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    movies$.then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <div>
      <Typography variant='h2'>Movies App</Typography>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
