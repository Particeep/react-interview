//React
import Film from "./Film";

//Redux
import { useSelector } from "react-redux";
import type { RootState } from "../../logic/store";

//Style
import "./films.scss";

const Films = () => {
  const film = useSelector((state: RootState) => state.films.films);
  const currentCategorie = useSelector(
    (state: RootState) => state.categories.currentCategory
  );

  return (
    <div className="films">
      {film.map((film, index) => {
        if (currentCategorie) {
          if (currentCategorie === film.category) {
            return <Film film={film} index={index} key={film.id} />;
          }
        } else {
          return <Film film={film} index={index} key={film.id} />;
        }
      })}
    </div>
  );
};

export default Films;
