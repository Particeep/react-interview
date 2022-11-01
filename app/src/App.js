import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import MovieCard from "./components/MovieCard";
import { addMovies, selectMovies } from "./store/movieSlice";
import { movies$ } from "./utils/movies";

function App() {
  const items = useSelector(selectMovies);
  const dispatch = useDispatch();
  const [movies, setMovies] = useState(items);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchMovies = await movies$;
      const allMovies = [...fetchMovies].map((movie) => ({ ...movie, show: true}));
      dispatch(addMovies(allMovies));
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      setCategories([...new Set(movies.map((movie) => movie.category))]);
    }
  }, [movies, items]);

  useEffect(() => {
    setMovies(items);
  }, [items]);

  const filterByCat = (cat) => {
    setMovies((oldMovies) =>
      oldMovies.map((oldMovie) => ({
        ...oldMovie,
        show: (oldMovie.category === cat || cat === "ALL") && true,
      }))
    );
  };

  return (
    <div className="App">
      <h1>Movies</h1>
      {categories && (
        <select onChange={(e) => filterByCat(e.target.value)}>
          <option value="ALL">--Please choose an option--</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      )}

      <div className="card-container">
        {movies.map((movie) => movie.show && <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}

export default App;
