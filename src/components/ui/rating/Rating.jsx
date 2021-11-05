import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import MuiRating from '@mui/material/Rating'
import Tooltip from '@mui/material/Tooltip'

const StyledRating = styled(MuiRating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export const Rating = function (props) {
  const {
    maxValue = 100,
    size = 'small',
    tooltipLabel,
    value
  } = props

  return (
    <Tooltip
      title={tooltipLabel}
      placement="right"
      arrow
    >
      <Box component="div" sx={{ display: 'inline-flex' }}>
        <StyledRating
          max={5}
          readOnly
          size={size}
          value={(value / maxValue) * 5}
          precision={0.1}
          icon={<FavoriteIcon fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />
      </Box>
    </Tooltip>
  )
}