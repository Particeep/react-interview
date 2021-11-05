import React, { useCallback, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { MovieFilter } from './components/MovieFilter'
import { MovieCard } from '../../components/ui/card/MovieCard'
import { Pagination } from '../../components/ui/pagination/Pagination'

import { useAppDispatch, useAppSelector } from '../../redux/reducers'
import {
  changeItemsPerPage,
  changePage,
  deleteMovie,
  dislikeMovie,
  likeMovie,
  listMovies,
  selectDislikedMovieIds,
  selectLikedMovieIds,
  selectMovieFilter,
  selectMoviePagination,
  selectMovies,
  undislikeMovie,
  unlikeMovie
} from '../../redux/reducers/movie'

export const Movie = () => {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const movies = useAppSelector(selectMovies)
  const likeMovieIds = useAppSelector(selectLikedMovieIds)
  const dislikedMovieIds = useAppSelector(selectDislikedMovieIds)
  const filter = useAppSelector(selectMovieFilter)
  const { currentPage, itemsPerPage } = useAppSelector(selectMoviePagination)

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const categoriesFilter = filter.categories
      return !categoriesFilter.length || categoriesFilter.includes(movie.category)
    })
  }, [movies, filter])

  const paginatedMovies = useMemo(() => {
    return filteredMovies.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  }, [filteredMovies, currentPage, itemsPerPage])

  const handleChangePage = (value) => {
    dispatch(changePage(value))
  }

  const handleChangeItemsPerPage = (value) => {
    dispatch(changeItemsPerPage(value))
  }

  const handleLikeMovie = useCallback((movieId) => {
    dispatch(likeMovie(movieId))
  }, [dispatch])

  const handleUnlikeMovie = useCallback((movieId) => {
    dispatch(unlikeMovie(movieId))
  }, [dispatch])

  const handleDislikeMovie = useCallback((movieId) => {
    dispatch(dislikeMovie(movieId))
  }, [dispatch])

  const handleUndislikeMovie = useCallback((movieId) => {
    dispatch(undislikeMovie(movieId))
  }, [dispatch])

  const handleDeleteMovie = useCallback((movieId) => {
    dispatch(deleteMovie(movieId))
  }, [dispatch])

  useEffect(() => {
    dispatch(listMovies())
  }, [dispatch])

  return (
    <Stack spacing={3}>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography component="h2" variant="h3" sx={{ color: '#e5e5e5', fontSize: '24px' }}>{t('page.movie.title')}</Typography>
        <MovieFilter />
      </Box>
      {paginatedMovies.length && (
        <Box component="div" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Pagination
            totalItems={filteredMovies.length}
            currentPage={currentPage}
            onChangePage={handleChangePage}
            onChangeItemsPerPage={handleChangeItemsPerPage}
          />
        </Box>
      )}
      <Box display="grid" gridTemplateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={2}>
        {paginatedMovies.map((movie) => (
          <MovieCard
            isLiked={likeMovieIds.includes(movie.id)}
            isDisliked={dislikedMovieIds.includes(movie.id)}
            key={movie.id}
            movie={movie}
            onLikeMovie={handleLikeMovie}
            onUnlikeMovie={handleUnlikeMovie}
            onDislikeMovie={handleDislikeMovie}
            onUndislikeMovie={handleUndislikeMovie}
            onDeleteMovie={handleDeleteMovie}
          />
        ))}
      </Box>
    </Stack>
  )
}