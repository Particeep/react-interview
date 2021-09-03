import { mdiArrowLeftCircleOutline, mdiArrowRightCircleOutline } from '@mdi/js';
import Icon from '@mdi/react';
import React, { useState } from 'react';
import { StyledGrid, StyledGridContent, StyledPage } from '../styles/StyledMovies';
import { StyledPagination } from '../styles/StyledPagination';
import MovieList from './MoviesList';

function Pagination({ data, dataLimit, onDelete, onToggle, onToggleDislike }) {
    const pages = Math.round(data.length / dataLimit);
    const [currentPage, setCurrentPage] = useState(1);
  
    function goToNextPage() {
        setCurrentPage((page) => page + 1);
    }
  
    function goToPreviousPage() {
        setCurrentPage((page) => page - 1);
    }
  
  
    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);     
    };

    console.log(currentPage,pages, data.length, dataLimit)
  
  
    return (
        <StyledPagination>
    
            {/* show the posts, 10 posts at a time */}
            <StyledPage>
                <div className="alignGrid">
                    <StyledGrid>
                        <StyledGridContent>
                            {getPaginatedData().map((movie, idx) => (
                                <MovieList
                                    movie={movie}
                                    onToggle={onToggle}
                                    key={idx}
                                    onDelete={onDelete}
                                    onToggleDislike={onToggleDislike}
                                />
                            ))}     
                        </StyledGridContent>
                    </StyledGrid>
                </div>
            </StyledPage>

            <div className="pagination">

                <button
                    onClick={goToPreviousPage}
                    className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
                >
                    <Icon path={mdiArrowLeftCircleOutline} size={0.9} />
                    <span>previous</span>
                </button>
            
                <button
                    onClick={goToNextPage}
                    className={`next ${currentPage === pages ? 'disabled' : ''}`}
                >
                    <span>next</span>
                    <Icon path={mdiArrowRightCircleOutline} size={0.9} />
                </button>
            </div>
        </StyledPagination>
    );
  }

export default Pagination;