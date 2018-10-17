import React,{Component} from 'react';
import './home.css'
import MovieCard from '../../components/MovieCard/index';
class RenderMovies extends Component{
    constructor(){
        super();
        this.state={
            isFilterOpen:false
        }
    }
    toggleFilter = () =>{
        this.setState((prev)=>{
            return ({
                isFilterOpen:!prev.isFilterOpen
            })
        })
    }
    renderMovies= () => {
    
        let { movies, moviesPerPage,likeMovie,deleteMovie,disLikeMovie} = this.props;

            if( !!movies && Array.isArray(movies) && movies.length>0 && moviesPerPage)
            {
                let moviesList = movies.map((movie,index)=>{
                    return (<MovieCard movie={movie} 
                                       key={index}
                                       disLikeMovie={disLikeMovie}
                                       likeMovie = {likeMovie} 
                                       deleteMovie={deleteMovie}
                                       />)
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
                <div className="filter">
                   { this.state.isFilterOpen && <div className="filter-options">
                                                   <input type="checkbox" name="vehicle1" value="Bike"/> I have a bike<br/>
                                                 </div>
                   }
                   {
                       !this.state.isFilterOpen &&  <i onClick={this.toggleFilter} className="fa fa-filter"></i>
                   }
                   
                   
                </div>
                {this.renderMovies()}
            </div>
        )
        
    }
}

export default RenderMovies;