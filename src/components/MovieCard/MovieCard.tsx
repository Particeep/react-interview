import React from "react";
import { Movie } from "../../app/types";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import { useAppDispatch } from "../../app/hooks";

import styles from "./MovieCard.module.css";
import { deleteMovie } from "../../features/movies/moviesSlice";

export function MovieCard({ movie }: { movie: Movie }) {
  const dispatch = useAppDispatch();
  return (
    <Card key={movie.id} sx={{ width: "400px", margin: "10px" }}>
      <CardHeader
        title={movie.title}
        action={
          <IconButton
            aria-label="settings"
            onClick={() => dispatch(deleteMovie(movie.id))}
          >
            <ClearRoundedIcon />
          </IconButton>
        }
      />
      {/* <CardContent>{movie.description}</CardContent> */}
      <CardActions>
        <IconButton aria-label="dislike">
          {movie.dislikes}
          <ThumbDownAltRoundedIcon />
        </IconButton>
        <IconButton aria-label="like">
          {movie.likes}
          <ThumbUpRoundedIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
