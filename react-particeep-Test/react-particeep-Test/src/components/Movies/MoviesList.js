import { Grid } from "@nextui-org/react";
import React from "react";
import MovieCard from "./MovieCard";

function Movies({ movies, onLike, onDislike, onDelete }) {
  return (
    <Grid.Container gap={2}>
      {movies && movies.map((movie, i) => {
        return (
          <Grid xs={12} sm={6} md={3}  key={"movie_" + i}>
            <MovieCard movie={movie} onLike={onLike} onDislike={onDislike} onDelete={onDelete} />
          </Grid>
        );
      })}
    </Grid.Container>
  );
}

export default Movies;
