import React from 'react';

import Card from './Card';
import styles from './CardList.module.scss';

const CardList = ({ movies }) => {
  return (        
    <div className={styles.listContainer}>
      { 
        movies.map(el => {
          return (
            <Card 
              key={ el.id }
              id={ el.id }
              title={ el.title }
              image={ el.image }
              category={ el.category }
              likes={ el.likes }
              dislikes={ el.dislikes }
              liked={el.liked ? el.liked : null}
              disliked={el.disliked ? el.disliked : null}
            />
          )
        }) 
      }
    </div>
  );
};

export default CardList;