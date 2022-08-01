import { ButtonMoviePerPage, ButtonWrapper, PaginationRow } from '../components/moviesPagination/Styled';
import React, { Children, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FilterCategories from '../components/filterCategories/filterCategories';
import MoviesList from '../components/moviesList/moviesList';
import MoviesPagination from '../components/moviesPagination/moviesPagination';
import { getMovies } from '../../business/actions/moviesActions';
import { movies$ as movies } from '../../business/mock/movies';

const Movie = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [categoryFilterOptions, setCategoryFilterOptions] = useState([]);
  const categoryFilterOptionsTemp = [];
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const dispatch = useDispatch();
  const moviesList = useSelector((state) => state.moviesReducer);

  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesList.slice(indexOfFirstMovie, indexOfLastMovie);

  const getCategories = () => {
    moviesList.map((movie) => {
      if (!categoryFilterOptionsTemp.some((category) => category.value === movie.category)) {
        categoryFilterOptionsTemp.push({
          value: movie.category,
          label: movie.category
        });
      }
      setCategoryFilterOptions(categoryFilterOptionsTemp);
    });
  };

  const getMoviesData = (movies) => {
    movies.then((response) => {
      setMoviesData(response);
    });
  };

  const filterMovies = () => {
    if (categoriesSelected.length > 0) {
      const filteredMoviesTemp = moviesData.filter((movie) => categoriesSelected.includes(movie.category));
      setFilteredMovies(filteredMoviesTemp);
    } else {
      setFilteredMovies(moviesData);
    }
  };

  const getCategoriesSelected = (categorySelected) => {
    categorySelected.map((element) => {
      const categoriesSelectedTemp = [...categoriesSelected, element.value];
      setCategoriesSelected(categoriesSelectedTemp);
    });
  };

  const removeCategoriesSelected = (categories) => {
    const categoriesSelectedTemp = categories.map((cat) => {
      return cat.value;
    });
    setCategoriesSelected(categoriesSelectedTemp);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(getMovies());
    getMoviesData(movies);
  }, []);

  useEffect(() => {
    if (moviesList.length > 0 && filteredMovies.length === 0) {
      getCategories();
    }
  }, [moviesList]);

  useEffect(() => {
    filterMovies();
  }, [categoriesSelected]);

  useEffect(() => {
    if (filteredMovies.length > 0) {
      dispatch(getMovies(filteredMovies));
    }
  }, [filteredMovies]);

  const handleClick = (number) => {
    setCurrentPage(1);
    setMoviesPerPage(number);
  };

  return (
    <>
      <FilterCategories
        placeholder="Categories"
        displayValue="value"
        options={categoryFilterOptions}
        onSelect={(categorySelected) => getCategoriesSelected(categorySelected)}
        onRemove={(categorySelected) => removeCategoriesSelected(categorySelected)}
      />
      <MoviesList moviesList={currentMovies} />
      <PaginationRow>
        <>
          <p>Page : </p>
          <MoviesPagination
            moviesPerPage={moviesPerPage}
            totalMovies={moviesList.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
        <>
          <p style={{ marginRight: '10px' }}>Nombre de films par page : </p>
          <ButtonWrapper>
            <ButtonMoviePerPage onClick={() => handleClick(4)}>4</ButtonMoviePerPage>
            <ButtonMoviePerPage onClick={() => handleClick(8)}>8</ButtonMoviePerPage>
            <ButtonMoviePerPage onClick={() => handleClick(12)}>12</ButtonMoviePerPage>
          </ButtonWrapper>
        </>
      </PaginationRow>
    </>
  );
};

export default Movie;
