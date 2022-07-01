import React, {useEffect, useState} from "react";
import {movies$} from "../movies";
import _ from "lodash";
import "./MoviesStyle.scss";
import {MovieCard} from "../Card/MovieCard";
import {InputLabel, MenuItem, Pagination, Select} from "@mui/material";

export interface Movie {
    id: number;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
    src: string;
}

interface Filter {
    [id: string]: Movie;
}

export const Movies = () => {
    const [init, setInit] = useState<boolean>(false);
    const [movies, setMovies] = useState<Array<Movie>>([]);
    const [currentFilter, setCurrentFilter] = useState<string>('');
    const [filters, setFilters] = useState<Array<Filter>>();
    const [nbPerPage, setNbPerPage] = useState<number>(4);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [moviesFiltered, setMoviesFiltered] = useState<Array<Movie>>([]);

    useEffect(() => {
        if (!init) {
            movies$.then((movies) => {
                setMovies(movies);
                setMoviesFiltered(movies)
                setFilters(_.groupBy(movies, (movie: Movie) => movie.category) as unknown as Array<Filter>);
            });
            setInit(true);
        }
    })

    function deleteBtn(id: number) {
        const newMovies = _.filter(movies, (movie: Movie) => !_.isEqual(movie.id, id));
        setMovies(newMovies);
        const newMoviesFiltered = _.filter(moviesFiltered, (movie: Movie) => !_.isEqual(movie.id, id));
        setMoviesFiltered(newMoviesFiltered);
        setFilters(_.groupBy(newMovies, (movie: Movie) => movie.category) as unknown as Array<Filter>)
    }

    function getMoviesFiltered(filter: string) {
        // @ts-ignore
        return _.isEmpty(filter) ? movies : filters[filter];
    }


    function getMoviesToShow() {
        const lastIndex = (currentPage * nbPerPage);
        const firstIndex = lastIndex - nbPerPage;
        return moviesFiltered.slice(firstIndex, lastIndex)
    }

    return (
        <div id="movies">
            <div className="header">
                <InputLabel>Filtrer par catégorie</InputLabel>
                <Select
                    id="filter-movie"
                    value={currentFilter}
                    onChange={(e) => {
                        const none = _.isEqual(e.target.value, "aucun");
                        setCurrentFilter(none ? '' : e.target.value);
                        setMoviesFiltered(getMoviesFiltered(none ? '' : e.target.value));
                    }}
                    style={{width: "200px"}}
                >
                    {_.map(filters, (_, value) =>
                        <MenuItem key={value} value={value}>{value}</MenuItem>
                    )}
                    <MenuItem key={'none'} value={"aucun"}>-</MenuItem>
                </Select>
            </div>
            <div className="body">
                <div className="cards-container">
                    {
                        moviesFiltered && _.map(getMoviesToShow(), (movie: Movie) =>
                            <MovieCard defaultMovie={movie} deleteCallback={(id: number) => deleteBtn(id)} key={movie.id}/>
                        )
                    }
                </div>
                <div className="pagination-container">
                    <Select
                        id="nb-per-page-select"
                        value={nbPerPage}
                        onChange={(e) => {
                            setNbPerPage(e.target.value as number);
                            setCurrentPage(1);
                        }}
                        style={{width: "70px", height: 'fit-content'}}
                    >
                        <MenuItem key={4} value={4}>4</MenuItem>
                        <MenuItem key={8} value={8}>8</MenuItem>
                        <MenuItem key={12} value={12}>12</MenuItem>
                    </Select>
                    <div className="pagination">
                        <Pagination count={Math.ceil(moviesFiltered.length / nbPerPage)}
                                    onChange={(e, page) => setCurrentPage(page)}/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <a href="https://www.flaticon.com/free-icons/like" title="like icons">Like icons created by Freepik -
                    Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/thumbs-down" title="thumbs-down icons">Thumbs-down icons
                    created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">Trash icons created by
                    smalllikeart - Flaticon</a>
            </div>
        </div>
    );
}