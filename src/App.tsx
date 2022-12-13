import React, { useEffect, useState } from "react";
import "./App.css";
import { movies$ } from "./movies";
import Films from "./components/Films";
import { IMovie } from "./interfaces/IMovie";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<IMovie[]>([]);

  useEffect(() => {
    const dataFetch = async () => {
      const response = await movies$;
      setData(response);
      setIsLoading(false);
      console.log(response);
    };
    dataFetch();
  }, [data]);

  return isLoading ? (
    <span>Loading</span>
  ) : (
    <div className="App">
      <Films data={data} />
    </div>
  );
}

export default App;
