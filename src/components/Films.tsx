import { IMovie } from "../interfaces/IMovie";
import Film from "./Film";

type Props = {
  data: IMovie[];
};

const Films = ({ data }: Props) => {
  return (
    <div>
      {data.map((film) => {
        console.log(film);
        return <Film film={film} key={film.id} />;
      })}
    </div>
  );
};

export default Films;
