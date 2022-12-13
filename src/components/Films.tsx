import { IMovie } from "../interfaces/IMovie";
import Film from "./Film";

import { useSelector } from "react-redux";
import type { RootState } from "../logic/store";

const Films = () => {
  const film = useSelector((state: RootState) => state.films.films);

  return (
    <div>
      {film.map((film, index) => {
        return <Film film={film} index={index} key={film.id} />;
      })}
    </div>
  );
};

export default Films;
