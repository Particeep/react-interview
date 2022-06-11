import { selectMovies } from "../movies/moviesSlice";
import "./Footer.scss";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setMoviesPerPage } from "../movies/moviesSlice";
import { Pagination } from "../Pagination/Pagination";

export const Footer = () => {
  const dispatch = useAppDispatch();
  const { moviesPerPage } = useAppSelector(selectMovies);

  /* Fixed options for the numbers to show per page */
  const options = [4, 8, 12];

  return (
    <div className="footer">
      <select className='select' placeholder="Nombre de résultat par page" value={moviesPerPage} onChange={(e) => dispatch(setMoviesPerPage(+e.target.value))}>
        {options.map((perPageOption) => (
          <option key={perPageOption} value={perPageOption}>
            {perPageOption}
          </option>
        ))}
      </select>
      <Pagination />
    </div>
  );
};
