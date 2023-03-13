import React from "react";
import { Grid } from "@mui/material";
import MovieCard from "./MovieCard";
import { useDispatch } from "react-redux";
import { deleteMovie, toggleLike , toggleDisLike } from "../Redux/moviesSlice";
const MovieList = ({ movies }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };
  const handleToggleLike = (id) => {
    dispatch(toggleLike(id));
  };

  const handleToggleDisLike = (id) => {
    dispatch(toggleDisLike(id));
  };

  return (
    <Grid container spacing={4}>
      {movies?.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={3}>
          <MovieCard
            id={movie.id}
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            img={movie.img}
            dislikes={movie.dislikes}
            isLiked={movie.isLiked}
            isDisliked={movie.isDisliked}
            onDelete={() => handleDelete(movie.id)}
            onToggleLike={() => handleToggleLike(movie.id)}
            onToggleDisLike={() => handleToggleDisLike(movie.id)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
