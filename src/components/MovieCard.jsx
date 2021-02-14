import { Card, CardBody, CardImg, Progress } from 'shards-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie, movieCardKey }) => {
    const getLikesPercent = (movie) => {
        let total = movie.likes + movie.dislikes;
        return (movie.likes * 100) / total;
    }
    
    const getDislikesPercent = (movie) => {
        let total = movie.likes + movie.dislikes;
        return (movie.dislikes * 100) / total;
    }

    return (
        <Card key={ movieCardKey }>
            <CardImg top src='https://www.avoir-alire.com/local/cache-vignettes/L240xH351/arton38265-dfc96.jpg?1578256957' />
            <CardBody>
                <div className='movie-caption'>
                    <div className='likes-bar'>
                        <FontAwesomeIcon 
                            icon={faThumbsUp} 
                            className='like-icon' 
                            onClick=''
                        />
                        <Progress multi>
                            <Progress bar value={getLikesPercent(movie)} className='likes' />
                            <Progress bar value={getDislikesPercent(movie)} theme='secondary' className= 'dislikes' />
                        </Progress>
                        <FontAwesomeIcon icon={faThumbsDown} className='dislike-icon' />
                    </div>
                    <h6>{ movie.title }</h6>
                    <span className='movie-category'>{ movie.category }</span>
                    <div className='trash-can'><FontAwesomeIcon icon={faTrashAlt}/></div>
                </div>
            </CardBody>
        </Card>
    )
}

export default MovieCard;