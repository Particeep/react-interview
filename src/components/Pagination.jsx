import React from "react";

import Limiter from "./Limiter";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { change_page } from "../redux/pagesSlice";

import ReactPaginate from "react-paginate";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage, itemsPerPage } = useSelector((state) => state.pages);
  const { movies, status, filter } = useSelector((state) => state.movies);

  const pageCount = filter
    ? Math.ceil(
        movies.filter((movie) => movie.category === filter).length /
          itemsPerPage
      )
    : Math.ceil(movies.length / itemsPerPage);

  const handleChange = ({ selected }) => {
    dispatch(change_page(selected + 1));
  };

  return (
    <div className="pagination-container">
      {status === "success" ? (
        <>
          <Limiter />
          <ReactPaginate
            data-testid="toggle-page"
            previousLabel={"◄"}
            nextLabel={"►"}
            pageCount={pageCount}
            onPageChange={handleChange}
            containerClassName={"pagination"}
            previousLinkClassName={`${currentPage === 1 ? "hidden" : ""}`}
            nextLinkClassName={`${
              currentPage === pageCount ||
              (filter != null &&
                movies.filter((movie) => movie.category === filter).length ===
                  0) ||
              movies.length === 0
                ? "hidden"
                : ""
            }`}
            activeClassName={"pagination-active"}
          />
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
