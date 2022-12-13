//React import
import { useState } from "react";

//Redux import
import { useDispatch } from "react-redux";
import { upVote, downVote } from "../../logic/filmsSlices";

//Style
import "./rating.scss";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

type Props = {
  index: number;
};

const Rating = ({ index }: Props) => {
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState<boolean | undefined>(undefined);

  return (
    <div className="rating">
      <button
        disabled={toggle}
        onClick={() => {
          dispatch(upVote(index));
          setToggle(true);
        }}
        className="like"
      >
        <AiFillLike />
      </button>
      <button
        disabled={toggle === false}
        onClick={() => {
          dispatch(downVote(index));
          setToggle(false);
        }}
        className="dislike"
      >
        <AiFillDislike />
      </button>
    </div>
  );
};

export default Rating;
