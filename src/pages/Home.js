import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Multiselect from "multiselect-react-dropdown";

import MoviesList from "../components/MoviesList";
import { movies$ as movies } from "../movies";
import "../components/MoviesList.css";
import { getMovies } from "../redux/actions/moviesActions";
import Pagination from "../components/Pagination";

/**
 * Représente la page principale
 */
const Home = () => {
  // films
  const [moviesData, setMoviesData] = useState([]);
  const [categoryFilterOptions, setCategoryFilterOptions] = useState([]);
  const categoryFilterOptionsTemp = [];
  const [categoriesSelected, setCategoriesSelected] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const dispatch = useDispatch(); // pour envoyer une action
  const moviesList = useSelector((state) => state.moviesReducer); // récup films du store

  // pagination
  const [optionsPagination, setOptionsPagination] = useState([4, 8, 12]);
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(4);
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = moviesList.slice(indexOfFirstMovie, indexOfLastMovie);

  /**
   * Obtenir la liste des categories
   */
  const getCategories = () => {
    moviesList.map((movie) => {
      // si la categorie n'est pas encore dans la liste des options de filtres, l'y ajouter
      if (
        !categoryFilterOptionsTemp.some(
          (category) => category.value === movie.category
        )
      ) {
        categoryFilterOptionsTemp.push({
          value: movie.category,
          label: movie.category,
        });
      }
      setCategoryFilterOptions(
        ...categoryFilterOptions,
        categoryFilterOptionsTemp
      );
    });
  };
  

  /**
   * Récupérer la liste des données de films
   * et les stocker dans le store via le dispatch
   * @param {Promise} movies
   */
  const getMoviesData = (movies) => {
    movies.then((response) => {
      setMoviesData(response);
    });
  };

  /**
   * Filtre les films en fonction des catégories sélectionnées
   */
  const filterMovies = () => {
    if (categoriesSelected.length > 0) {
      const filteredMoviesTemp = moviesData.filter((movie) =>
        categoriesSelected.includes(movie.category)
      );
      setFilteredMovies(filteredMoviesTemp);
    } else {
      setFilteredMovies(moviesData);
    }
  };

  /**
   * Répertorier les categories sélectionnées dans le filtre
   * @param {string} categorySelected
   */
  const getCategoriesSelected = (categorySelected) => {
    categorySelected.map((element) => {
      const categoriesSelectedTemp = [...categoriesSelected, element.value];
      setCategoriesSelected(categoriesSelectedTemp);
    });
  };

  /**
   * Supprimer une categorie du filtre
   * et mettre à jour la liste des catégories sélectionnées dans le filtre
   * @param {array} categories
   */
  const removeCategoriesSelected = (categories) => {
    const categoriesSelectedTemp = categories.map((cat) => {
      return cat.value;
    });
    setCategoriesSelected(categoriesSelectedTemp);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // au chargement du composant, charger la liste des films dans le store
  useEffect(() => {
    dispatch(getMovies());
    getMoviesData(movies);
  }, []);

  // dès que moviesList est màj
  useEffect(() => {
    // si moviesList n'est pas vide et que filteredMovies est vide,
    // lancer la récupération des categories
    if (moviesList.length > 0 && filteredMovies.length === 0) {
      getCategories();
    }
  }, [moviesList]);

  // dès que categoriesSelected est màj, lancer le filtrage des films
  useEffect(() => {
    filterMovies();
  }, [categoriesSelected]);

  // dès que filteredMovies est màj
  useEffect(() => {
    // si filteredMovies n'est pas vide, màj des films ds store
    if (filteredMovies.length > 0) {
      dispatch(getMovies(filteredMovies));
    }
  }, [filteredMovies]);

  return (
    <>
      <Multiselect
        className="select-filters"
        placeholder="Filtrer par catégorie(s)"
        displayValue="value"
        options={categoryFilterOptions}
        onSelect={(categorySelected) => getCategoriesSelected(categorySelected)}
        onRemove={(categorySelected) =>
          removeCategoriesSelected(categorySelected)
        }
      />
      <MoviesList moviesList={currentMovies} />;
      <div className="pagination-row">
        <Pagination
          moviesPerPage={moviesPerPage}
          totalMovies={moviesList.length}
          paginate={paginate}
          currentPage={currentPage}
        />
        <select
          className="moviesPerPAge-options"
          onChange={(e) => setMoviesPerPage(e.target.value)}
        >
          {optionsPagination.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <p>films par page</p>
      </div>
    </>
  );
};

export default Home;
