import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import DeleteIcon from '@mui/icons-material/Delete'
import Fade from '@mui/material/Fade'
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownIcon from '@mui/icons-material/ThumbDown'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import { Rating } from '../rating/Rating'

export const MovieCard = function (props) {
  const {
    isLiked,
    isDisliked,
    movie,
    onLikeMovie,
    onUnlikeMovie,
    onDislikeMovie,
    onUndislikeMovie,
    onDeleteMovie
  } = props
  const { t } = useTranslation()
  const timeoutRef = useRef(null)

  const [anchorEl, setAnchorEl] = useState(null)
  const [open,  setOpen] = useState(false)

  const handleToggleLike = () => {
    if (isLiked) {
      onUnlikeMovie(movie.id)
    } else {
      if (isDisliked) onUndislikeMovie(movie.id)
      onLikeMovie(movie.id)
    }
  }

  const handleToggleDislike = () => {
    if (isDisliked) {
      onUndislikeMovie(movie.id)
    } else {
      if (isLiked) onUnlikeMovie(movie.id)
      onDislikeMovie(movie.id)
    }
  }

  const handleDelete = () => {
    onDeleteMovie(movie.id)
  }

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget)
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      setOpen(true)
    }, 750)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
    setOpen(false)
  }

  const convertAmount = (number) => {
    if (number < 1000) return number
    if (number < 1000000) {
      const quotient = (number / 1000)
      return (quotient.toFixed(1).endsWith('.0') ? quotient.toFixed(0) : quotient.toFixed(1)) + ' K'
    }
    const quotient = (number / 1000000)
    return (quotient.toFixed(1).endsWith('.0') ? quotient.toFixed(0) : quotient.toFixed(1)) + ' M'
  }

  const ratio = (movie.likes / (movie.likes + movie.dislikes)).toFixed(3) * 100

  return (
    <Box component="div" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card
        sx={{ maxWidth: 345, cursor: 'pointer' }}
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={() => {
          if (timeoutRef.current !== null) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = null
          }
        }}
      >
        <CardMedia
          component="img"
          image={movie.poster}
        />
      </Card>
      <Popover
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        TransitionComponent={Fade}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transitionDuration={{
          appear: 750,
          enter: 750,
          exit: 0
        }}
        onClose={handlePopoverClose}
      >
        <Card sx={{ maxWidth: 350, pointerEvents: 'auto' }} onMouseLeave={handlePopoverClose}>
          <CardMedia
            component="img"
            image={movie.poster}
          />
          <CardContent sx={{ paddingBottom: '10px' }}>
            <Typography gutterBottom variant="h5" component="div">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: '5px' }}>
              {movie.category}
            </Typography>
            <Rating tooltipLabel={`${ratio} %`} value={ratio} maxValue={100} />
          </CardContent>
          <CardActions sx={{ paddingTop: 0 }}>
              <Tooltip title={t('ui.card.movieCard.likeButton.tooltip')} placement="top" arrow>
                <IconButton size="medium" onClick={handleToggleLike}>
                  {isLiked ? <ThumbUpIcon /> : <ThumbUpOutlinedIcon />}
                </IconButton>
              </Tooltip>
              <Typography variant="button" display="block">
                {convertAmount(movie.likes)}
              </Typography>
              <Tooltip title={t('ui.card.movieCard.dislikeButton.tooltip')} placement="top" arrow>
                <IconButton size="medium" onClick={handleToggleDislike}>
                  {isDisliked ? <ThumbDownIcon /> : <ThumbDownOutlinedIcon/>}
                </IconButton>
              </Tooltip>
              <Typography variant="button" display="block">
                {convertAmount(movie.dislikes)}
              </Typography>
            <Tooltip title={t('ui.card.movieCard.deleteButton.tooltip')} placement="top" arrow>
              <IconButton sx={{ marginLeft: 'auto !important' }} size="medium" onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </CardActions>
        </Card>
      </Popover>
    </Box>
  )
}