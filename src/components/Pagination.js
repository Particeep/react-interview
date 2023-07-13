import React from "react";
import Select from "react-select";
import { FcNext, FcPrevious } from "react-icons/fc";
import {
  PageNumbersContainer,
  PaginationButton,
  PaginationContainer,
} from "../pages/Movies/style";

const Pagination = ({
  perPage,
  total,
  setPage,
  previousPage,
  nextPage,
  setPerPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationContainer>
      <PageNumbersContainer>
        <PaginationButton disabled={currentPage === 1} onClick={previousPage}>
          <FcPrevious />
        </PaginationButton>
        {pageNumbers.map((number) => (
          <PaginationButton
            key={number}
            disabled={currentPage === number}
            isActive={currentPage === number}
            onClick={(e) => {
              e.preventDefault();
              setPage(number);
            }}
          >
            {number}
          </PaginationButton>
        ))}
        <PaginationButton
          disabled={currentPage === pageNumbers.length}
          onClick={nextPage}
        >
          <FcNext />
        </PaginationButton>
      </PageNumbersContainer>
      <Select
        name="items"
        options={[4, 8, 12].map((page) => ({
          label: `${page} / page`,
          value: page,
        }))}
        defaultValue={{ label: "4 / page", value: "4" }}
        placeholder="Items per page"
        classNamePrefix="select"
        onChange={(option) => setPerPage(option.value)}
        menuPlacement="top"
      />
    </PaginationContainer>
  );
};

export default Pagination;
