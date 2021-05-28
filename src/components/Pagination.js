import React, { useEffect, useState } from "react";
import MoviesList from './MoviesList'
import {connect} from 'react-redux';
import { Col, Row,Container,Form,Pagination,Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faThList } from '@fortawesome/free-solid-svg-icons';

function PaginationComponent(props) {

  const [moviesdata, setMoviesdata]=  useState(props.movies);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(4);
  const [pageNumberLimit, setpageNumberLimit] = useState(2);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(moviesdata.length / itemsPerPage); i++) {
    pages.push(i);
  }

  useEffect(() => {
      setMoviesdata(props.movies)
  },[props.movies]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = moviesdata.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
       
        <Pagination.Item key={number}
          id={number}
          onClick={handleClick}
          className={currentPage === number ? "active" : null}>{number}
        </Pagination.Item>
      );
    } else {
      return null;
    }
  });


  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };
 

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <Pagination.Ellipsis onClick={handleNextbtn }/> ;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <Pagination.Ellipsis onClick={handlePrevbtn}/>;
  }

  let list = [];
  props.movies.forEach(element => {
    list.push(element.category);
  });
  list = [...new Set(list)]

  const handleSelectCategory= (e)=>{
      if(e.target.value === "all"){
        setMoviesdata(props.movies);
      }else{
        setMoviesdata(props.movies.filter(movie => movie.category === e.target.value))
      }
  }

  const handleSelect=(e)=>{
    setitemsPerPage(e);
    setmaxPageNumberLimit(e);

  }
 
  return (
    <> 
       
        <Container className="header-movies">
          <Row>
            <Col lg={6} md={6} sm={6} xs={0} className="movie-text">
              <h2>Les Films du mois</h2>
              <p>Lorem Ipsum is simply dummy text of the printing</p> 
            </Col>

            <Col lg={6} md={6} sm={12} xs={12}>
                  <Row className="select-category">
                        <Col  xs={10} >
                            <Form.Control onChange={handleSelectCategory} as="select">
                              <option value="all">Tous les catégories</option>
                                  {list.map((cat, index) => {
                                      return (<option key={index} value={cat}>{cat}</option>)
                                    })}
                              </Form.Control> 
                        </Col>
                        <Col  xs={2}>
                        <Dropdown onSelect={handleSelect}>
                                  <Dropdown.Toggle className="affichage" menuAlign="right" drop="right" >
                                    <FontAwesomeIcon icon={faThList} /> 
                                  </Dropdown.Toggle>

                                  <Dropdown.Menu>
                                    <Dropdown.Item eventKey="4">4</Dropdown.Item>
                                    <Dropdown.Item eventKey="8">8</Dropdown.Item>
                                    <Dropdown.Item eventKey="12">12</Dropdown.Item>
                                  </Dropdown.Menu>
                                </Dropdown>
                        </Col>
                  </Row>
             
          
              </Col>
            </Row>
        </Container>

        <MoviesList data={currentItems} />

        <Container className="pagination-movie">
              <div className="div-pagination">
                  <Pagination >
                    <Pagination.Prev  onClick={handlePrevbtn}disabled={currentPage === pages[0] ? true : false}/>
                      {pageDecrementBtn}
                      {renderPageNumbers}
                      {pageIncrementBtn}
                     <Pagination.Next  onClick={handleNextbtn}disabled={currentPage === pages[pages.length - 1] ? true : false}/>
                  </Pagination>
              </div>
        </Container>
    </>
  );
}
const mapStateToProps = state => {
  return {
      movies: state.movies.movies,

  }
}

export default connect(mapStateToProps,null)(PaginationComponent);

