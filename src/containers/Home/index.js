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
          moviesPerPage: 4
        }
    }

    componentDidMount(){
       // getting Movies, once pages loads
        this.getMovies();
    }

    // Updating User Prefrences

     updateMoviesPerPage = (moviesPerPage)=>{
        this.setState({
            moviesPerPage
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
                <RenderMovies movies={moviesList} moviesPerPage={moviesPerPage} updateMoviesPerPage={this.updateMoviesPerPage}/>
            </div>
        )
    }
}

export default Home;