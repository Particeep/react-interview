import React from 'react';
import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { like, dislike, removeMovie } from '../store/mainSlice';

const Card = ({ id, title, image, category, likes, dislikes, liked, disliked }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.card}>
      <p className={styles.title}>{ title }</p>
      <div className={styles.imageContainer}>
        <img src={ `/images/${image}.jpg` } alt={ title } />
      </div>
      <p className={styles.category}>{ category }</p>
      <div className={styles.thumbs}>
        <i 
          onClick={ ()=> dispatch(like(id)) } 
          className={`${liked ? 'fas fa-thumbs-up' : 'far fa-thumbs-up'}`}
          style={{ color: liked ? 'green' : 'rgb(154, 154, 154)' }}
        ></i>
        <i 
          onClick={ ()=> dispatch(dislike(id)) } 
          className={`${disliked ? 'fas fa-thumbs-down' : 'far fa-thumbs-down'}`}
          style={{ color: disliked ? 'red' : 'rgb(154, 154, 154)' }}
        ></i>
      </div>
      <div className={styles.bar}>
        <div 
          style={{ 
            width: `${(likes / (likes + dislikes)) * 300}px`
          }} 
          className={styles.insideBar}/>
      </div>
      <div 
        className={styles.button}
        onClick={ () => dispatch(removeMovie(id)) }
      >
        <button>Supprimer</button>
      </div>
    </div>
  );
};

export default Card;