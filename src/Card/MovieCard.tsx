import React, {useState} from "react";
import _ from "lodash";
import "./MovieCardStyle.scss";
import {bin, dislike, dislikeSelected, like, likeSelected} from "../svg";
import {Movie} from "../Movies/Movies";

const VOTE = {LIKED: "LIKED", DISLIKED: "DISLIKED", NONE: "NONE"};

interface Props {
    defaultMovie: Movie;
    deleteCallback: Function;
}

export const MovieCard = (props: Props) => {
    const {defaultMovie, deleteCallback} = props;
    const [movie] = useState<Movie>(defaultMovie);
    const [liked, setLiked] = useState<string>(VOTE.NONE);

    function getPercentage(value: number, totValues: number) {
        return Math.ceil((value / totValues) * 100);
    }

    function deleteBtn(id: number) {
        deleteCallback(id);
    }

    function likingBtn(isLiked: boolean) {
        let newLiked: string;
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
            default:
                newLiked = VOTE.NONE;
        }
        setLiked(newLiked);
    }

    return (
        <div id="card">
            <div className="card-movie">
                <div className="header-card">
                    <button className="bin-btn" onClick={() => deleteBtn(movie.id)}>
                        <img className="bin-icon" src={bin} alt=""/>
                    </button>
                    <img className="film-img" src={movie.src} alt=""/>
                </div>
                <div className="body-card">
                    <div className="title">{movie.title}</div>
                    <label>Catégorie</label>
                    <div>{movie.category}</div>
                </div>
                <div className="liking-container">
                    <div className="liking-btn-container">
                        <button
                            onClick={() => likingBtn(true)}>
                            <img className="like-icon" src={_.isEqual(liked, VOTE.LIKED) ? likeSelected : like} alt=""/>
                            {movie.likes}
                        </button>
                        <button onClick={() => likingBtn(false)}>
                            <img className="dislike-icon"
                                 src={_.isEqual(liked, VOTE.DISLIKED) ? dislikeSelected : dislike}
                                 alt=""/>
                            {movie.dislikes}
                        </button>
                    </div>
                    <div className="liking-bar">
                        <div className="like-bar"
                             style={{width: `${getPercentage(movie.likes, (movie.likes + movie.dislikes))}%`}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}