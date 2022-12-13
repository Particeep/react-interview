import { useEffect, useState, useMemo } from "react";
import ReactPaginate from "react-paginate";
import { dataMovies, selectValues } from "../interfaces/Movies";
import { moviesData } from "../movies.js";
import Filter from "./movie/Filter";
import Movie from "./movie/Movie.js";

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
  const pageCount = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filteredItems.length;
    setItemOffset(newOffset);
  };

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
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        className="flex justify-center gap-2 mt-12"
        previousLinkClassName="rounded-full bg-gray-100 text-sm px-3 h-8 flex justify-center items-center"
        nextLinkClassName="rounded-full bg-gray-100 text-sm px-3 h-8 flex justify-center items-center"
        pageLinkClassName="rounded-full bg-gray-100 flex justify-center items-center px-3 h-8 text-sm"
        activeLinkClassName="bg-gray-200 font-bold"
      />
      <div className="flex justify-center items-center mt-4">
        <label htmlFor="moviesPerPage">Movies per page:</label>

        <select
          className="ml-2 bg-gray-100 rounded-full h-8 px-2"
          name="moviesPerPage"
          id="moviesPerPage"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </div>
    </div>
  );
};

export default ListMovies;
