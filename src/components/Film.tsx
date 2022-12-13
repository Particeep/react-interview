import { useState } from "react";
import { IMovie } from "../interfaces/IMovie";
import Ranking from "./Ranking/Ranking";

type Props = {
  film: IMovie;
};

const Film = ({ film }: Props) => {
  const { title, likes, dislikes, category } = film;
  const [vote, setVote] = useState(likes + dislikes);

  return (
    <div style={{ width: "100%", height: "400px", backgroundColor: "grey" }}>
      <h2>{title}</h2>
      <span>{category}</span>
      <Ranking likes={likes} dislikes={dislikes} vote={vote} />
      <button>Remove</button>
    </div>
  );
};

export default Film;
