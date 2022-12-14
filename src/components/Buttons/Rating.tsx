//React import
import { useState } from "react";

//Redux import
import { useDispatch } from "react-redux";
import { upVote, downVote } from "../../logic/filmsSlices";

//Style
import "./rating.scss";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

type Props = {
  index: number;
  likes: number;
};

const Rating = ({ index, likes }: Props) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState<boolean | undefined>(undefined);

  return (
    <div className="rating">
      <IconContext.Provider value={{ size: "1em" }}>
        <button
          disabled={toggle}
          onClick={() => {
            dispatch(upVote(index));
            setToggle(true);
          }}
          className="like"
        >
          <AiTwotoneLike />
          <span>{likes}</span>
        </button>
        <button
          disabled={toggle === false}
          onClick={() => {
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
