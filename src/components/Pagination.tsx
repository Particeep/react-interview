import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import { Stack } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPage } from "../features/movies/moviesSlice";

export const rowsPerPageOptions = [4, 8, 12];

export default function Pagination() {
  const { filteredMovieIds, page } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();
  // const [page, setPage] = useState(1);
  // const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    // setPage(newPage);
    dispatch(
      setPage({
        ...page,
        currentPage: newPage,
      })
    );
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // setRowsPerPage(parseInt(event.target.value, 10));
    // setPage(0);
    dispatch(
      setPage({
        currentPage: 0,
        moviesPerPage: parseInt(event.target.value, 10),
      })
    );
  };

  return (
    <Stack sx={{ width: "100%", alignItems: "center" }}>
      <TablePagination
        component="div"
        count={filteredMovieIds.length}
        page={page.currentPage}
        onPageChange={handleChangePage}
        rowsPerPage={page.moviesPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        labelRowsPerPage="Movies per page"
      />
    </Stack>
  );
}
