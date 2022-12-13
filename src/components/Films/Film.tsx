//React
import { useState } from "react";
import Ranking from "../Ranking/Ranking";
import Rating from "../Rating/Rating";

//TS
import { IMovie } from "../../interfaces/IMovie";

//Redux
import { useDispatch } from "react-redux";
import { removeMovie } from "../../logic/filmsSlices";

type Props = {
  film: IMovie;
  index: number;
};

const Film = ({ film, index }: Props) => {
  const { title, likes, dislikes, category } = film;
  const [vote, setVote] = useState(likes + dislikes);

  const dispatch = useDispatch();

  return (
    <div className="film">
      <h2>{title}</h2>
      <span>{category}</span>
      <Ranking likes={likes} dislikes={dislikes} vote={vote} />
      <button
        onClick={() => {
          dispatch(removeMovie(index));
        }}
      >
        Remove
      </button>
      <div>
        <span>Likes: {likes}</span>
        <span>Disikes: {dislikes}</span>
        <Rating index={index} />
      </div>
    </div>
  );
};

export default Film;
