import React, { useState } from "react";
import { Movie } from "../app/types";
import { Card, CardHeader, CardActions, IconButton } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { useAppDispatch } from "../app/hooks";

import { deleteMovie } from "../features/movies/moviesSlice";
import { Chip } from "@mui/material";
import { Gauge } from "./Gauge";
import ConfirmDeleteModale from "./ConfirmDeleteModale";

export function MovieCard({ movie }: { movie: Movie }) {
  const dispatch = useAppDispatch();
  const [openConfirmMOdale, setOpenConfirmModal] = useState(false);

  const handleDelete = () => {
    dispatch(deleteMovie(movie.id));
    setOpenConfirmModal(false);
  };

  return (
    <Card key={movie.id} sx={{ width: "350px", margin: "10px" }}>
      <CardHeader
        title={movie.title}
        titleTypographyProps={{
          textAlign: "left",
          fontWeight: 800,
          fontSize: 20,
          color: "#002920",
        }}
        action={
          <IconButton
            aria-label="settings"
            onClick={() => setOpenConfirmModal(true)}
          >
            <ClearRoundedIcon />
          </IconButton>
        }
      />
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Chip label={movie.category} variant="outlined" color="primary" />
        <Gauge movie={movie} />
      </CardActions>
      <ConfirmDeleteModale
        isOpen={openConfirmMOdale}
        onConfirm={handleDelete}
        onCancel={() => setOpenConfirmModal(false)}
        movieTitle={movie.title}
      />
    </Card>
  );
}
