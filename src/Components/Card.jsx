import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Card = ({ movie, onDelete }) => {
    const [isLiked, updateLike] = useState(false);
    const handleLike = () => {
        !isLiked ? updateLike(true) : updateLike(false);
    };
    const ratio = Math.round((100 * movie.likes) / (movie.likes + movie.dislikes))
    return (
        <div className='card mb-4 card-bg'>
            <div className='card-body'>
                <div className='card-title movie-Title'>{movie.title}</div>
                <div className="card-text">Category: <span className='movie-Category'>{movie.category}</span></div>
                <div class="ratio">
                    <span style={{width: `${ratio}%`}}></span>
                </div>
                <p>Like: {movie.likes}</p>
                <p>Dislike: {movie.dislikes}</p>
                <div>
                    <span>
                        <button
                            className={`btn btn-lg btn-outline-warning likeBtn ${isLiked ? "active" : ""}`}
                            onClick={handleLike}
                            data-toggle="tooltip" data-html="true" title="You liked this movie"
                        >
                            <FontAwesomeIcon
                                icon={faThumbsUp}
                                color='blue'
                                style={{ paddingRight: 5 }}
                            />
                        </button>
                        <button
                            className={`btn btn-lg btn-outline-info dislikeBtn ${!isLiked ? "active" : ""}`}
                            onClick={handleLike}
                            data-toggle="tooltip" data-html="true" title="You disliked this movie :("
                        >
                            <FontAwesomeIcon
                                icon={faThumbsDown}
                                color='red'
                                style={{ paddingLeft: 5 }}
                            />
                        </button>
                    </span>
                    <span className='deletebtn'><button
                        onClick={() => onDelete(movie)}
                        data-toggle="tooltip" data-html="true" title="Delete this movie?"
                        className="btn btn-lg btn-outline-light bg-secondary"
                    >
                        <FontAwesomeIcon
                            icon={faTrashAlt}
                            color='gold'
                        />            </button></span>
                </div>
            </div>
        </div>
    )
}

export default Card;