import React from "react";

import "./Pagination.css";

/**
 * Représente la pagination
 * @param {moviesPerPage, totalMovies, paginate}
 * @returns
 */
const Pagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${currentPage === number && "active"}`}
          >
            <a href="!#" className="page-link" onClick={() => paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
