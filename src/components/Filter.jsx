import React, { useState, useEffect } from "react";

import Select from "react-select";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { filter_movies } from "../redux/moviesSlice";
import { change_page } from "../redux/pagesSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const { status, movies, filter } = useSelector((state) => state.movies);
  const [selectedOption, setSelectedOption] = useState("🏷️ All");

  // Resetting dropdown value to "all" if last item of category has been removed
  useEffect(() => {
    if (movies.filter((movie) => movie.category === filter).length === 0)
      setSelectedOption("🏷️ All");
  }, [movies, filter]);

  // Non-duplicated categories
  const categories = [
    ...new Map(
      movies.map((movie) => [movie.category, movie.category])
    ).values(),
  ];

  const options = [{ value: "All", label: "🏷️ All" }];
  categories.forEach((category) => {
    options.push({ value: category, label: category });
  });

  const handleFilter = (e) => {
    setSelectedOption(e.value);
    dispatch(change_page(1));
    e.value === "All"
      ? dispatch(filter_movies(null))
      : dispatch(filter_movies(e.value));
  };

  return (
    <div className="filter-container">
      {status === "success" ? (
        <Select
          data-testid="filter-movies"
          defaultValue={selectedOption}
          value={selectedOption}
          placeholder={selectedOption}
          onChange={handleFilter}
          options={options}
          isSearchable
        />
      ) : null}
    </div>
  );
};

export default Filter;
