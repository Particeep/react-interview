import React, { useEffect, useState } from "react";
import { movies$ } from "../../api/movies";

import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Movie } from "../../app/types";
import { setCategories, setMovies } from "./moviesSlice";

export function Movies() {
  const { movies, categories } = useAppSelector((state) => state.movies);
  useEffect(() => {
    movies$.then((movies) => {
      dispatch(setMovies(movies as Movie[]));
    });
  }, []);

  useEffect(() => {
    const categories = movies.map((movie) => movie.category);
    const uniqueCategories = [...new Set(categories)];
    dispatch(setCategories(uniqueCategories));
  }, [movies]);

  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
        </div>
      ))}
      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>
        </div>
      ))}
    </div>
  );
}
