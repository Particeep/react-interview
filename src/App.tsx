import React, { useEffect, useState } from "react";
import "./App.css";
import { movies$ } from "./movies";
import Films from "./components/Films";
import { IMovie } from "./interfaces/IMovie";

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
  }, []);

  return (
    <div>
      {isLoading ? (
        <span>Loading</span>
      ) : (
        <div className="App">
          <Films />
        </div>
      )}
    </div>
  );
}

export default App;
