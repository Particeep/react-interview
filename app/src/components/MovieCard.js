import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import Likes from "./Likes";
import { removeMovie } from "../store/movieSlice";

function MovieCard(props) {
  const { movie } = props;
  const dispatch = useDispatch();
  const [cover, setCover] = useState(null);

  useEffect(() => {
    const fetchMovieImage = async () => {
      const res = await fetch(
        `https://api.unsplash.com/search/photos?query=${movie.title}&client_id=MXcIO_L-2LLoonyfKP6Z-CGmSyOphTWvb-F3caeY72o`
      );
      const images = await res.json();

      if (images.results.length > 0) {
        setCover(images.results[0].urls);
      }
    };

    fetchMovieImage();
  }, [movie.title]);

  const deleteMovie = () => {
    dispatch(removeMovie(movie));
  }
  return (
    <div className="card">
      <FontAwesomeIcon
        icon={faTrash}
        color="#F95738"
        style={{ cursor: "pointer" }}
        onClick={deleteMovie}
      />

      <div className="card-img-container">
        <img
          srcSet={`
            ${cover?.small || null} 480w,
            ${cover?.regular || null} 800w,
          `}
          sizes="(max-width: 768px) 480px,
                  800px"
          src={cover?.small || ""}
          alt={movie.title + " cover"}
        />
      </div>
      <h6 className="card-title">{movie.title}</h6>
      <p className="category">{movie.category}</p>

      <Likes movie={movie} />
    </div>
  );
}

export default MovieCard;
