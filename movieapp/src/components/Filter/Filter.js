import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFilterMovie, setCheckboxFilter } from '../../redux/actions/movies';
import { getAllMovies, getAllMoviesCategories } from '../../selectors/movies';


const Filter = () => {
    const movies = useSelector(getAllMovies);
    const moviesCategory = useSelector(getAllMoviesCategories);
    const dispatch = useDispatch();

    const handleFilterCategory = (e) => {
      
        const value = e.target.value;

        if(e.target.checked) {
            dispatch(setCheckboxFilter(value))
            console.log(dispatch(setCheckboxFilter(value)))
        } else {
            dispatch(removeFilterMovie(value))
        }
    }
    const categoryItemsCount = {}
    movies.forEach(movie => {
    categoryItemsCount[movie.category] = categoryItemsCount[movie.category] + 1 || 1;
      })
    return(
        <>
        <div className="container__filter">
        {
           moviesCategory.map((movie, i) => {
            return (
              <div className='filter' key={i} >
                <input type="checkbox" name={movie} id={movie} value={movie} onChange={(e) => handleFilterCategory(e)} />
                <label htmlFor={movie}>{movie} ({categoryItemsCount[movie]})</label>
              </div>
            )
          }) 
        }
        </div>
        </>
    );
}

export default Filter;
