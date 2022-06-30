import React, {useEffect, useState} from "react";
import {movies$} from "../movies";
import _ from "lodash";
import "./MoviesStyle.scss";
import {bin, dislike, like} from "../svg";

interface Movie {
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

const VOTE = {LIKED: "LIKED", DISLIKED: "DISLIKED", NONE: "NONE"};

export const Movies = () => {
    const [init, setInit] = useState<boolean>(false);
    const [movies, setMovies] = useState<Array<Movie>>([]);
    const [liked, setLiked] = useState<Array<LikedMovie>>([]);

    useEffect(() => {
        console.log("RENDER : ", liked, movies)
        if (!init) {
            movies$.then((movies) => {
                setMovies(movies);
                setLiked(_.map(movies, (movie: Movie) => {
                    return {id: movie.id, liked: VOTE.NONE}
                }));
            });
            setInit(true);
        }
    })

    function getPercentage(value: number, totValues: number) {
        return Math.ceil((value / totValues) * 100);
    }

    function deleteBtn(id: number) {
        const newMovies = _.filter(movies, (movie: Movie) => !_.isEqual(movie.id, id));
        setMovies(newMovies);
    }

    function likingBtn(isLiked: boolean, id: number) {
        const movieIndex = _.findIndex(movies, (movie: Movie) => _.isEqual(movie.id, id)!!);
        let movie = _.find(movies, (movie: Movie) => _.isEqual(movie.id, id))!!;
        const likes = movie!!.likes;
        const dislikes = movie!!.dislikes;


        const likedMovieIndex = _.findIndex(liked, (movie: LikedMovie) => _.isEqual(movie.id, id))!!;
        let likedMovie = _.find(liked, (movie: LikedMovie) => _.isEqual(movie.id, id))!!;
        console.log(likedMovie)
        switch (likedMovie.liked) {
            case VOTE.LIKED:
                likedMovie.liked = isLiked ? VOTE.NONE : VOTE.DISLIKED;
                movie.likes = likes - 1;
                movie.dislikes = isLiked ? dislikes : dislikes + 1;
                break;
            case VOTE.DISLIKED:
                likedMovie.liked = isLiked ? VOTE.LIKED : VOTE.NONE;
                movie.likes = isLiked ? likes + 1 : likes;
                movie.dislikes = dislikes - 1;
                break;
            case VOTE.NONE:
                likedMovie.liked = isLiked ? VOTE.LIKED : VOTE.DISLIKED;
                movie.likes = isLiked ? likes + 1 : likes;
                movie.dislikes = !isLiked ? dislikes + 1 : dislikes;
                break;
        }

        console.log(likedMovie, liked[likedMovieIndex], liked)
        console.log(movie)
        liked[likedMovieIndex] = likedMovie;
        setLiked(liked);

        movies[movieIndex] = movie;
        setMovies(movies);
    }

    return (
        <div id="movies">
            <div className="cards-container">
                {
                    movies && _.map(movies, (movie: Movie) => <div className="card-movie" key={movie.id}>
                        <div className="title">{movie.title}</div>
                        <button className="bin-btn" onClick={() => deleteBtn(movie.id)}>
                            <img className="bin-icon" src={bin}/>
                        </button>
                        <div>{movie.category}</div>
                        <button
                            className={`like-btn`}
                            onClick={() => likingBtn(true, movie.id)}>
                            <img className="like-icon" src={like}/>
                            {movie.likes}
                        </button>
                        <button className="dislike-btn" onClick={() => likingBtn(false, movie.id)}>
                            <img className="dislike-icon" src={dislike}/>
                            {movie.dislikes}
                        </button>
                        <div className="liking-bar">
                            <div className="like-bar"
                                 style={{width: `${getPercentage(movie.likes, (movie.likes + movie.dislikes))}%`}}></div>
                        </div>
                    </div>)
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