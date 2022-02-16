import React, { useState } from "react";
import propTypes from "prop-types";
import {
  Card,
  CardTitle,
  CardCategory,
  Cardlikes,
  CardDislikes,
} from "../MovieCard/MoviesCardSC";
import { Button } from "../ButtonElements";
import { AiFillLike, AiFillDislike } from "react-icons/ai";

export const MovieCard = ({
  id,
  title,
  category,
  likes,
  dislikes,
  deleteMovieCallBack,
  updateLikesCallBack,
  updateDislikesCallBack
}) => {
  const [like, setLike] = useState(likes);
  const [dislike, setdislike] = useState(dislikes);
  const [likePressed, setLikePressed] = useState(false);
  const [dislikePressed, setDislikePressed] = useState(false);

  function toggleLike(value) {
    setLikePressed(value);
  }

  function toggledisLike(value) {
    setDislikePressed(value);
  }

  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardCategory>{category}</CardCategory>
      <div
        className="votes"
        style={{
          display: "flex",
          width: "8rem",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <div className="likes" style={{ display: "flex" }}>
          <Cardlikes>{like}</Cardlikes>

          <AiFillLike
            style={{
              color: "green",
              marginTop: "4px",
              marginLeft: "10px",
              width: "20px",
              height: "auto",
            }}
            onClick={() => {
              if (likePressed == false && dislikePressed == false) {
                toggleLike(true);
                console.log(likePressed);
                setLike(like + 1);
                updateLikesCallBack(id, like + 1);
              }
              if (likePressed == false && dislikePressed == true) {
                toggleLike(true);
                toggledisLike(false);
                setLike(like + 1);
                updateLikesCallBack(id, like + 1);
                setdislike(dislike - 1);
                updateDislikesCallBack(id, dislike - 1);
              }
              
            }}
          />
        </div>
        <div className="dislikes" style={{ display: "flex" }}>
          <CardDislikes>{dislike}</CardDislikes>
          <AiFillDislike
            style={{
              color: "red",
              marginTop: "4px",
              marginLeft: "10px",
              width: "20px",
              height: "auto",
            }}
            onClick={() => {
              if(dislikePressed == false && likePressed == false){
                toggledisLike(true)
                setdislike ( dislike + 1)
                updateDislikesCallBack (id, dislike + 1)
              }

              if (dislikePressed == false && likePressed == true){
                toggledisLike(true)
                setdislike (dislike + 1)
                updateDislikesCallBack (id, dislike + 1)
                toggleLike(false)
                setLike (like - 1)
                updateDislikesCallBack(id, like - 1)
              }
            }}
          />
        </div>
      </div>
      <Button
        style={{
          width: "10rem",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "white",
        }}
        smooth={true}
        duration={500}
        spy={true}
        exact="true"
        offset={-80}
        primary="true"
        dark="true"
        onClick={() => {
          deleteMovieCallBack(id);
        }}
      >
        Supprimer
      </Button>
    </Card>
  );
};

MovieCard.propTypes = {
  id: propTypes.string,
  title: propTypes.string,
  category: propTypes.string,
  likes: propTypes.number,
  dislikes: propTypes.number,
};
