import { useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { changePage, selectMovies } from "../movies/moviesSlice";
import "./Paginations.scss"

export const Pagination = () => {
  const dispatch = useAppDispatch();
  const { currentPage, totalPages } = useAppSelector(selectMovies);

  /* Define if buttons paginations are meant to be disabled */
  const minusDisabled = useMemo(() => {
    return currentPage === 1;
  }, [currentPage]);
  const plusDisabled = useMemo(() => {
    return currentPage === totalPages;
  }, [currentPage, totalPages]);

  return (
    <div className="pagination">
      <p>{`${currentPage}/${totalPages}`}</p>
      <button disabled={minusDisabled} onClick={() => dispatch(changePage(currentPage - 1))}>
        Page précédente
      </button>
      <button disabled={plusDisabled} onClick={() => dispatch(changePage(currentPage + 1))}>
        Page suivante
      </button>
    </div>
  );
};
