import { Container, Row, Col } from 'shards-react';
import MovieCard from './MovieCard';

const MoviesList = ({ movies }) => {
    console.log(movies);
    const cardList = movies.map((movie, index) => {
        return (
            <Col key={ index }>
                <MovieCard movie={ movie } movieCardKey={ index }/>
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