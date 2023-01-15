import React, { useEffect, useMemo } from "react";
import { movies$ } from "../../api/movies";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Movie } from "../../app/types";
import {
  setCategories,
  setErrorMessage,
  setFilteredMovieIds,
  setMovies,
} from "./moviesSlice";
import { MovieCard } from "../../components/MovieCard";
import { NoMovie } from "../../components/NoMovie";
import { MoviesContainer } from "../../components/MoviesContainer";
import { filterByCategories, mergeDuplicateMovies } from "../../app/utils";
import Ajv from "ajv";
import { moviesSchema } from "../../app/ajvSchema";

export function Movies() {
  const dispatch = useAppDispatch();
  const { movies, selectedCategories, page } = useAppSelector(
    (state) => state.movies
  );

  useEffect(() => {
    movies$.then((movies) => {
      // Ensure that the data has the correct type
      const ajv = new Ajv();
      const validate = ajv.compile(moviesSchema);
      const valid = validate(movies);
      if (!valid) {
        dispatch(setErrorMessage("Invalid data received from the server"));
        return;
      }
      // Data is valid, we can enforce the type
      const uniqueMovies = mergeDuplicateMovies(movies as unknown as Movie[]);
      dispatch(setMovies(uniqueMovies));
      dispatch(setFilteredMovieIds(uniqueMovies.map((movie) => movie.id)));
      dispatch(setErrorMessage(null));
    });
  }, [dispatch]);

  useEffect(() => {
    const categories = movies.map((movie) => movie.category);
    const uniqueCategories = categories.filter(
      (category, index) => categories.indexOf(category) === index
    );
    dispatch(setCategories(uniqueCategories));
  }, [movies, dispatch]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      filterByCategories(movie, selectedCategories)
    );
  }, [movies, selectedCategories]);

  return (
    <MoviesContainer>
      {filteredMovies
        .filter((movie, index) => {
          const start = page.currentPage * page.moviesPerPage;
          const end = start + page.moviesPerPage;
          return index >= start && index < end;
        })
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      {filteredMovies.length === 0 && <NoMovie />}
    </MoviesContainer>
  );
}
