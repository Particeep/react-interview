//React
import { useState } from "react";
import Ranking from "../Ranking/Ranking";
import Rating from "../Buttons/Rating";

//TS
import { IMovie } from "../../interfaces/IMovie";
import Trash from "../Buttons/Trash";

type Props = {
  film: IMovie;
  index: number;
};

const Film = ({ film, index }: Props) => {
  const { title, likes, dislikes, category } = film;
  const [vote, setVote] = useState(likes + dislikes);

  return (
    <div className="film">
      <div className="heading">
        <h2>{title}</h2>
        <p>{category}</p>
      </div>
      <Trash index={index} />
      <Ranking likes={likes} dislikes={dislikes} vote={vote} />

      <div>
        <Rating index={index} likes={likes} />
      </div>
    </div>
  );
};

export default Film;
