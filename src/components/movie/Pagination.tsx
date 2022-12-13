import { Dispatch, SetStateAction } from "react";
import ReactPaginate from "react-paginate";

interface Props {
  itemsPerPage: number;
  filteredItemsLength: number;
  setItemOffset: Dispatch<SetStateAction<number>>;
  setItemsPerPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({
  itemsPerPage,
  filteredItemsLength,
  setItemOffset,
  setItemsPerPage,
}: Props) => {
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % filteredItemsLength;
    setItemOffset(newOffset);
  };

  const pageCount = Math.ceil(filteredItemsLength / itemsPerPage);
  return (
    <>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        className="flex justify-center gap-2 mt-12"
        previousLinkClassName="rounded-full bg-gray-100 text-sm px-3 h-8 flex justify-center items-center"
        nextLinkClassName="rounded-full bg-gray-100 text-sm px-3 h-8 flex justify-center items-center"
        pageLinkClassName="rounded-full bg-gray-100 flex justify-center items-center px-3 h-8 text-sm"
        activeLinkClassName="bg-gray-200 font-bold"
      />
      <div className="flex justify-center items-center mt-4">
        <label htmlFor="moviesPerPage">Movies per page:</label>

        <select
          className="ml-2 bg-gray-100 rounded-full h-8 px-2"
          name="moviesPerPage"
          id="moviesPerPage"
          value={itemsPerPage}
          onChange={(e) => setItemsPerPage(Number(e.target.value))}
        >
          <option value={4}>4</option>
          <option value={8}>8</option>
          <option value={12}>12</option>
        </select>
      </div>
    </>
  );
};

export default Pagination;
