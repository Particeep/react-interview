type Props = {
  likes: number;
  dislikes: number;
  vote: number;
};

const Ranking = ({ likes, dislikes, vote }: Props) => {
  return (
    <div style={{ width: "100%", height: "10px", display: "flex" }}>
      <div
        style={{
          width: `${(likes / vote) * 100}%`,
          backgroundColor: "green",
        }}
      ></div>
      <div
        style={{
          width: `${(dislikes / vote) * 100}%`,
          height: "10px",
          backgroundColor: "red",
        }}
      ></div>
    </div>
  );
};

export default Ranking;
