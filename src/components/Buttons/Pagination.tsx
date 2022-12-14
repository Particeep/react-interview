import { useDispatch, useSelector } from "react-redux";
import { previousPage, nextPage } from "../../logic/paginationSlices";
import type { RootState } from "../../logic/store";

import "./pagination.scss";

const Pagination = () => {
  const page = useSelector((state: RootState) => state.pagination.page);
  const filter = useSelector((state: RootState) => state.pagination.filter);
  const filmFiltered = useSelector(
    (state: RootState) => state.films.filmFiltered
  );

  const dispatch = useDispatch();
  return (
    <div className="pagination">
      <button disabled={page === 1} onClick={() => dispatch(previousPage())}>
        Précedent
      </button>
      <div>
        <span>{page}</span>
      </div>

      <button
        disabled={page === Math.ceil(filmFiltered.length / filter)}
        onClick={() => dispatch(nextPage())}
      >
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
