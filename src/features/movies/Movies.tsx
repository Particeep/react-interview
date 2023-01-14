import React, { useEffect, useMemo, useState } from "react";
import { movies$ } from "../../api/movies";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Movie } from "../../app/types";
import { setCategories, setFilteredMovieIds, setMovies } from "./moviesSlice";
import { MovieCard } from "../../components/MovieCard";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import { SelectCategories } from "../../components/SelectCategories";
import { NoMovie } from "../../components/NoMovie";
import Pagination from "../../components/Pagination";

export function Movies() {
  const { filteredMovieIds, movies, selectedCategories } = useAppSelector(
    (state) => state.movies
  );

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
      const uniqueMovies = mergeDuplicateMovies(movies as Movie[]);
      dispatch(setMovies(uniqueMovies));
      dispatch(setFilteredMovieIds(uniqueMovies.map((movie) => movie.id)));
    });
  }, []);

  useEffect(() => {
    const categories = movies.map((movie) => movie.category);
    const uniqueCategories = categories.filter(
      (category, index) => categories.indexOf(category) === index
    );
    dispatch(setCategories(uniqueCategories));
  }, [movies]);

  const dispatch = useAppDispatch();

  const filterByCategories = (movie: Movie) => {
    if (selectedCategories.length === 0) {
      return true;
    }
    return selectedCategories.includes(movie.category);
  };

  const filteredMovies = useMemo(() => {
    return movies.filter(filterByCategories);
  }, [movies, selectedCategories]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        direction="column"
        spacing={1}
        sx={{
          width: "100vw",
          maxWidth: "1200px",
          justifyContent: "center",
        }}
      >
        <SelectCategories />
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            width: "100%",
          }}
        >
          {filteredMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
          {filteredMovies.length === 0 && <NoMovie />}
        </Box>
        <Pagination />
      </Stack>
    </Box>
  );
}
