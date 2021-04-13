import { Col,Image,Row } from 'react-bootstrap';
import {connect} from 'react-redux';
import {deleteMovie,likeMovie,dislikeMovie,cancelLikeMovie,cancelDisLikeMovie} from '../redux/actions/movies'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faThumbsDown,faStar } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as farThumbsUp, faThumbsDown as farThumbsDown,faTrashAlt  } from '@fortawesome/free-regular-svg-icons'


function MovieCard(props) {

   const convert = (value)=>
    {
        let number = value / 1000;
        return number.toFixed(0) + 'k';
    }

    return ( 
     <>

        <Col lg={3} md={4} sm={6} xs={12} className="box">
         <Row>
            <Image className="gradient" src={"/images/"+props.movie.image} fluid />
               
                <div className="movie-item-content">
                    <div className="movie-item-content-top">
                        <div className="movie-delete">
                            <span onClick={()=>{ props.deletemovie(props.movie.id)}}  className="movie-count-time hover-left">
                            <FontAwesomeIcon icon={faTrashAlt}  />
                            </span>
                        </div>
                        
                            <div className="movie-ratting">
                                <span><FontAwesomeIcon icon={faStar} color="#ff1744" />{ (props.movie.likes / (props.movie.likes + props.movie.dislikes)).toFixed(1)*10 }/10</span>
                            </div>
                        
                    </div>
                   
                    <div className="movie-item-content-buttom">
                        <div className="movie-item-title">
                            <span>{props.movie.title}</span>
                        </div>
                    <div className="item-cat">
                            <a href="#category">{props.movie.category}</a>
                    </div>
                    <div className="movie-item-beta">
                        
                        <div className="view-movie">
                            <div className="blck-bg">

                            <span> 
                                {props.moviesLikes.indexOf(props.movie.id) > -1 ? 
                                        (<FontAwesomeIcon className="icon-like" icon={faThumbsUp}  onClick={()=>{ props.cancellikemovie(props.movie.id)}} />):
                                        (<FontAwesomeIcon className="icon-like" icon={farThumbsUp} onClick={()=>{ if (props.moviesDisLikes.indexOf(props.movie.id) > -1 )
                                            {props.canceldislikemovie(props.movie.id); }
                                             props.likemovie(props.movie.id);}} />)
                                } 
                                { props.movie.likes >=1000 ? (convert(props.movie.likes)):(props.movie.likes)}
                            </span>
                            <span>
                       
                                {props.moviesDisLikes.indexOf(props.movie.id) > -1 ? 
                                        (<FontAwesomeIcon className="icon-like"  icon={faThumbsDown} onClick={()=>{ props.canceldislikemovie(props.movie.id)}} />):
                                        (<FontAwesomeIcon className="icon-like" icon={farThumbsDown} onClick={()=>{if (props.moviesLikes.indexOf(props.movie.id) > -1 ){
                                            props.cancellikemovie(props.movie.id);} 
                                            props.dislikemovie(props.movie.id);}} />)
                                }
                                {props.movie.dislikes >=1000 ? (convert(props.movie.dislikes)):(props.movie.dislikes)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </Row>
    </Col>
    </>)
}

const mapStateToProps = state => {
    return {
        movies: state.movies.movies,
        moviesLikes: state.movies.moviesLikes,
        moviesDisLikes: state.movies.moviesDisLikes,
  
    }
  }
const mapDispatchToProps = dispatch => {
    return {
        deletemovie: (id) => dispatch(deleteMovie(id)),
        likemovie: (id) => dispatch(likeMovie(id)),
        dislikemovie: (id) => dispatch(dislikeMovie(id)),
        cancellikemovie: (id) => dispatch(cancelLikeMovie(id)),
        canceldislikemovie: (id) => dispatch(cancelDisLikeMovie(id)),
   }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(MovieCard);

