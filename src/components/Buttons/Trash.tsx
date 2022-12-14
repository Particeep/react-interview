//Redux
import { useDispatch } from "react-redux";
import { removeMovie } from "../../logic/filmsSlices";

import { BsTrash } from "react-icons/bs";
import { IconContext } from "react-icons/lib";

type Props = {
  index: number;
};

const Trash = ({ index }: Props) => {
  const dispatch = useDispatch();

  return (
    <IconContext.Provider value={{ size: " 2em" }}>
      <button
        className="trash"
        onClick={() => {
          dispatch(removeMovie(index));
        }}
      >
        <BsTrash />
      </button>
    </IconContext.Provider>
  );
};

export default Trash;
