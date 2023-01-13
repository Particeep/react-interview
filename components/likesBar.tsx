interface LikesBarProps {
  likes: number;
  dislikes: number;
}

const LikesBar = ({ likes, dislikes }: LikesBarProps) => {
  return (
    <div className="rounded-lg h-4 w-4/5 bg-red-400">
      <div
        className="bg-green-400 h-4 rounded-lg"
        style={{ width: `${(likes / (likes + dislikes)) * 100}%` }}
      />
    </div>
  );
};

export default LikesBar;
