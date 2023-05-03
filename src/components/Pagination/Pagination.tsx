import React from "react";

import "./Pagination.scss";
import useListMovies from "../../hooks/useListMovies";
import Button from "../Button/Button";

function Pagination() {

  const {
    pagination: { currentPage, nbPage },
    setCurrentPage,
    havePreviousPage,
    haveNextPage,
    setNextPage,
    setPreviousPage,
  } = useListMovies(false);
  
  const generateArrayNbBtn = () => {
    const array = [];
    for (let i = 1; i <= nbPage; i++) {
      array[i] = i;
    }
    return array;
  };

  const listbtn = generateArrayNbBtn();

  return (
    <>
      {listbtn.length > 2 && (
        <div className="pagination">
          <div className="pagination__wrapper">
            {havePreviousPage() && (
              <Button paginationPrevious handleClick={setPreviousPage} />
            )}

            {listbtn.map((number) => {
              const isActive = Number(number) === Number(currentPage);
              const handleClick = () => {
                setCurrentPage(number);
              };
              return (
                <Button
                  key={"pagination_btn" + number}
                  label={number}
                  active={isActive}
                  handleClick={handleClick}
                />
              );
            })}
            {haveNextPage() && (
              <Button paginationNext handleClick={setNextPage} />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Pagination;
