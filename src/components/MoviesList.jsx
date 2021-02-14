import { Container, Row, Col } from 'shards-react';
import MovieCard from './MovieCard';

const MoviesList = ({movies, deleteMovie }) => {
    const cardList = movies.map((movie, index) => {
        return (
            <Col key={ index }>
                <MovieCard movieCardKey={ index } movie={ movie } deleteMovie={deleteMovie} />
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