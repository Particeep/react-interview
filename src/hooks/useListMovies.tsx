import React, { useEffect } from "react";

import { IState } from "../redux/rootReducer";
import { useDispatch, useSelector } from "react-redux";
import { movies$ as fetchMovie } from "../assets/movies";

import {
  IMovie,
  setCategoriesSelectedListAction,
  setIsLoadingAction,
  setMovieLikedAction,
  setMovieListFiltredAction,
  setMovieListRawAction,
  setPaginationAction,
} from "../redux/movieListSlice/movieListSlice";

const mapState = (state: IState) => ({
  movieListReducer: state.movieListReducer,
});

function useListMovies(isFetchMoviesList: boolean) {
  const { movieListReducer } = useSelector(mapState);
  const dispatch = useDispatch();

  const fetchMoviesList: any = async () => {};

  /*=============================================
  =             Side Effects         =
  =============================================*/

  //initialization
  useEffect(() => {
    if (isFetchMoviesList) {
      dispatch(setIsLoadingAction(true));
      fetchMovie
        .then((result) => {
          dispatch(setMovieListRawAction(result));

          dispatch(
            setMovieListFiltredAction(
              getSlicePage(getMovielistFiltred(result, []))
            )
          );

          resetPagination(
            result.length,
            movieListReducer.pagination.nbMoviesPerPage
          );

          dispatch(setIsLoadingAction(false));
        })

        .catch((error) => {
          dispatch(setIsLoadingAction(false));
        });
    }
  }, []);

  //Fitler effect
  useEffect(() => {
    const newListMovies = movieListReducer.categoriesSelectedList.length
      ? getMovielistFiltred(
          movieListReducer.movieListRaw,
          movieListReducer.categoriesSelectedList
        )
      : getMovielistFiltred(movieListReducer.movieListRaw, []);

    resetPagination(
      newListMovies.length,
      movieListReducer.pagination.nbMoviesPerPage
    );

    dispatch(setMovieListFiltredAction(getSlicePage(newListMovies)));
  }, [
    movieListReducer.categoriesSelectedList,
    movieListReducer.pagination.nbMoviesPerPage,
    movieListReducer.movieListRaw,
  ]);

  //Pagination effect
  useEffect(() => {
    dispatch(
      setMovieListFiltredAction(
        getSlicePage(
          getMovielistFiltred(
            movieListReducer.movieListRaw,
            movieListReducer.categoriesSelectedList
          )
        )
      )
    );
  }, [movieListReducer.pagination.currentPage]);
  /*=====  End of Side Effects ======*/

  /**
   *
   * @returns List of unique Categories found in the movie list
   */
  const getCategoriesList = () => {
    return movieListReducer.movieListRaw
      .map((movie) => movie.category)
      .reduce<string[]>((acc, category) => {
        if (!acc.includes(category)) {
          return [...acc, category];
        } else {
          return acc;
        }
      }, []);
  };

  /**
   * Add a new category name in the liste of categories selected by the user
   * @param category unique name of the category
   */
  const addCategoryFilter = (category: string) => {
    dispatch(
      setCategoriesSelectedListAction([
        ...movieListReducer.categoriesSelectedList,
        category,
      ])
    );
  };

  /**
   * Remove the category from the liste of categories selected by the user
   *
   * @param category unique name of the category
   */
  const removeCategoryFilter = (category: string) => {
    dispatch(
      setCategoriesSelectedListAction(
        movieListReducer.categoriesSelectedList.filter(
          (categoryItem) => categoryItem !== category
        )
      )
    );
  };

  /**
   * Set the current page number
   * @param newPage new current page number
   */
  const setCurrentPage = (newPage: number) => {
    dispatch(
      setPaginationAction({
        ...movieListReducer.pagination,
        currentPage: newPage,
      })
    );
  };

  /**
   * get the list of Movie related categories selected by the user
   *
   * @param movieListRaw raw list of the movie
   * @param categoryList list of unique name categories of movie to keep
   * @returns
   */
  const getMovielistFiltred = (
    movieListRaw: IMovie[],
    categoryList: string[]
  ) => {
    if (categoryList.length > 0) {
      return movieListRaw.filter((movies) =>
        categoryList.includes(movies.category)
      );
    } else {
      return movieListRaw;
    }
  };

  /**
   * Get the right slice of the movie list
   * @param movies list of movie
   * @returns
   */
  const getSlicePage = (movies: IMovie[]) => {
    const {
      pagination: { currentPage, nbMoviesPerPage },
    } = movieListReducer;

    const minIndex = (currentPage - 1) * nbMoviesPerPage;

    const result = movies.slice(minIndex, minIndex + nbMoviesPerPage);
    return result;
  };

  /**
   * set the next page
   */
  const setNextPage = () => {
    const { pagination } = movieListReducer;
    dispatch(
      setPaginationAction({
        ...pagination,
        currentPage: pagination.currentPage + 1,
      })
    );
  };

  /**
   * reset and intialise the new value of pagination
   * @param nbMovie number of movie in the new movie list
   * @param nbMoviePage the number of movie to display per page
   */
  const resetPagination = (nbMovie: number, nbMoviePage: number) => {
    const newPagination = {
      currentPage: 1,
      nbPage: Math.ceil(nbMovie / nbMoviePage),
      nbMoviesPerPage: nbMoviePage,
    };
    dispatch(setPaginationAction(newPagination));
  };

  const setPreviousPage = () => {
    const { pagination } = movieListReducer;
    dispatch(
      setPaginationAction({
        ...pagination,
        currentPage: pagination.currentPage - 1,
      })
    );
  };

  const haveNextPage = () => {
    const { pagination } = movieListReducer;
    return pagination.currentPage < pagination.nbPage;
  };

  const havePreviousPage = () => {
    const { pagination } = movieListReducer;
    return pagination.currentPage > 1;
  };

  const setNbMoviePerPage = (nbMoviesPerPage: number) => {
    dispatch(
      setPaginationAction({
        ...movieListReducer.pagination,
        nbMoviesPerPage: nbMoviesPerPage,
      })
    );
  };

  /**
   * delete movie form the movie list
   * @param idMovie id of the movie
   */
  const deleteMovie = (movieToDelete: IMovie) => {
    const newMovieListRaw = movieListReducer.movieListRaw.filter(
      (movie) => movie.id !== movieToDelete.id
    );

    dispatch(setMovieListRawAction(newMovieListRaw));

    //check if there is movie in the category
    const nbMovieRemaining = newMovieListRaw.filter(
      (movie) => movie.category === movieToDelete.category
    );
    if (nbMovieRemaining.length <= 0) {
      removeCategoryFilter(movieToDelete.category);
    }
  };

  /**
   * Remove movie from the like list
   * @param idMovieToRemove id of the movie to remove
   */
  const removeMovieInMovieLikedList = (idMovieToRemove: string) => {
    const newlistMovie = movieListReducer.movieLikedList.filter(
      (movieId) => movieId !== idMovieToRemove
    );
    dispatch(setMovieLikedAction(newlistMovie));
  };

  /**
   * Add a movie to the like list
   * @param idMovie id of the movie to add
   */
  const addMovieInMovieLikedList = (idMovie: string) => {
    const newlistMovie = [...movieListReducer.movieLikedList, idMovie];
    dispatch(setMovieLikedAction(newlistMovie));
  };

  return {
    movieListFiltred: movieListReducer.movieListFiltred,
    categoriesSelectedList: movieListReducer.categoriesSelectedList,
    movieLikedList: movieListReducer.movieLikedList,
    movieListReducer,
    fetchMoviesList,
    getCategoriesList,
    addCategoryFilter,
    removeCategoryFilter,
    pagination: movieListReducer.pagination,
    setCurrentPage,
    setNextPage,
    setPreviousPage,
    haveNextPage,
    havePreviousPage,
    addMovieInMovieLikedList,
    removeMovieInMovieLikedList,
    deleteMovie,
    setNbMoviePerPage,
  };
}

export default useListMovies;
