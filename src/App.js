import { movies$ } from "./utils/movies";
import { useState, useEffect } from "react";
import CardMovies from "./components/CardMovies";
import Pagination from "./components/Pagination";
import Category from "./components/Category";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [movies, setMovies] = useState({});
  const [moviesPerPage, setMoviesPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryOn, setCategoryOn] = useState(false);
  const lastM = currentPage * moviesPerPage;
  const firstM = lastM - moviesPerPage;
  const currentM = movies.length >= 1 ? movies.slice(firstM, lastM) : "";
  const [movieByCategory, setMovieByCategory] = useState(currentM);

  const totalM = movies.length;
  const categories = movies.length >= 1 ? movies.map((m) => m.category) : "";
  const categoriesFilter =
    movies.length >= 1
      ? categories.filter(function (value, index, array) {
          return array.indexOf(value) == index;
        })
      : "";

  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalM / moviesPerPage); i++) {
    pageNumber.push(i);
  }

  useEffect(() => {
    if (movies && movies.length === undefined) {
      movies$
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [pageNumber, movies]);

  const handleNumberPerPage = (e) => {
    console.log(e.target.value);
    setCurrentPage(1);
    setMoviesPerPage(e.target.value);
  };

  const changeCategory = (e) => {
    const newMovies = movies.filter((item) => item.category === e.target.value);
    setCategoryOn(true);

    console.log(newMovies);
    setMovieByCategory(newMovies);
  };

  return (
    <div className="App">
      <Category
        movies={movies}
        categoriesFilter={categoriesFilter}
        setMovieByCategory={setMovieByCategory}
        setCategoryOn={setCategoryOn}
      />

      <div className="moviesContainer">
        {categoryOn
          ? movieByCategory.map((m) => (
              <CardMovies
                movies={movies}
                movie={m}
                setMovies={setMovies}
                setMovieByCategory={setMovieByCategory}
                movieByCategory={movieByCategory}
              />
            ))
          : movies.length >= 1
          ? currentM.map((m) => <CardMovies movies={movies} movie={m} setMovies={setMovies} />)
          : ""}
      </div>
      <div className="nbMoviesPerPage">
        <h3 className="nbMoviesText">Nombre de films par page : </h3>
        <select onChange={(e) => handleNumberPerPage(e)}>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
      </div>
      {categoryOn ? (
        <Pagination
          movies={movieByCategory}
          currentPage={currentPage}
          pageNumber={pageNumber}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <Pagination movies={movies} currentPage={currentPage} pageNumber={pageNumber} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}

export default App;
