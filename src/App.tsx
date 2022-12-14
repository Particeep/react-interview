import "./App.scss";
import { movies$ } from "./movies";

import React, { useEffect, useState } from "react";
import Films from "./components/Films/Films";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import { useDispatch } from "react-redux";
import { setMovies } from "./logic/filmsSlices";
import { IMovie } from "./interfaces/IMovie";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const dataFetch = async () => {
      const response: IMovie[] = await movies$;
      const tab: IMovie[] = [];

      //To remove combine data for duplicte movies
      response.forEach((element) => {
        const filmTab = tab.find((filmTab) => filmTab.title === element.title);
        if (filmTab) {
          const index = tab.indexOf(filmTab);

          //Need to copy the object to iterate
          const copy = { ...filmTab };
          copy.dislikes += element.dislikes;
          copy.likes += element.likes;

          tab.splice(index, 1, copy);
        } else {
          tab.push(element);
        }
      });

      dispatch(setMovies(tab));
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
