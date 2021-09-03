import React, { useCallback, useEffect, useState } from 'react';
import {movies$ } from "../components/Movies"
import { StyledGrid, StyledGridContent, StyledPage } from '../styles/StyledMovies';
import likes from "../assets/icons8-j'aime-ça-50.png"
import { Button, ToggleButton, ToggleButtonGroup } from "ui-neumorphism"
import Icon from '@mdi/react'
import {
    mdiThumbUpOutline,
    mdiThumbDownOutline
  } from '@mdi/js'
import Nav from '../components/Nav';
import { connect, useDispatch, useSelector } from 'react-redux';
import { initialMovies, UPDATE_MOVIE_ACTION } from '../reducers/MoviesReducer';
import { MoviesSelector } from '../reducers/MoviesSelector';
import { allMovieAction, deleteMovieAction, filterMovieAction, toggleDislikeMovieAction, toggleLikeMovieAction } from '../reducers/MoviesActions';
import MovieList from '../components/MoviesList';


function Home() {
    
    useEffect(() => {
        refresh()
    }, [])

    const refresh = () => {
        movies$.then(data => dispatch(allMovieAction(data)))
    }

    const movies = useSelector(MoviesSelector)
    const dispatch = useDispatch()

    const onToggle = useCallback((movie) => {
        dispatch(toggleLikeMovieAction(movie))
    }, [])

    const onToggleDislike = useCallback((movie) => {
        dispatch(toggleDislikeMovieAction(movie))
    }, [])

    const onDelete = useCallback((movie) => {
        dispatch(deleteMovieAction(movie))
    }, [])

    const onFilterMovies = useCallback((movie) => {
        dispatch(filterMovieAction(movie))
    }, [])
    

    return (
        <>
            <Nav
                category={movies}
                onFilterMovies={onFilterMovies}
            />
            <StyledPage>
                <div className="alignGrid">
        
                    <StyledGrid>
                    <StyledGridContent>
                        {
                                movies.map(movie => <MovieList movie={movie} onToggle={onToggle} key={movie.id} onDelete={onDelete} onToggleDislike={onToggleDislike}/>)
                        }
                    </StyledGridContent>
                    </StyledGrid>
                </div>
            </StyledPage>
        </>    
    )
}

export default Home;
