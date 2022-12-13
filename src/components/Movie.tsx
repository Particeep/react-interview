interface Props {
  title: string;
  category: string;
  likes: number;
  dislikes: number;
}

const Movie = ({ title, category, likes, dislikes }: Props) => {
  const likesRatio = Math.round((likes / (dislikes + likes)) * 100);

  return (
    <div className="w-4/5 sm:w-64 rounded shadow-md p-4">
      <h2 className="font-bold mb-3 text-lg">{title}</h2>
      <span>{category}</span>
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

export default Movie;
