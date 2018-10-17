import React,{Component} from 'react';
import './home.css'
import MovieCard from '../../components/MovieCard/index';
class RenderMovies extends Component{
  
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
    renderFilter = () => {
        let { movies} = this.props; 
        let FiltersList = movies.map((movie)=>{
                return movie.category
        })
        let Filter ="No Filters";
        // removing Duplicates
        FiltersList = Array.from(new Set(FiltersList));
        if(!!FiltersList && FiltersList.length>0){
            Filter=FiltersList.map((filter,index)=>{
                    return (
                        <div className="filter-item">
                            <input type="checkbox" key={index} id={index} value={filter}/>
                            <label for={index}> {filter} </label> 
                         </div>
                    )
            })
        }
        return Filter;

    }

    render(){
        return(
            <div>
                <div className="filter">
                  {this.renderFilter()}
                  <div className="drop-down-holder">
                      <select>
                          <option>4</option>
                          <option>8</option>
                          <option>12</option>
                      </select>
                  </div>
                </div>
                {this.renderMovies()}
            </div>
        )
        
    }
}

export default RenderMovies;