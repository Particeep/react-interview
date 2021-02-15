import { Container, Row, Col } from 'shards-react';
import MovieCard from './MovieCard';

const MoviesList = ({
    movies, 
    deleteMovie, 
    addLike, 
    deleteLike,
    addDislike,
    deleteDislike
}) => {

    const cardList = movies.map((movie, index) => {
        return (
            <Col key={ index }>
                <MovieCard 
                    movieCardKey={ index } 
                    movie={ movie } 
                    deleteMovie={deleteMovie} 
                    addLike={addLike}
                    deleteLike={deleteLike}
                    addDislike={addDislike}
                    deleteDislike={deleteDislike} 
                />
            </Col>
        );
    });

    return (
        <Container id='movies'>
            <Row>
                { cardList }
            </Row>
        </Container>
    );
}

export default MoviesList;