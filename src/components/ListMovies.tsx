import { useEffect, useState, useMemo } from "react";
import { dataMovies, selectValues } from "../interfaces/Movies";
import { moviesData } from "../movies.js";
import Filter from "./movie/Filter";
import Movie from "./movie/Movie.js";
import Pagination from "./movie/Pagination";

const ListMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesList, setMoviesList] = useState<dataMovies[]>([]);
  const [filteredValues, setFilteredValues] = useState<selectValues[]>([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

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

  const filteredItems = useMemo(() => {
    if (filteredValues.length === 0) return moviesList;
    return moviesList.filter((movie) => {
      return filteredValues.some((category) =>
        movie.category.includes(category.value)
      );
    });
  }, [moviesList, filteredValues]);

  const endOffset = itemOffset + itemsPerPage;
  const paginateMovies = filteredItems.slice(itemOffset, endOffset);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Filter
        movies={moviesList}
        filteredValues={filteredValues}
        setFilteredValues={setFilteredValues}
      />
      <div className="w-full flex justify-center px-12 flex-wrap gap-4">
        {paginateMovies.map((movie) => (
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
      <Pagination
        itemsPerPage={itemsPerPage}
        filteredItemsLength={filteredItems.length}
        setItemOffset={setItemOffset}
        setItemsPerPage={setItemsPerPage}
      />
    </div>
  );
};

export default ListMovies;
