import removeIcon from "../../assets/removeIcon.svg";
import Like from "./Like";
interface Props {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  isLiked: boolean;
  removeMovie: (id: string) => void;
  handleLike: (id: string) => void;
}

const Movie = ({
  id,
  title,
  category,
  likes,
  dislikes,
  isLiked,
  removeMovie,
  handleLike,
}: Props) => {
  return (
    <div className="w-4/5 sm:w-64 rounded shadow-md p-4 relative">
      <h2 className="font-bold mb-3 text-lg">{title}</h2>
      <img
        src={removeIcon}
        alt="Remove icon"
        className="w-4 h-4 absolute top-4 right-4 cursor-pointer"
        onClick={() => removeMovie(id)}
      />
      <span>{category}</span>
      <Like
        id={id}
        likes={likes}
        dislikes={dislikes}
        isLiked={isLiked}
        handleLike={handleLike}
      />
    </div>
  );
};

export default Movie;
