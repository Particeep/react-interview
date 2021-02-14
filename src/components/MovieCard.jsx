import { Card, CardBody, CardImg, Progress } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import toggleElement from '../utils/toggleElement';
import isElementActive from '../utils/isElementActive';
import getPercent from '../utils/getPercent';

const MovieCard = ({ movieCardKey, movie, deleteMovie }) => {
    console.log('FN', deleteMovie)

    const handleLike = (e, movie) => {
        toggleElement(e.target.parentNode);
        if (isElementActive(e.target.parentNode))
            ++movie.likes;
        else
            --movie.likes;
    }

    // const handleDislike = (e) => {
    //     toggleElement(e.target.parentNode);
    //     if (isElementActive(e.target.parentNode))
    //         addDislike()
    //     else
    //         deleteDislike();
    // }

    return (
        <Card key={ movieCardKey }>
            <CardImg top src='https://www.avoir-alire.com/local/cache-vignettes/L240xH351/arton38265-dfc96.jpg?1578256957' />
            <CardBody>
                <div className='movie-caption'>
                    <div className='likes-bar'>
                        <span onClick={e => handleLike(e, movie)}>
                            <FontAwesomeIcon icon={faThumbsUp} className='like-icon' />
                        </span>
                        <Progress multi>
                            <Progress bar value={getPercent(movie.likes, movie.likes + movie.dislikes)} className='likes' />
                            <Progress bar value={getPercent(movie.dislikes, movie.dislikes + movie.likes)} theme='secondary' className= 'dislikes' />
                        </Progress>
                        <span onClick={e => handleLike(e)}>
                            <FontAwesomeIcon icon={faThumbsDown} className='dislike-icon' />
                        </span>
                    </div>
                    <h6>{ movie.title }</h6>
                    <span className='movie-category'>{ movie.category }</span>
                    <div className='trash-can' onClick={() => deleteMovie(movie)}><FontAwesomeIcon icon={faTrashAlt}/></div>
                </div>
            </CardBody>
        </Card>
    )
}

export default MovieCard;