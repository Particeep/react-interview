import React, { useEffect } from "react";

// Components
import Movie from "./Movie";
import Loading from "./Loading";
import NotFoundImage from "../resources/NotFoundImage";

import { ToastContainer } from "react-toastify"; // Notifications

// Redux
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../redux/moviesSlice";

const Movies = () => {
  const dispatch = useDispatch();

  const { indexOfFirstItem, indexOfLastItem } = useSelector(
    (state) => state.pages
  );

  const { movies, filter, status } = useSelector((state) => state.movies);

  const filteredMovies = () => {
    return filter
      ? movies.filter((movie) => movie.category === filter)
      : movies;
  };

  useEffect(() => {
    dispatch(fetchMovies({}));
    // eslint-disable-next-line
  }, []);

  return (
    <div className="movies-container">
      <ToastContainer limit={3} />
      {status === "loading" ? (
        <Loading />
      ) : (
        <ul className="movies-list">
          {filteredMovies().length === 0 ? (
            <div className="not-found-container">
              <NotFoundImage />
              <h2>No movies found!</h2>
            </div>
          ) : (
            filteredMovies()
              .slice(indexOfFirstItem, indexOfLastItem)
              .map((movie) => (
                <li key={movie.id}>
                  <Movie movie={movie} filteredMovies={filteredMovies()} />
                </li>
              ))
          )}
        </ul>
      )}
    </div>
  );
};

export default Movies;
