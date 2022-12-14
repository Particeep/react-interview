import "./App.scss";
import { movies$ } from "./movies";

import React, { useEffect, useState } from "react";
import Films from "./components/Films/Films";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { useDispatch } from "react-redux";
import { setMovies } from "./logic/filmsSlices";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const dataFetch = async () => {
      const response = await movies$;
      dispatch(setMovies(response));
      setIsLoading(false);
    };
    dataFetch();
  }, [dispatch]);

  return (
    <div>
      <Header />
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <div className="App">
          <Films />
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
