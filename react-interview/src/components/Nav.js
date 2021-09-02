import React, { useState } from 'react';
import { StyledNav } from '../styles/StyledMovies';

import {
    mdiArrowLeftCircleOutline,
     mdiArrowRightCircleOutline
  } from '@mdi/js'
import Icon from '@mdi/react';


function Nav({ category, setMovies }) {
    
    const [isOpen, setIsOpen] = useState(false)

    const handleShowListCategory = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }

    

    const handleHiddenListCategory = (categoryChoose) => {
        setIsOpen(false)
        console.log(categoryChoose)
        
        const filterMovies = category.map(item => item.filter(e => e.category === categoryChoose))
        setMovies({allMovies: [filterMovies]})
    }

    // const allValue = category && category.map(item=>item.map(e=>e.category))
    // const unique = [...new Set(allValue)]
    // console.log("unique", unique.map(e=>e.map(i=>i!==i)))
 
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
                                category.map(item => item.map(e => (

                                    <li onClick={()=>handleHiddenListCategory(e.category)}>{ e.category}</li>
                                )))
                            }
                        </ul>
                    </div>
                    : undefined
            }

        </StyledNav>
    )
}

export default Nav;