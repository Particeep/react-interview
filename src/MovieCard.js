import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardMedia,
  IconButton,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import placeholder from "./technology.png";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import CloseIcon from "@mui/icons-material/Close";

function MovieCard({ movie, likeMovie, dislikeMovie, deleteMovie }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const DialogDelete = ({ deleteMovie }) => {
    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'>
        <DialogTitle id='alert-dialog-title'>{"Delete a movie"}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            Are you sure to delete this movie?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Cancel
          </Button>
          <Button onClick={() => deleteMovie(movie.id)}>Delete</Button>
        </DialogActions>
      </Dialog>
    );
  };

  const handleLike = () => {
    console.log("movie : ", movie.id, movie.likes);
    likeMovie(movie.id);
  };

  const handleDislike = () => {
    dislikeMovie(movie.id);
  };

  const handleDelete = () => {
    handleClickOpen();
  };

  return (
    <Card
      sx={{
        boxShadow: "0px 4px 10px rgba(21, 57, 45, 0.1)",
        margin: "20px",
        width: "18rem",
        position: "relative",
      }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "16px",
        }}>
        <Typography variant='h6' sx={{ fontWeight: "bold", margin: "0.6rem" }}>
          {movie.title}
        </Typography>
        <Typography variant='body2'>{movie.category}</Typography>
        <CardMedia
          sx={{ height: "4rem", width: "4rem", margin: "1.4rem" }}
          component='img'
          image={placeholder}
          alt={movie.title}
        />
        <IconButton
          sx={{ position: "absolute", top: "5px", right: "5px" }}
          onClick={handleDelete}>
          <CloseIcon />
        </IconButton>
        <CardActionArea
          sx={{ display: "flex" }}
          disableSpacing
          disableTouchRipple>
          <Typography>{movie.likes}</Typography>
          <IconButton onClick={handleLike}>
            <ThumbUpOutlinedIcon />
          </IconButton>
          <Typography>{movie.dislikes}</Typography>
          <IconButton onClick={handleDislike}>
            <ThumbDownOffAltOutlinedIcon />
          </IconButton>
        </CardActionArea>
      </Box>
      <DialogDelete deleteMovie={deleteMovie} />
    </Card>
  );
}

export default MovieCard;
