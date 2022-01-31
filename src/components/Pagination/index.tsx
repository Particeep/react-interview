import { useDispatch, useSelector } from "react-redux";
import { updatePageSize, updatePageNumber } from "../../store/reducers/movies";

const Pagination = () => {
  const {
      data: { length: total },
      page: { size: pageSize, number: pageNumber },
    } = useSelector((state: any) => state.movies),
    PageSizes = [4, 8, 12],
    dispatch = useDispatch();

  const handlePageSize = (e: any) => {
    dispatch(updatePageSize(+e.target.innerText));
  };
  const previousPageNumber = () => {
    dispatch(updatePageNumber("previous"));
  };
  const nextPageNumber = () => {
    dispatch(updatePageNumber("next"));
  };

  return (
    <div className="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden">
        <button
          className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          disabled={pageNumber === 1}
          name="previous"
          onClick={previousPageNumber}
        >
          Previous
        </button>
        <button
          className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
          disabled={pageSize * pageNumber > total}
          name="next"
          onClick={nextPageNumber}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-200">
            Showing{" "}
            <span className="font-medium">
              {pageNumber === 1 ? 1 : (pageNumber - 1) * pageSize}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {pageSize * pageNumber > total
                ? pageNumber * pageSize - (pageNumber * pageSize - total)
                : pageNumber * pageSize}
            </span>{" "}
            of <span className="font-medium">{total}</span> results
          </p>
        </div>
        <div className="text-center text-slate-200">-{pageNumber}-</div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              disabled={pageNumber === 1}
              name="previous"
              onClick={previousPageNumber}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {PageSizes.map((size: number, index: number) => (
              <div
                key={index}
                className={`z-10 cursor-pointer bg-${
                  pageSize === size ? "teal-50" : "white"
                } border-${pageSize === size ? "teal-500" : "gray-300"} text${
                  pageSize === size ? "teal-600" : "gray-500"
                } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                onClick={handlePageSize}
              >
                {size}
              </div>
            ))}
            <button
              className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              disabled={pageSize * pageNumber > total}
              name="next"
              onClick={nextPageNumber}
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
