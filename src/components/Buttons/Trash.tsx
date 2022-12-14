//Redux
import { useDispatch, useSelector } from "react-redux";
import { removeMovie } from "../../logic/filmsSlices";
import type { RootState } from "../../logic/store";

import { BsTrash } from "react-icons/bs";
import { IconContext } from "react-icons/lib";
import { IMovie } from "../../interfaces/IMovie";
import { previousPage } from "../../logic/paginationSlices";

type Props = {
  film: IMovie;
};

const Trash = ({ film }: Props) => {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.films.films);
  const page = useSelector((state: RootState) => state.pagination.page);
  const filter = useSelector((state: RootState) => state.pagination.filter);
  const filmFiltered = useSelector(
    (state: RootState) => state.films.filmFiltered
  );

  return (
    <IconContext.Provider value={{ size: " 2em" }}>
      <button
        className="trash"
        onClick={() => {
          const index = films.indexOf(film);
          dispatch(removeMovie(index));
          if (page > Math.ceil((filmFiltered.length - 1) / filter)) {
            dispatch(previousPage());
          }
        }}
      >
        <BsTrash />
      </button>
    </IconContext.Provider>
  );
};

export default Trash;
