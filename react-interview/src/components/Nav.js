import React, { useState } from 'react';
import { StyledNav } from '../styles/StyledMovies';

import {
    mdiArrowLeftCircleOutline,
     mdiArrowRightCircleOutline
  } from '@mdi/js'
import Icon from '@mdi/react';


function Nav({ category,
    
    onFilterMovies
}) {
    
    const [isOpen, setIsOpen] = useState(false)

    const handleShowListCategory = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    const handleHiddenListCategory = (categoryChoose) => {
        setIsOpen(false)
        
        const filterMovies = category.filter(e => e.category === categoryChoose)
        onFilterMovies(filterMovies)
    }

    const allValue = category && category.map(item=>item.category)
    const uniqueValue = [...new Set(allValue)]

 
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
                        </ul>
                    </div>
                    : undefined
            }

        </StyledNav>
    )
}

export default Nav;