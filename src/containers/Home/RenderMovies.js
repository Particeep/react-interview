import React,{Component} from 'react';
import Select from 'react-select';
import './home.css'
import MovieCard from '../../components/MovieCard/index';
 /*
       @@ Page options
 */

const pageOptions =[{value:4,label:4},{value:8,label:8},{value:12,label:12},]


class RenderMovies extends Component{
    
    /*
    Intializing
    */ 
    constructor(){
        super()
        this.state={
            filtersApplied:[],
            isFilterApplied:false,
            numberOfcards:12

        }
    }

    /*
       @@ Getting Filtered
    */

    filterChanged = (filters,index) => {
         let checkedFilters=[],counter=0;

         for (let filter of filters){
             let el = document.getElementById(filter);
             if(el.checked)
             {
                 checkedFilters.push(filter)
                 counter++;
             }

         }
         debugger;
        this.setState({
            filtersApplied : checkedFilters,
            isFilterApplied :(counter > 0) ? true : false
        })
        
    }
    

    /*
       @@ Rendering Movies based on number of pages selected and Filters
    */
    renderMovies= () => {
        let { movies, moviesPerPage,likeMovie,deleteMovie,disLikeMovie} = this.props;
        let {filtersApplied, isFilterApplied} =this.state;
            if( !!movies && Array.isArray(movies) && movies.length>0 && moviesPerPage)
            {

                movies = (isFilterApplied) ? movies.filter((movie)=>{
                                             let isExist = filtersApplied.indexOf(movie.category);
                                             if(isExist !== -1){
                                                 return movie
                                             }
                                        }) : movies;
                                        
                let moviesList =  movies.map((movie,index)=> {
                                                         return  ( <MovieCard movie={movie} 
                                                                        key={index}
                                                                        disLikeMovie={disLikeMovie}
                                                                        likeMovie = {likeMovie} 
                                                                        deleteMovie={deleteMovie}
                                                                        />)
                                             }).slice(0,this.state.numberOfcards)
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
    // After Selecting an Option
    
    handleChange = (selectedOption) =>{
        if(!!selectedOption && selectedOption.length>0){
            this.setState({
                filtersApplied:selectedOption.map( item => item.value),
                isFilterApplied:true
            })
        }
        else{
            this.setState({
                filtersApplied:[],
                isFilterApplied:false
            })
        }
    } 

   // Rendering Filters

    renderFilter = () => {
        let { movies} = this.props; 
        let FiltersList = movies.map((movie)=>{
            return  movie.category
        })
        // removing Duplicates
        FiltersList = Array.from(new Set(FiltersList)).map((category)=>{ return ({value:category,label:category})});
        return (
            <div>
                 {/*
                       
                       React Multi Select to Category
                    
                */}
                  <Select
                        isMulti
                        name="categories"
                        options={FiltersList}
                        onChange={this.handleChange}
                        className="basic-multi-select"
                        placeholder="Select Categories"
                    />
            </div>
            
        );

    }

    pagenationChanged = (value) =>{
        this.setState({
            numberOfcards :value.value
        })
    }

    
    render(){
        return(
            <div>
                <div className="filter">
                  {this.renderFilter()}
                  <div>
                    {/*
                       
                       React Multi Select to Choose Number
                    
                    */}
                      <Select
                        isMulti={false}
                        name="pageNumber"
                        options={pageOptions}
                        onChange={this.pagenationChanged}
                        className="basic-multi-select-num"
                        placeholder="Select Number of Cards Per Page"
                    />
                  </div>
                </div>
               
                    

                {this.renderMovies()}
            </div>
        )
        
    }
}

export default RenderMovies;