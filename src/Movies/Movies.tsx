import React, {useEffect, useState} from "react";
import {movies$} from "../movies";
import _ from "lodash";
import "./MoviesStyle.scss";
import {MovieCard} from "../Card/MovieCard";

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

export const Movies = () => {
    const [init, setInit] = useState<boolean>(false);
    const [movies, setMovies] = useState<Array<Movie>>([]);

    useEffect(() => {
        if (!init) {
            movies$.then((movies) => {
                setMovies(movies);
            });
            setInit(true);
        }
    })

    function deleteBtn(id: number) {
        const newMovies = _.filter(movies, (movie: Movie) => !_.isEqual(movie.id, id));
        setMovies(newMovies);
    }

    return (
        <div id="movies">
            <div className="cards-container">
                {
                    movies && _.map(movies, (movie: Movie) =>
                        <MovieCard defaultMovie={movie} deleteCallback={(id: number) => deleteBtn(id)}
                                   likingCallback={(id: number, likes: number, dislikes: number) => {
                                   }}/>
                    )
                }
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