import { Container, Row, Col } from 'shards-react';
import MovieCard from './MovieCard';

const MoviesList = (movies) => {
    const cardList = movies.map((data, key) => {
        return (
            <Col>
                <MovieCard movie={ data } key={ key }/>
            </Col>
        )
    })

    return (
        <Container>
            <Row>
                { cardList }
            </Row>
        </Container>
    )
}

export default MoviesList;