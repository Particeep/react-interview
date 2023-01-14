import React, { useEffect } from "react";
import { movies$ } from "../../api/movies";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Movie } from "../../app/types";
import { setCategories, setMovies } from "./moviesSlice";
import { MovieCard } from "../../components/MovieCard";
import Box from "@mui/material/Box";

export function Movies() {
  const { movies, categories } = useAppSelector((state) => state.movies);

  // Merge like and dislike counts for duplicate movies
  const mergeDuplicateMovies = (movies: Movie[]): Movie[] => {
    let uniqueMovies: Movie[] = [];
    movies.map((movie) => {
      const existingMovie = uniqueMovies.find((m) => m.title === movie.title);
      if (existingMovie) {
        uniqueMovies = uniqueMovies.filter((m) => m.title !== movie.title);
        uniqueMovies = [
          ...uniqueMovies,
          {
            ...existingMovie,
            likes: existingMovie.likes + movie.likes,
            dislikes: existingMovie.dislikes + movie.dislikes,
          },
        ];
      } else {
        uniqueMovies.push(movie);
      }
    });
    return uniqueMovies;
  };

  useEffect(() => {
    movies$.then((movies) => {
      dispatch(setMovies(mergeDuplicateMovies(movies as Movie[])));
    });
  }, []);

  useEffect(() => {
    const categories = movies.map((movie) => movie.category);
    const uniqueCategories = categories.filter(
      (category, index) => categories.indexOf(category) === index
    );
    console.log(uniqueCategories);
    dispatch(setCategories(uniqueCategories));
  }, [movies]);

  const dispatch = useAppDispatch();
  return (
    <Box>
      <h1>Movies</h1>

      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </Box>
    </Box>
  );
}
