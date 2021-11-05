import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FilterListIcon from '@mui/icons-material/FilterList'
import { MultiSelect } from '../../../components/ui/select/MultiSelect'

import { useAppDispatch, useAppSelector } from '../../../redux/reducers'
import { filterMovies, selectMovieFilter, selectMovies } from '../../../redux/reducers/movie'

export const MovieFilter = function (props) {
  const dispatch = useAppDispatch()
  const { t } = useTranslation()

  const movies = useAppSelector(selectMovies)
  const filter = useAppSelector(selectMovieFilter)

  const [open, setOpen] = useState(false);
  const [selectedCategoryOptions, setSelectedCategoryOptions] = useState((filter.categories || []).map(category => ({
    value: category,
    label: category
  })))

  const categorieOptions = useMemo(() => {
    const categories = [...new Map(movies.map(movie => [movie.category, movie.category])).values()]
    return categories.map((category) => ({
      value: category,
      label: category
    }))
  }, [movies])

  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleFilter = () => {
    dispatch(filterMovies({
      categories: selectedCategoryOptions.map(opt => opt.value)
    }))
    setOpen(false)
  }

  const handleSelectCategories = (selectedOptions) => {
    setSelectedCategoryOptions(selectedOptions)
  }

  useEffect(() => {
    const categoryOptionValues = categorieOptions.map(opt => opt.value)
    const disappearedCategories = filter.categories.filter(category => !categoryOptionValues.includes(category))
    if (categorieOptions.length && disappearedCategories.length) {
      const remainingSelectedCategories = filter.categories.filter(category => !disappearedCategories.includes(category))
      setSelectedCategoryOptions(remainingSelectedCategories.map(category => ({
        value: category,
        label: category
      })))
      dispatch(filterMovies({
        categories: remainingSelectedCategories
      }))
    }
  }, [dispatch, categorieOptions, filter.categories])

  return (
    <div>
      <Button color="info" startIcon={<FilterListIcon />} variant="contained" onClick={handleClickOpen}>
        {t('page.movie.filterButton.label')}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: { overflowY: 'visible' }
        }}
      >
        <DialogTitle>{t('page.movie.filterDialog.title')}</DialogTitle>
        <DialogContent sx={{ overflowY: 'visible' }}>
          <MultiSelect
            value={selectedCategoryOptions}
            onSelect={handleSelectCategories}
            options={categorieOptions}
            placeholder={t('page.movie.filterDialog.selectCategories.placeholder')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{t('common.button.cancel.label')}</Button>
          <Button onClick={handleFilter}>{t('common.button.submit.label')}</Button>
        </DialogActions>
      </Dialog>
    </div>

  )
}