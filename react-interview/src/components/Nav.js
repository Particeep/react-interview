import React, { useState } from 'react';
import { StyledNav } from '../styles/StyledMovies';

import {
    mdiArrowLeftCircleOutline,
     mdiArrowRightCircleOutline
  } from '@mdi/js'
import Icon from '@mdi/react';


function Nav({ onFilterMovies, initialMovies, movies}) {
    
    const [isOpen, setIsOpen] = useState(false)

    const handleShowListCategory = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleHiddenListCategory = (categoryChoose) => {
        setIsOpen(false)
        
        const filterMovies = movies.filter(e => e.category === categoryChoose)
        onFilterMovies(filterMovies)
    }

    const allValue = movies && movies.map(item=>item.category)
    const uniqueValue = [...new Set(allValue)]

    const handleAllMovies = () => {
        onFilterMovies(initialMovies)
    }

 
    return (
        <StyledNav>
  
            <div className="filter" >
                <span>Filter by category</span>
                {
                    isOpen ?
                        <Icon path={mdiArrowLeftCircleOutline} size={0.9} onClick={handleClose} />
                        :
                        <Icon path={mdiArrowRightCircleOutline} size={0.9} onClick={handleShowListCategory} />
                }
            </div>
            {
                isOpen ?
                    
                    <div className="listCategory">
                        <ul>
                            {
                                uniqueValue.map((category, index) => (
                                    <li onClick={()=>handleHiddenListCategory(category)} key={index} >{ category}</li>
                                ))
                            }
                            <li onClick={handleAllMovies}>Voir tout</li>
                        </ul>
                    </div>
                    : undefined
            }

        </StyledNav>
    )
}

export default Nav;