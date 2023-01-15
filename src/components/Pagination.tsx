import React, { useState } from "react";
import TablePagination from "@mui/material/TablePagination";
import { Stack } from "@mui/system";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setPage } from "../features/movies/moviesSlice";

export const rowsPerPageOptions = [4, 8, 12];

export default function Pagination() {
  const { filteredMovieIds, page } = useAppSelector((state) => state.movies);
  const dispatch = useAppDispatch();

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
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
