import React from 'react';
import { Grid } from '@mui/material';
import MovieCard from './MovieCard';
import { useSelector, useDispatch } from 'react-redux';
const MovieList = ({ movies, onDelete, onToggleLike }) => {
  //  const movies = useSelector((state) => state.movies);
   const dispatch = useDispatch();
   const handleDelete = (id) => {
    dispatch(onDelete(id));
   
  };

  const handleToggleLike = (title) => {
    dispatch(onToggleLike(title));
  };

  return (
    <Grid container spacing={4}>
      {movies?.map((movie) => (
        <Grid item key={movie.id} xs={12} sm={6} md={3}>
          <MovieCard
            title={movie.title}
            category={movie.category}
            likes={movie.likes}
            img={movie.img}
            dislikes={movie.dislikes}
            isLiked={movie.isLiked}
            onDelete={() => handleDelete(movie.id)}
            onToggleLike={() => handleToggleLike(movie.title)}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default MovieList;
