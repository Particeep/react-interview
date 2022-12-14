//React
import Film from "./Film";

//Redux
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../logic/store";

//Style
import "./films.scss";
import { useEffect } from "react";
import { setFilmFiltered } from "../../logic/filmsSlices";

const Films = () => {
  const films = useSelector((state: RootState) => state.films.films);
  const currentCategorie = useSelector(
    (state: RootState) => state.categories.currentCategory
  );
  const page = useSelector((state: RootState) => state.pagination.page);
  const filter = useSelector((state: RootState) => state.pagination.filter);
  const filmFiltered = useSelector(
    (state: RootState) => state.films.filmFiltered
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentCategorie) {
      const tab = films.filter((film) => film.category === currentCategorie);
      dispatch(setFilmFiltered(tab));
    } else {
      dispatch(setFilmFiltered(films));
    }
  }, [currentCategorie, films, dispatch]);

  return (
    <div className="films">
      {filmFiltered.map((film, index) => {
        if ((page - 1) * filter <= index && index < page * filter) {
          return <Film film={film} key={film.id} />;
        } else {
          return null;
        }
      })}
    </div>
  );
};

export default Films;
