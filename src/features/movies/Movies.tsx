import React, { useEffect, useMemo } from "react";
import { movies$ } from "../../api/movies";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Movie } from "../../app/types";
import { setCategories, setFilteredMovieIds, setMovies } from "./moviesSlice";
import { MovieCard } from "../../components/MovieCard";
import { NoMovie } from "../../components/NoMovie";
import { MoviesContainer } from "../../components/MoviesContainer";
import { filterByCategories, mergeDuplicateMovies } from "../../app/utils";

export function Movies() {
  const dispatch = useAppDispatch();
  const { movies, selectedCategories, page } = useAppSelector(
    (state) => state.movies
  );

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
