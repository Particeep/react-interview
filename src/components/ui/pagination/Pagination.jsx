import React, { useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import MuiPagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'

const StyledSelect = styled(Select)({
  color: '#000',
  fontSize: 'inherit',
  flexShrink: 0,
  '& .MuiSelect-select': {
    backgroundColor: '#fff',
    padding: '6px 32px 6px 8px',
    textAlign: 'right',
    textAlignLast: 'right'
  },
  '& .MuiOutlinedInput-notchedOutline, &:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: '#fff'
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    bordercolor: '#fff',
    borderWidth: 0
  }
})

export const Pagination = function (props) {
  const {
    currentPage = 1,
    itemsPerPageOptions = [4, 8, 12],
    onChangeItemsPerPage,
    onChangePage,
    totalItems
  } = props

  const [itemsPerPage, setItemPerPage] = useState(itemsPerPageOptions[0] || 10)

  const handleChangeItemsPerPage = (event) => {
    const value = event.target.value
    setItemPerPage(value)
    if (onChangeItemsPerPage) onChangeItemsPerPage(value)
    if (Math.ceil(totalItems / value) < currentPage) onChangePage(Math.ceil(totalItems / value))
  }

  return (
    <Box
      component="div"
      sx={{
        display: 'inline-lex',
        justifyContent: 'start',
        alignItems: 'center'
      }}
    >
      <StyledSelect
        value={itemsPerPage}
        onChange={handleChangeItemsPerPage}
      >
        {itemsPerPageOptions.map((opt, idx) => (
          <MenuItem key={`${opt}-${idx}`} value={opt}>{opt}</MenuItem>
        ))}
      </StyledSelect>
      <MuiPagination
        color="primary"
        count={Math.ceil(totalItems / parseInt(itemsPerPage))}
        page={currentPage}
        onChange={(event, page) => onChangePage(page)}
        renderItem={(item) => (
          <PaginationItem {...item} sx={{ color: '#fff' }} />
        )}
      />
    </Box>
  )
}