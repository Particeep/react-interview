import React, { useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { addLike, addDislike } from "../store/movieSlice";

function Likes(props) {
  const { movie } = props;
  const { likes, dislikes, isLiked, isDisliked } = movie;
  const dispatch = useDispatch();

  const likesRatio = useMemo(() => {
    return (likes * 100) / (likes + dislikes);
  }, [likes, dislikes]);

  return (
    <div className="likes">
      <FontAwesomeIcon
        icon={faThumbsUp}
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(addLike(movie))}
        color={isLiked && "#1cb5e0"}
      />
      <div className="likes-progressbar">
        <span style={{ width: likesRatio + "%" }}></span>
      </div>
      <FontAwesomeIcon
        icon={faThumbsDown}
        style={{ cursor: "pointer" }}
        onClick={() => dispatch(addDislike(movie))}
        color={isDisliked && "#F95738"}
      />
    </div>
  );
}

export default Likes;
