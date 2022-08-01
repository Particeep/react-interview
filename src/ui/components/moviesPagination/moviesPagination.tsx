import { A, PageItem, PaginationWrapper } from './Styled';

import React from 'react';

const MoviesPagination = ({ moviesPerPage, totalMovies, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalMovies / moviesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <PaginationWrapper>
        {pageNumbers.map((number) => (
          <PageItem key={number} currentPage={currentPage}>
            <A href="!#" onClick={() => paginate(number)}>
              {number}
            </A>
          </PageItem>
        ))}
      </PaginationWrapper>
    </nav>
  );
};

export default MoviesPagination;
