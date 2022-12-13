import thumbUpIcon from "../../assets/thumbUpIcon.svg";

interface Props {
  id: string;
  likes: number;
  dislikes: number;
  isLiked: boolean;
  handleLike: (id: string) => void;
}

const Like = ({ id, likes, dislikes, isLiked, handleLike }: Props) => {
  const likesRatio = Math.round((likes / (dislikes + likes)) * 100);

  return (
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
  );
};

export default Like;
