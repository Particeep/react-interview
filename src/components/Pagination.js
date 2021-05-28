import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function Pagination({ currentPage, pageNumber, setCurrentPage, movies }) {
  const prevPage = (currentPage) => {
    console.log(currentPage);
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPage = (currentPage) => {
    if (currentPage !== pageNumber.length) setCurrentPage(currentPage + 1);
  };
  const handlePages = (number) => setCurrentPage(number);

  return (
    <div className="indexContainer">
      <FontAwesomeIcon onClick={() => prevPage(currentPage)} className="indexPages" icon={faChevronLeft} />

      {pageNumber.map((n) => (
        <li key={n}>
          <h2 className="indexPages" onClick={() => handlePages(n)}>
            {n}
          </h2>
        </li>
      ))}
      <FontAwesomeIcon onClick={() => nextPage(currentPage)} className="indexPages" icon={faChevronRight} />
    </div>
  );
}
