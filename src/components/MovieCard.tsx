import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MyProps {
  id: string;
  title: string;
  category: string;
  likes: number;
  dislikes: number;
  isLiked: boolean;
  isDisliked: boolean;
  updateLike: Function;
  updateDislike: Function;
  deleteCard: Function;
}

interface MyState {}

class MovieCard extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.getLikes = this.getLikes.bind(this);
  }

  getLikes(likes: number) {
    return likes > 1000 ? Math.round(likes / 1000) + "K" : likes;
  }

  render() {
    const likes = this.getLikes(this.props.likes);
    const dislikes = this.getLikes(this.props.dislikes);
    const total = this.props.likes + this.props.dislikes;
    const likeWidth = (this.props.likes / total) * 100;
    const dislikeWidth = (this.props.dislikes / total) * 100;

    return (
      <div className="movie-card">
        <div id="card-infos">
          <h2>{this.props.title}</h2>
          <p>{this.props.category}</p>
          <button
            className="delete-button"
            onClick={() => this.props.deleteCard(this.props.id)}
          >
            Delete
          </button>
        </div>
        <div id="like-infos">
          <div id="like-count">
            <p>{likes}</p>
            <p>{dislikes}</p>
          </div>
          <div id="like-bar">
            <FontAwesomeIcon
              className="thumbs-up"
              icon="thumbs-up"
              style={{ fontSize: this.props.isLiked ? "20px" : "15px" }}
              onClick={() =>
                this.props.updateLike(
                  this.props.id,
                  this.props.isLiked ? false : true
                )
              }
            />
            <div id="likes" style={{ width: likeWidth }} />
            <div id="dislikes" style={{ width: dislikeWidth }} />
            <FontAwesomeIcon
              className="thumbs-down"
              icon="thumbs-down"
              style={{ fontSize: this.props.isDisliked ? "20px" : "15px" }}
              onClick={() =>
                this.props.updateDislike(
                  this.props.id,
                  this.props.isDisliked ? false : true
                )
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
