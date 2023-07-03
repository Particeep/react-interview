import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  fetchMovies,
  likeMovie,
  dislikeMovie,
  filterByCategory,
  deleteMovie,
} from "./redux/actions/moviesActions";
import {
  Box,
  Typography,
  Card,
  Grid,
  CardMedia,
  IconButton,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import placeholder from "./technology.png";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import CloseIcon from "@mui/icons-material/Close";
import Pagination from "@mui/lab/Pagination";
import CategoryFilter from "./CategoryFilter";
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

function MovieList({
  movies,
  currentPage,
  moviesPerPage,
  likeMovie,
  dislikeMovie,
  deleteMovie,
}) {
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;
  const currentMovies = movies.slice(startIndex, endIndex);

  return (
    <Grid container>
      {currentMovies.map((movie) => (
        <Grid item xs={6} md={4} lg={4} key={movie.id}>
          <MovieCard
            movie={movie}
            likeMovie={likeMovie}
            dislikeMovie={dislikeMovie}
            deleteMovie={deleteMovie}
          />
        </Grid>
      ))}
    </Grid>
  );
}

function App({
  movies,
  filteredMovies,
  fetchMovies,
  likeMovie,
  dislikeMovie,
  filterByCategory,
  deleteMovie,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [moviesPerPage, setMoviesPerPage] = useState(8);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const handleLike = (movieId) => {
    likeMovie(movieId);
  };

  const handleDislike = (movieId) => {
    dislikeMovie(movieId);
  };

  const handleFilterChange = (selectedCategory) => {
    let filteredMovies;

    if (selectedCategory) {
      filteredMovies = movies.filter(
        (movie) => movie.category === selectedCategory
      );
    } else {
      filteredMovies = movies;
    }

    filterByCategory(filteredMovies);
    setCurrentPage(1);
  };

  const handleMoviesPerPageChange = (event) => {
    const selectedMoviesPerPage = parseInt(event.target.value);
    setMoviesPerPage(selectedMoviesPerPage);
    setCurrentPage(1);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const totalMovies = filteredMovies.length;
  const totalPages = Math.ceil(totalMovies / moviesPerPage);

  return (
    <div className='App'>
      <Typography variant='h2' align='center'>
        Movies App
      </Typography>
      <CategoryFilter
        filteredMovies={filteredMovies}
        handleFilterChange={handleFilterChange}
      />
      <Box display='flex' justifyContent='center' mt={2}>
        <FormControl variant='standard' sx={{ ml: 1, minWidth: 120 }}>
          <InputLabel id='movies-per-page-label'>Movies per Page</InputLabel>
          <Select
            labelId='movies-per-page-label'
            id='movies-per-page'
            value={moviesPerPage}
            onChange={handleMoviesPerPageChange}>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={12}>12</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <MovieList
        movies={filteredMovies}
        currentPage={currentPage}
        moviesPerPage={moviesPerPage}
        likeMovie={handleLike}
        dislikeMovie={handleDislike}
        deleteMovie={deleteMovie}
      />
      <Box display='flex' justifyContent='center' mt={4} sx={{ gap: "8px" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          shape='rounded'
        />
      </Box>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies.movies,
    filteredMovies: state.movies.filteredMovies,
  };
};

const mapDispatchToProps = {
  fetchMovies,
  likeMovie,
  dislikeMovie,
  filterByCategory,
  deleteMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
