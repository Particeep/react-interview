//React import
import { useState } from "react";

//Redux import
import { useDispatch, useSelector } from "react-redux";
import { upVote, downVote } from "../../logic/filmsSlices";
import type { RootState } from "../../logic/store";

//Style
import "./rating.scss";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { IconContext } from "react-icons/lib";
import { IMovie } from "../../interfaces/IMovie";

type Props = {
  film: IMovie;
  likes: number;
};

const Rating = ({ film, likes }: Props) => {
  const dispatch = useDispatch();
  const films = useSelector((state: RootState) => state.films.films);

  const [toggle, setToggle] = useState<boolean | undefined>(undefined);

  return (
    <div className="rating">
      <IconContext.Provider value={{ size: "1em" }}>
        <button
          disabled={toggle}
          onClick={() => {
            const index = films.indexOf(film);
            dispatch(upVote(index));
            setToggle(true);
          }}
          className="like"
        >
          <AiTwotoneLike />
          <span>{likes < 1000 ? likes : `${Math.round(likes / 1000)}K`}</span>
        </button>
        <button
          disabled={toggle === false}
          onClick={() => {
            const index = films.indexOf(film);
            dispatch(downVote(index));
            setToggle(false);
          }}
          className="dislike"
        >
          <AiTwotoneDislike />
        </button>
      </IconContext.Provider>
    </div>
  );
};

export default Rating;
