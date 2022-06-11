import { useAppDispatch, useAppSelector } from "../../app/hooks";
import "./Header.scss";

import { filterByCategory, selectMovies } from "../movies/moviesSlice";
export const Header = () => {
  const dispatch = useAppDispatch();
  const { categories, currentCategory } = useAppSelector(selectMovies);

  return (
    <div className="header">
      <p>Categories: </p>

      <select
        placeholder="Selectionner une catégorie"
        value={currentCategory ? currentCategory : ""}
        onChange={(e) => dispatch(filterByCategory(e.target.value))}
      >
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};
