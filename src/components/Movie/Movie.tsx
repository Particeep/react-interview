import "./Movie.scss";
import thumbsUp from "../../assets/image/thumbs-up-svgrepo-com.svg";
import thumbsDown from "../../assets/image/thumb-down-svgrepo-com.svg";
import deleteIcon from "../../assets/image/close-svgrepo-com.svg";
import { MovieModel, ReactionTypeEnum, reactToMovie, deleteMovie } from "../movies/moviesSlice";
import { useAppDispatch } from "../../app/hooks";
import { useMemo } from "react";

export interface MovieProps {
  movie: MovieModel;
}
export const Movie = (props: MovieProps) => {
  const {
    movie: { category, reacted, title, id: movieId, link },
  } = props;

  let {
    movie: { likes, dislikes },
  } = props;

  const dispatch = useAppDispatch();

  const handleReactionToMovie = (reactionType: ReactionTypeEnum) => {
    dispatch(reactToMovie({ reactionType, movieId }));
  };

  const widthProgressBar = useMemo(() => {
    const likesUpdated = reacted === ReactionTypeEnum.LIKE ? likes + 1 : likes;
    return likesUpdated / (likesUpdated + dislikes);
  }, [reacted, likes, dislikes]);

  return (
    <div className="movie">
      <div className="row">
        <p>{category}</p>
        <img onClick={() => dispatch(deleteMovie(movieId))} className="delete" src={deleteIcon} alt="delete" />
      </div>
      <p className="title">{title}</p>
      <img className="thumbnail" src={link} alt="link movie img" />
      <div className="progress">
        <div style={{ width: `${widthProgressBar * 100}%` }} className="progress-bar"></div>
      </div>
      <div className="rating">
        <div onClick={() => handleReactionToMovie(ReactionTypeEnum.LIKE)} className="thumb-up">
          <img src={thumbsUp} alt="thumbs-up" />
          <p>{reacted === ReactionTypeEnum.LIKE ? ++likes : likes}</p>
        </div>
        <div onClick={() => handleReactionToMovie(ReactionTypeEnum.DISLIKE)}>
          <img src={thumbsDown} alt="thumbs-down" />
          <p>{reacted === ReactionTypeEnum.DISLIKE ? ++dislikes : dislikes}</p>
        </div>
      </div>
    </div>
  );
};
