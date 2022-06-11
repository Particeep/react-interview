import React, { useEffect } from "react";
import { Movies } from "./components/movies/Movies";
import "./App.scss";
import { fetchMoviesAsync } from "./components/movies/moviesSlice";
import { useAppDispatch } from "./app/hooks";
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <Movies />
      <Footer />
    </div>
  );
}

export default App;
