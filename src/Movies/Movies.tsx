import React, {useEffect, useState} from "react";
import {movies$} from "../movies";
import _, {filter} from "lodash";
import "./MoviesStyle.scss";
import {MovieCard} from "../Card/MovieCard";
import {InputLabel, MenuItem, Pagination, Select} from "@mui/material";

export interface Movie {
    id: number;
    title: string;
    category: string;
    likes: number;
    dislikes: number;
}

interface LikedMovie {
    id: number;
    liked: string;
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
    }

    function getMoviesFiltered(filter: string) {
       // @ts-ignore
        return _.isEmpty(filter) ? movies : filters[filter];
    }


    function getMoviesToShow() {
        const lastIndex = (currentPage * nbPerPage);
        const firstIndex = lastIndex - nbPerPage;
        console.log(lastIndex, firstIndex, moviesFiltered, moviesFiltered.slice(firstIndex, lastIndex))
        return moviesFiltered.slice(firstIndex, lastIndex)
    }

    console.log(filters, currentFilter)

    return (
        <div id="movies">
            <header>
                <InputLabel>Filtrer</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={currentFilter}
                    onChange={(e) => {
                        const none = _.isEqual(e.target.value, "aucun");
                        setCurrentFilter(none ? '' : e.target.value);
                        setMoviesFiltered(getMoviesFiltered(none ? '' : e.target.value));
                    }}
                    style={{width: "200px"}}
                >
                    {_.map(filters, (_, value) =>
                        <MenuItem value={value}>{value}</MenuItem>
                    )}
                    <MenuItem value={"aucun"}>-</MenuItem>
                </Select>
            </header>
            <div className="cards-container">
                {
                    _.map(getMoviesToShow(), (movie: Movie) =>
                        <MovieCard defaultMovie={movie} deleteCallback={(id: number) => deleteBtn(id)}
                                   likingCallback={(id: number, likes: number, dislikes: number) => {
                                   }}/>
                    )
                }
                <Select
                    id="nb-per-page-select"
                    value={nbPerPage}
                    onChange={(e) => setNbPerPage( e.target.value as number)}
                    style={{width: "70px", height: 'fit-content'}}
                >
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                </Select>
                <Pagination count={Math.ceil(moviesFiltered.length / nbPerPage)} onChange={(e, page) => setCurrentPage(page)}/>
            </div>
            <footer>
                <a href="https://www.flaticon.com/free-icons/bad" title="bad icons">Bad icons created by vectorspoint -
                    Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/like" title="like icons">Like icons created by Pixel
                    perfect - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">Trash icons created by
                    smalllikeart - Flaticon</a>
            </footer>
        </div>
    );
}