//React
import Film from "./Film";

//Redux
import { useSelector } from "react-redux";
import type { RootState } from "../../logic/store";

//Style
import "./films.scss";

const Films = () => {
  const film = useSelector((state: RootState) => state.films.films);

  return (
    <div className="films">
      {film.map((film, index) => {
        return <Film film={film} index={index} key={film.id} />;
      })}
    </div>
  );
};

export default Films;
