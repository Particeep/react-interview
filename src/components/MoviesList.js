import { Container, Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

const renderMovie = (data) => {

  return (
    
      data.map((movie,index) => {
        return (
         <MovieCard key={index} movie={movie}  />)
      })
 
  );
};


function MoviesList(props) {
     
    return (
      <>
      <Container className="">
        <Row className="justify-content-around ">
           {renderMovie(props.data)}
        </Row>
      </Container>
      
      </>
    );
}

export default MoviesList;