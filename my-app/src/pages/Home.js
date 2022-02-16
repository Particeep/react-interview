import React, { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard/MovieCard";
import "../index.css";
import { movies$ } from "../movies";
import { Pagination } from "antd";

function Home() {
  const [movieData, setMovieData] = useState([]);
  const [total, setTotal] = useState();
  const [page, setPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const [indexOfLastPage, setIndexOfLastPage] = useState(postPerPage * page);
  const [indexOfFirstPage, setIndexOfFirstPage] = useState(
    (page - 1) * postPerPage
  );

  useEffect(() => {
    movies$.then((data) => setMovieData(data), setTotal(movieData.length));
  });

  const currentPosts = movieData.slice(indexOfFirstPage, indexOfLastPage);

  function deleteMovie(id) {
    let clickedMovie = movieData.find((movie) => {
      return movie.id == id;
    });
    let index = movieData.indexOf(clickedMovie);
    movieData.splice(index, 1);

    setMovieData(movieData);
    setTotal(movieData.length);
  }

  function updateLikes(id, newValue) {
    let clickedMovie = movieData.find((movie) => {
      return movie.id == id;
    });
    let index = movieData.indexOf(clickedMovie);
    movieData[index].likes = newValue;
    setMovieData(movieData);
  }

  function updateDislikes(id, newValue) {
    let clickedMovie = movieData.find((movie) => {
      return movie.id == id;
    });
    let index = movieData.indexOf(clickedMovie);
    movieData[index].dislikes = newValue;
    setMovieData(movieData);
  }

  const onShowSizeChange = (current, pageSize) => {
    setPostPerPage(pageSize);
    setMovieData(movieData);
    setTotal(movieData.length);
  };

  return (
    <div
      className="container"
      style={{
        minHeight: "100vh",
        margin: "0",
        flexDirection: "column",
        color: "white",
      }}
    >
      <div
        style={{
          fontWeight: "bold",
          fontSize: "40px",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        My App
      </div>
      <div
        className="cards"
        style={{
          width: "90vw",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-between"
        }}
      >
        {currentPosts.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              category={movie.category}
              likes={movie.likes}
              dislikes={movie.dislikes}
              deleteMovieCallBack={deleteMovie}
              updateLikesCallBack={updateLikes}
              updateDislikesCallBack={updateDislikes}
            />
          );
        })}
      </div>
      <div
        className="footer"
        style={{
          marginTop: "auto",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "space-between",
          paddingBottom: "70px",
        }}
      >
        <Pagination
          onChange={(page, pageSize) => {
            setPage(page);
            setPostPerPage(pageSize);
            setIndexOfLastPage(postPerPage * page);
            setIndexOfFirstPage((page - 1) * postPerPage);
          }}
          pageSize={postPerPage}
          total={total}
          current={page}
          pageSizeOptions={[4, 8, 12]}
          showSizeChanger
          showQuickJumper
          onShowSizeChange={onShowSizeChange}
          pagination={{ alignement: "center" }}
        />
      </div>
    </div>
  );
}

export default Home;
