import React, {useEffect, useState} from "react";
import _ from "lodash";
import "./MovieCardStyle.scss";
import {bin, dislike, like} from "../svg";
import {Movie} from "../Movies/Movies";

const VOTE = {LIKED: "LIKED", DISLIKED: "DISLIKED", NONE: "NONE"};

interface Props {
    defaultMovie: Movie;
    deleteCallback: Function;
    likingCallback: Function;
}
export const MovieCard = (props: Props) => {
    const { defaultMovie, deleteCallback, likingCallback } = props;
    const [movie, setMovie] = useState<Movie>(defaultMovie);
    const [liked, setLiked] = useState<string>(VOTE.NONE);
    const [likes, setLikes] = useState<number>(movie.likes);
    const [dislikes, setDislikes] = useState<number>(movie.dislikes);

    useEffect(() => {

    })

    function getPercentage(value: number, totValues: number) {
        return Math.ceil((value / totValues) * 100);
    }

    function deleteBtn(id: number) {
        deleteCallback(id);
    }

    function likingBtn(isLiked: boolean, id: number) {
        let newLiked = "";
        const likes = movie.likes;
        const dislikes = movie.dislikes;

        switch (liked) {
            case VOTE.LIKED:
                newLiked = isLiked ? VOTE.NONE : VOTE.DISLIKED;
                movie.likes = likes - 1;
                movie.dislikes = isLiked ? dislikes : dislikes + 1;
                break;
            case VOTE.DISLIKED:
                newLiked = isLiked ? VOTE.LIKED : VOTE.NONE;
                movie.likes = isLiked ? likes + 1 : likes;
                movie.dislikes = dislikes - 1;
                break;
            case VOTE.NONE:
                newLiked = isLiked ? VOTE.LIKED : VOTE.DISLIKED;
                movie.likes = isLiked ? likes + 1 : likes;
                movie.dislikes = !isLiked ? dislikes + 1 : dislikes;
                break;
            default: newLiked = VOTE.NONE;
        }
        setLiked(newLiked);
        setLikes(likes);
        setLikes(dislikes);
        likingCallback(id, likes, dislikes);
    }

    return (
        <div id="card">
                <div className="card-movie" key={movie.id}>
                        <div className="title">{movie.title}</div>
                        <button className="bin-btn" onClick={() => deleteBtn(movie.id)}>
                            <img className="bin-icon" src={bin}/>
                        </button>
                        <div>{movie.category}</div>
                        <button
                            className={`like-btn ${_.isEqual(liked, VOTE.LIKED) ? 'selected' : ''}`}
                            onClick={() => likingBtn(true, movie.id)}>
                            <img className="like-icon" src={like}/>
                            {movie.likes}
                        </button>
                        <button className={`dislike-btn ${_.isEqual(liked, VOTE.DISLIKED) ? 'selected' : ''}`} onClick={() => likingBtn(false, movie.id)}>
                            <img className="dislike-icon" src={dislike}/>
                            {movie.dislikes}
                        </button>
                        <div className="liking-bar">
                            <div className="like-bar"
                                 style={{width: `${getPercentage(movie.likes, (movie.likes + movie.dislikes))}%`}}></div>
                        </div>
                    </div>
        </div>
    );
}