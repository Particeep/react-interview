//React
import { useState } from "react";
import Ranking from "../Ranking/Ranking";
import Rating from "../Buttons/Rating";

//TS
import { IMovie } from "../../interfaces/IMovie";
import Trash from "../Buttons/Trash";

type Props = {
  film: IMovie;
};

const Film = ({ film }: Props) => {
  const { title, likes, dislikes, category } = film;
  const [vote, setVote] = useState(likes + dislikes);

  return (
    <div className="film">
      <div className="heading">
        <h2>{title}</h2>
        <p>{category}</p>
      </div>
      <Trash film={film} />
      <Ranking likes={likes} dislikes={dislikes} vote={vote} />

      <div>
        <Rating film={film} likes={likes} />
      </div>
    </div>
  );
};

export default Film;
