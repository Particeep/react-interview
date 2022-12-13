import { useEffect, useState } from "react";
import { dataMovies } from "../interfaces/Movies";
import { moviesData } from "../movies.js";
import Movie from "./Movie.js";

const ListMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesList, setMoviesList] = useState<dataMovies[]>([]);

  useEffect(() => {
    moviesData.then((data: dataMovies[]) => setMoviesList(data));

    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full flex justify-center px-12 flex-wrap gap-4">
      {moviesList.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          category={movie.category}
          likes={movie.likes}
          dislikes={movie.dislikes}
        />
      ))}
    </div>
  );
};

export default ListMovies;
