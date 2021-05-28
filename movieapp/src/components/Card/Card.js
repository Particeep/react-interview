import React, { useState } from 'react';
import likeInvalidate from '../../images/likeInvalidate.png';
import dislikeInvalidate from '../../images/dislikeInvalidate.png';
import trash from '../../images/trash.png';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteMovie, handleLike } from '../../redux/actions/movies';
import { getFilteredMovies } from '../../selectors/movies';

const ProgressBar = props => {
    const { bgcolor ,completed } = props;
    
    const containerStyles = {
        height: 14,
        width: '90%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: '0 auto'
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        transition: 'width 1s ease-in-out'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
    
      return(
       <div style={containerStyles}>
          <div style={fillerStyles}>
            <span style={labelStyles}>{`${completed}%`}</span>
          </div>
        </div>
      );
}
  
const Card = ({ id, title, category,likes, dislikes, image, bgcolor }) => {

  
    const ratio = Math.floor(likes / (likes + dislikes) * 100);
    const dispatch = useDispatch();
    const [like, setLike ] = useState(likes);
    const [dislike, setDislike] = useState(dislikes);
    
      return (
        <>
        <div className="movie">
            <div className="movie__header">
            <img alt="" src={image} className="image"/>
            </div>
            <div className="movie__info">
            <ProgressBar bgcolor={bgcolor} completed={ratio}/>
            <div className="movie__info-links">
            <div className="movie__info-validate">
            <a href="!#" onClick={() => dispatch()}><img alt="" src={likeInvalidate} className="likevalidate"/></a>
            <div> <a>{likes}</a></div>
            </div>
            <div className="movie__info-dislike">
            <a href="!#"><img alt="" src={dislikeInvalidate} className="dislikevalidate"/></a>
            <div>{dislikes}</div>
            </div>
            </div>
            <div className="movie__info-content">
              <span style={{background: bgcolor}}>{category}</span>
              <h1>{title}</h1>
              <a href="!#" onClick={() => dispatch(deleteMovie(id))}><img alt="bj" src={trash} className="trash"/></a>
            </div>
            </div>
        </div> 
        </>     
      );
  }

  Card.propTypes = {
    movie: PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      likes: PropTypes.number,
      dislikes: PropTypes.number,
      bgcolor: PropTypes.string
    })
  };


export default Card;
