import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IMovie } from "../../redux/store/i.moviesSlice";
import { addDisLike, addLike, dislikedList, likedList, removeDisLike, removeLike } from "../../redux/store/likedSlice";
import { removeMovie } from "../../redux/store/moviesSlice";

const MovieCard = ({movieData}: {movieData:IMovie}) => {
    const [additionnalCss, additionnalCssSet]= useState("");
    const dispatch = useAppDispatch();
    const likeds = useAppSelector(likedList);
    const disLikeds = useAppSelector(dislikedList);
    const isLiked = likeds.includes(movieData.id);
    const isDisliked = disLikeds.includes(movieData.id);
    let likes = isLiked ? 1 : 0;
    let dislikes = isDisliked ? 1 : 0;
    likes = likes + movieData.likes;
    dislikes = dislikes + movieData.dislikes;
    let percentage = likes*100/ (likes+dislikes);
    return (
        <div className={`ma__moviecard ${additionnalCss}`}>
            <img src={movieData.img} alt="" />
            <div className="ma__moviecard__info">
                <h3>{movieData.title}</h3>
                <span className="ma__moviecard__catname">{movieData.category}</span>
                <button
                onClick={() => {
                    additionnalCssSet('ma__animation_disappear');
                    setTimeout(() => {
                        dispatch(removeMovie(movieData));
                    }, 200);
                }}>🗑️</button>
            </div>
            <div className="ma__moviecard__info__bottom">
                <div className="ma__progressbar__container">
                    <div style={{width:`${percentage}%`}} className="ma__progressbar"></div>
                </div>
                <div className="ma__like__container">
                    <button className={`${isLiked? "ma__liked":""}`}
                    onClick={()=> {
                        if (isLiked){
                            dispatch(removeLike(movieData));
                        }else {
                            dispatch(addLike(movieData));
                        }
                    }}>👍</button>
                    <button className={`${isDisliked? "ma__disliked":""}`}
                    onClick={()=> {
                        if (isDisliked) {
                            dispatch(removeDisLike(movieData));
                        }else {
                            dispatch(addDisLike(movieData));
                        }
                    }}>👎</button>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;