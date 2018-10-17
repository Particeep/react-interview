import React,{Component} from 'react';
import './home.css'
import MovieCard from '../../components/MovieCard/index';
class RenderMovies extends Component{

    renderMovies= () => {
    
        let { movies, moviesPerPage} = this.props;

            if( !!movies && Array.isArray(movies) && movies.length>0 && moviesPerPage)
            {
                let moviesList = movies.map((movie,index)=>{
                    return (<MovieCard movie={movie} key={index}/>)
                })
                return (
                    <div className="movie-layout">
                            {moviesList}
                    </div>
                )
            }
            else{
                return (
                    <div className="movie-layout">
                         No Movie Right Now !!
                    </div>
                )
            }
       
    }

    render(){
        return(
            <div>
                {this.renderMovies()}
            </div>
        )
        
    }
}

export default RenderMovies;