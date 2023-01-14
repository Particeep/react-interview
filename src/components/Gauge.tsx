import React, { useState } from "react";
import { Movie } from "../app/types";
import { Box, IconButton, LinearProgress } from "@mui/material";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ThumbDownAltRoundedIcon from "@mui/icons-material/ThumbDownAltRounded";
import { useAppDispatch } from "../app/hooks";
import { Stack } from "@mui/material";

import {
  addDislike,
  addLike,
  removeDislike,
  removeLike,
} from "../features/movies/moviesSlice";

export function Gauge({ movie }: { movie: Movie }) {
  type Vote = "like" | "dislike" | "none";
  const [vote, setVote] = useState<Vote>("none");

  const dispatch = useAppDispatch();
  const progress = (movie.likes / (movie.likes + movie.dislikes)) * 100;

  const like = () => {
    if (vote === "none") {
      dispatch(addLike(movie.id));
      setVote("like");
    } else if (vote === "like") {
      dispatch(removeLike(movie.id));
      setVote("none");
    } else {
      dispatch(removeDislike(movie.id));
      dispatch(addLike(movie.id));
      setVote("like");
    }
  };

  const dislike = () => {
    if (vote === "none") {
      dispatch(addDislike(movie.id));
      setVote("dislike");
    } else if (vote === "dislike") {
      dispatch(removeDislike(movie.id));
      setVote("none");
    } else {
      dispatch(removeLike(movie.id));
      dispatch(addDislike(movie.id));
      setVote("dislike");
    }
  };

  return (
    <Box sx={{ width: "200px" }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{ justifyContent: "space-around" }}
      >
        <IconButton aria-label="like" color="primary" onClick={like}>
          {movie.likes}
          <ThumbUpRoundedIcon sx={{ marginLeft: "5px" }} />
        </IconButton>
        <IconButton aria-label="dislike" color="error" onClick={dislike}>
          {movie.dislikes}
          <ThumbDownAltRoundedIcon sx={{ marginLeft: "5px" }} />
        </IconButton>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ backgroundColor: "#dcafaf" }}
      />
    </Box>
  );
}
