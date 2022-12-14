import { useEffect } from "react";

//redux
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentCategorie,
  setCategories,
} from "../../logic/categoriesSlices";
import { RootState } from "../../logic/store";

import "./header.scss";

const Header = () => {
  const film = useSelector((state: RootState) => state.films.films);
  const categories = useSelector(
    (state: RootState) => state.categories.categories
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let tab: string[] = [];
    for (let i = 0; i < film.length; i++) {
      if (!tab.includes(film[i].category)) {
        tab.push(film[i].category);
      }
    }
    dispatch(setCategories(tab));
  }, [film, dispatch]);

  return (
    <header>
      <select
        name="categorie"
        id=""
        onChange={(event) => dispatch(setCurrentCategorie(event.target.value))}
      >
        <option value={""}>Choisissez une catégorie</option>
        {categories.map((categorie, index) => {
          return (
            <option value={categorie} key={index}>
              {categorie}
            </option>
          );
        })}
      </select>
    </header>
  );
};

export default Header;
