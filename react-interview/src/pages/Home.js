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
import Pagination from '../components/Pagination';
import { StyledForm } from '../styles/StyledForm';


function Home() {
    const [initialMovies, setInitialMovies] = useState([])
    
    useEffect(() => {
        refresh()
    }, [])

    const refresh = () => {
        movies$.then(data => dispatch(allMovieAction(data)))
        movies$.then(data => setInitialMovies(data))
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

    const [limitDataAppeared, setLimitDataAppeared] = useState(4)
    
    const handleChange = (event) => {
        setLimitDataAppeared(Number(event.target.value))
    }
    

    return (
        <>
            <Nav
                movies={movies}
                initialMovies={initialMovies}
                onFilterMovies={onFilterMovies}
            />
            <StyledForm>
                <form>
                    <label>
                        Choisissez votre type d'affichage :
                        <select value={limitDataAppeared} onChange={handleChange}>
                            <option value={4}>4</option>
                            <option value={8}>8</option>
                            <option value={12}>12</option>
                        </select>
                    </label>
                </form>
            </StyledForm>
            <Pagination
                data={movies}
                onToggle={onToggle}
                onDelete={onDelete}
                onToggleDislike={onToggleDislike}
                dataLimit={limitDataAppeared}
            />
        </>    
    )
}

export default Home;
