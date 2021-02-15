import { Container, Row, Col } from 'shards-react';
import MovieCard from './MovieCard';

const MoviesList = ({
    movies,
    moviesPerPage,
    currentPage,
    deleteMovie, 
    addLike, 
    deleteLike,
    addDislike,
    deleteDislike
}) => {

    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
    const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

    const cardList = currentMovies.map((movie, index) => {
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