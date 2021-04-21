import MovieType from "../types/movie";
import "./Card.css";

import { MdThumbUp } from 'react-icons/md';
import { MdThumbDown } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';

const iconSize = 16;

function Card(props: any){

    const { 
        id, 
        title, 
        category, 
        categoryColor, 
        likes, 
        dislikes, 
        deleteItem, 
        like, 
        dislike, 
        setFilter
    } = props;

    return (
        <article className="movie-card">
            <header>
                <strong>
                    { title }
                </strong>
                <span 
                    className="delete-button"
                    onClick={() => deleteItem(id)}>
                    <MdDelete></MdDelete>
                </span>
            </header>

            <hr/>

            <span className="movie-category" style={{backgroundColor: categoryColor}}>{category}</span>

            <hr/>

            <div className="movie-votes">
                <span onClick={() => dislike(id)} className="movie-dislikes">
                    <MdThumbDown size={iconSize}/>
                    ({dislikes})
                </span>
                <span onClick={() => like(id)} className="movie-likes">
                    <MdThumbUp size={iconSize}/>
                    ({likes})
                </span>
            </div>
        </article>
    )
}

export default Card;