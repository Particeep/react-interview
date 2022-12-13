//React
import { useState } from "react";
import Ranking from "./Ranking/Ranking";

//TS
import { IMovie } from "../interfaces/IMovie";

//Redux
import { useDispatch } from "react-redux";
import { removeMovie } from "../logic/filmsSlices";

type Props = {
  film: IMovie;
  index: number;
};

const Film = ({ film, index }: Props) => {
  const { title, likes, dislikes, category } = film;
  const [vote, setVote] = useState(likes + dislikes);

  const dispatch = useDispatch();
  {
    /* <button onClick={()=>{dispatch(addMovie({title: "Superman", up: 3}))}}>Add a movie</button> */
  }
  {
    /* <button onClick={()=>{dispatch(setMovies())}}>Replace movie</button> */
  }

  return (
    <div style={{ width: "100%", height: "140px", backgroundColor: "grey" }}>
      <h2>{title}</h2>
      <span>{category}</span>
      <Ranking likes={likes} dislikes={dislikes} vote={vote} />
      <button
        onClick={() => {
          dispatch(removeMovie(index));
          console.log(index);
        }}
      >
        Remove
      </button>
      <div>
        <span>Likes: {likes}</span>
        <button>Like</button>
        <span>Disikes: {dislikes}</span>
        <button>Dislike</button>
      </div>
    </div>
  );
};

export default Film;
