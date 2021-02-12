import { Card, CardBody, CardImg } from 'shards-react';

const MovieCard = ({ movie, movieCardKey }) => {
    return (
        <Card key={ movieCardKey }>
            <CardImg top src='https://www.avoir-alire.com/local/cache-vignettes/L240xH351/arton38265-dfc96.jpg?1578256957' />
            <CardBody>
                <div className='movie-caption'>
                    <h6>{ movie.title }</h6>
                    <span className='movie-category'>{ movie.category }</span>
                </div>
            </CardBody>
        </Card>
    )
}

export default MovieCard;