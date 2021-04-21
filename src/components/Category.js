import React from "react";

export default function Category({ movies, categoriesFilter, setCategoryOn, setMovieByCategory }) {
  const changeCategory = (e) => {
    const newMovies = movies.filter((item) => item.category === e.target.value);
    setCategoryOn(true);
    setMovieByCategory(newMovies);
  };

  return (
    <div className="categoryContainer">
      <select id="categories" multiple>
        {movies.length >= 1
          ? categoriesFilter.map((c, i) => (
              <option onClick={(e) => changeCategory(e)} key={i}>
                {c}
              </option>
            ))
          : ""}
      </select>
    </div>
  );
}
