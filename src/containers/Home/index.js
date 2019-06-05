import React,{Component} from 'react';
import './home.css'
import {movies$} from '../../movies';
import RenderMovies from './RenderMovies';

class Home extends Component{
    
    constructor(){
        
        super();

        //setting up Intial State with No Movies
        this.state={
          moviesList:[],
          moviesPerPage: 4,
        }
    }

    componentDidMount(){
       // getting Movies, once pages loads
        this.getMovies();
    }

    // Updating User Prefrences

     nbMovies = (moviesPerPage)=>{
        this.setState({
            moviesPerPage
        })
    }
    
    // Liked the Movie

    likeMovie = (id,isDisliked,flag)=>{
        let newMovieList=this.state.moviesList.map((movie)=>{
            if(id===movie.id){
                debugger
                if(flag){
                    movie.likes +=1;
                    if(isDisliked){
                        movie.dislikes -=1;
                    }
                }
                else{
                    movie.likes -=1;
                }
            }
              return movie;
            })

            this.setState({
                moviesList:newMovieList
            })
    }

    // Dislike the Movie

    disLikeMovie = (id,isLiked,flag) =>{
      let newMovieList=this.state.moviesList.map((movie)=>{
                if(id===movie.id){
                    if(flag){
                        movie.dislikes +=1;
                        if(isLiked){
                            movie.likes -=1;
                        }
                    }
                    else{
                        movie.dislikes -=1;
                    }
                    
                    return movie;
                }
                else{
                    return movie;
                }
      })
      this.setState({
        moviesList:newMovieList
      })
    }

    // delete movies from the list

    deleteMovie = (id) =>{
        let newMovieList = this.state.moviesList.filter( (item) =>{ return item.id!==id});
        debugger;
        this.setState({
            moviesList:newMovieList
        })
    }

    // get movies from the Promise
    
    getMovies = async()=>{
        try{
            let movies = await movies$;
            if(!!movies){
                this.updateMovies(movies)
            }
         }
        catch(err){
                console.log(err)
         }
    }
        
    //update state when it receives movies from the async
      
    updateMovies = (movies) =>{
        this.setState({
             moviesList:movies
        })
    }
    
    render(){
        let { moviesList, moviesPerPage } = this.state;
        return(
            <div className="home-layout"> 
                <RenderMovies deleteMovie={this.deleteMovie} 
                               movies={moviesList} 
                               moviesPerPage={moviesPerPage} 
                               nbMovies={this.nbMovies}
                               disLikeMovie={this.disLikeMovie}
                               likeMovie = {this.likeMovie}
                               />
            </div>
        )
    }
}

export default Home;