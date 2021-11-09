import * as React from 'react';
import { useDispatch } from 'react-redux';

import { TablePagination } from "@mui/material"

import {
    MovieState,
    setPage, 
    setRowsPerPage,
} from '../features/movies/movieSlice'

const Pagination = (props: { pagination: MovieState['pagination'], nbItems: number}) => {
    const dispatch = useDispatch();
    const {
        pagination,
        nbItems
    } = props;

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        dispatch(setPage(newPage));
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        dispatch(setRowsPerPage(parseInt(event.target.value, 10)));
        dispatch(setPage(0));
    };

    return (
        <TablePagination
            component="div"
            count={nbItems}
            page={pagination.currentPage}
            rowsPerPageOptions={[4, 8, 12, { value: -1, label: 'All' }]}
            onPageChange={handleChangePage}
            rowsPerPage={pagination.rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    )
}

export default Pagination;