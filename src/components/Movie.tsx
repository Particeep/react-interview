import removeIcon from "../assets/removeIcon.svg";
import thumbUpIcon from "../assets/thumbUpIcon.svg";
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
  const likesRatio = Math.round((likes / (dislikes + likes)) * 100);

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

      <div className="mt-3">
        <button
          className={`flex items-center py-2 px-4 rounded-full cursor-pointer ${
            isLiked ? "bg-gray-300" : "bg-gray-100 hover:bg-gray-200"
          }`}
          onClick={() => !isLiked && handleLike(id)}
        >
          <img src={thumbUpIcon} alt="Like icon" />
          <span className="text-sm ml-2">{likes}</span>
        </button>
        <div className="w-full bg-gray-200 h-1 flex mt-2">
          <span
            className="bg-blue-600 h-1 rounded-l"
            style={{ width: `${likesRatio}%` }}
          ></span>
          <span className="bg-red-600 h-1 flex-1 rounded-r"></span>
        </div>
      </div>
    </div>
  );
};

export default Movie;
