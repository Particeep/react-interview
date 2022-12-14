/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Grid } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/Common/Error";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Filter from "../components/Movies/Filter";
import MoviesList from "../components/Movies/MoviesList";
import Pagination from "../components/Pagination";
import { addDislike, addLike, deleteMovie, fetchMovies, setPagination } from "../stores/moviesSlice";

function Home() {
  const { movies, loading, categories, pagination, error } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const [selectedCategories, setSelectedCategories] = useState(undefined);
  const [moviesToShow, setMoviesToShow] = useState(undefined);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  useEffect(() => {
    if (movies) {
      let _moviesToShow = movies;
      // get movies by categories first
      if (selectedCategories) {
        _moviesToShow = movies.filter((movie) => selectedCategories.includes(movie.category));
      }
      // then paginate movies
      _moviesToShow = _moviesToShow.slice((pagination.page - 1) * pagination.perPage, pagination.page * pagination.perPage);
      setMoviesToShow(_moviesToShow);
      updatePagination(pagination, _moviesToShow);
    }
  }, [pagination.page, pagination.perPage, movies, selectedCategories]);

  const updatePagination = (pagination, _moviesToShow) => {
    let _pagination = { ...pagination };
    if (_pagination.page === 1) {
      _pagination.hasPreviousPage = false;
    } else {
      _pagination.hasPreviousPage = true;
    }
    if (_moviesToShow.length < _pagination.perPage) {
      _pagination.hasNextPage = false;
    } else {
      _pagination.hasNextPage = true;
    }
    dispatch(
      setPagination({
        ..._pagination,
      })
    );
  };

  const handleFilterByCategory = async (values) => {
    setSelectedCategories(values.length === 0 ? undefined : values);
    dispatch(
      setPagination({
        ...pagination,
        page: 1,
      })
    );
  };

  const handleDeleteMovie = (id) => {
    dispatch(deleteMovie(id));
  };

  const handlePagination = (pagination) => {
    dispatch(setPagination(pagination));
  };

  const handleLikeMovie = (id) => {
    dispatch(addLike(id));
  };
  const handleDislikeMovie = (id) => {
    dispatch(addDislike(id));
  };

  return (
    <Container
      md
      css={{
        margin: "1rem auto",
      }}
    >
      <Header />
      {error ? (
        <Error error={error} />
      ) : (
        <>
          {loading ? (
            <Grid css={{ display: "flex", justifyContent: "center", alignItems: "center", h: "80vh" }}>
              <Loading />
            </Grid>
          ) : (
            <>
              <Filter options={categories} values={selectedCategories} onChange={handleFilterByCategory} />
              <MoviesList movies={moviesToShow} onLike={handleLikeMovie} onDislike={handleDislikeMovie} onDelete={handleDeleteMovie} />
            </>
          )}
          <Pagination pagination={pagination} onChange={handlePagination} />
        </>
      )}
      
    </Container>
  );
}

export default Home;
