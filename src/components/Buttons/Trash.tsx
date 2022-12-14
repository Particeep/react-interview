//Redux
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../../logic/filmsSlices";
import type { RootState } from "../../logic/store";

import { BsTrash } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { IMovie } from "../../interfaces/IMovie";

type Props = {
  film: IMovie;
};

const Trash = ({ film }: Props) => {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.films.films);

  return (
    <IconContext.Provider value={{ size: " 2em" }}>
      <button
        className="trash"
        onClick={() => {
          const index = films.indexOf(film);
          dispatch(removeMovie(index));
        }}
      >
        <BsTrash />
      </button>
    </IconContext.Provider>
  );
};

export default Trash;
