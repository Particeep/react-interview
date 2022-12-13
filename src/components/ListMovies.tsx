import { useEffect, useState } from "react";
import { dataMovies } from "../interfaces/Movies";
import { moviesData } from "../movies.js";
import Movie from "./movie/Movie.js";

const ListMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesList, setMoviesList] = useState<dataMovies[]>([]);

  useEffect(() => {
    moviesData.then((data: dataMovies[]) => setMoviesList(data));

    setIsLoading(false);
  }, []);

  const handleRemoveMovie = (id: string) => {
    const filteredData = moviesList.filter((movie) => movie.id !== id);

    setMoviesList(filteredData);
  };

  const handleLike = (id: string) => {
    const updatedData = moviesList.map((movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          likes: movie.likes + 1,
          isLiked: true,
        };
      }
      return movie;
    });

    setMoviesList(updatedData);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full flex justify-center px-12 flex-wrap gap-4">
      {moviesList.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          title={movie.title}
          category={movie.category}
          likes={movie.likes}
          dislikes={movie.dislikes}
          isLiked={movie.isLiked ? movie.isLiked : false}
          removeMovie={handleRemoveMovie}
          handleLike={handleLike}
        />
      ))}
    </div>
  );
};

export default ListMovies;
