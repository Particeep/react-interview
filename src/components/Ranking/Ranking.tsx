type Props = {
  likes: number;
  dislikes: number;
  vote: number;
};

const Ranking = ({ likes, dislikes, vote }: Props) => {
  return (
    <div className="ranking">
      <div
        style={{
          width: `${(likes / vote) * 100}%`,
        }}
      ></div>
      <div
        style={{
          width: `${(dislikes / vote) * 100}%`,
        }}
      ></div>
    </div>
  );
};

export default Ranking;
