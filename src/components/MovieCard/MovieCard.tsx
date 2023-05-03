import React from "react";

import GaugeLikes from "../GaugeLikes/GaugeLikes";
import Button from "../Button/Button";
import ButtonIcon from "../ButtonIcon/ButtonIcon";
import CrossIcon from"../../assets/cross-icon.svg";
import HeartIcon from"../../assets/heart-icon.svg";

import "./MovieCard.scss";

interface MovieCardProps {
  title: string;
  imageSrc?: string;
  likesPourcentage: number;
  isLiked?: boolean;
  link?: string;
  category ?: string;
  handleClickLike?: () => void;
  handleClickRemoveMovie?: () => void;
}

function MovieCard({
  title,
  isLiked,
  likesPourcentage,
  imageSrc,
  category,
  handleClickLike,
  handleClickRemoveMovie
}: MovieCardProps) {

  return (
    <div className="movie-card">
      <img
        className="movie-card__img"
        src={imageSrc || "/movie-pic.jpg"}
        alt={"movie pic"}
      />
        <div className="movie-card__button-like">
        <ButtonIcon srcIcon= { HeartIcon} active={isLiked} handleClick={handleClickLike}/>
        </div>
      <div className="movie-card__button-delete">
        <ButtonIcon srcIcon= {CrossIcon}  handleClick={handleClickRemoveMovie}/>
      </div>
      <div className="movie-card__information-wrapper">

        <span className="movie-card__information-wrapper__category">{category}</span>
        <h2 className="movie-card__information-wrapper__title">{title}</h2>

        <div className="movie-card__information-wrapper__footer">
          <div className="movie-card__information-wrapper__footer__gauge">
            <GaugeLikes
              pourentage={likesPourcentage}
              description="ont aimé ce film"
            />
          </div>

          <div className="movie-card__information-wrapper__footer__button-see">
            <Button label="Regarder" primary />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
