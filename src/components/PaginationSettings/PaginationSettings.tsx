import React from 'react'

import Button from '../Button/Button'
import useListMovies from '../../hooks/useListMovies'

import './PaginationSettings.scss'

function PaginationSettings() {
    const listBtnNbPerPage = [4, 8 , 12]
    const {pagination, setNbMoviePerPage}=useListMovies(false)
  return (
    <div className='pagination-settings'>
       <span className='pagination-settings__title' >Afficher par:</span> 
       <div className='pagination-settings__list-btn'>
       {listBtnNbPerPage.map((nbPerPage)=>{

        const isActive = pagination.nbMoviesPerPage === nbPerPage
        const handleClick = () => {
            setNbMoviePerPage(nbPerPage)
        }
        return <Button key={'pagination_setting_'+nbPerPage} label={nbPerPage} active={isActive} handleClick={handleClick} />
       })}
       </div>
    </div>
  )
}

export default PaginationSettings
