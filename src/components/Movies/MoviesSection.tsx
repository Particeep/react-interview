//React libraries
import {useEffect, useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";

//Components
import MovieFilters from "./Filters/MovieFilters";
import MoviesList from "../MoviesList";

//Data
import {movies$} from "../../data/movies";

//Redux
import {selectMovies, setMovies} from "../../redux/movies/movieSlice";

//Typescript type
import {AppDispatch} from "../../store";

const MoviesSection = () => {
    //Use dispatch
    const dispatch = useDispatch<AppDispatch>();

    //Use selector
    const {categories, currentPage, itemsPerPage, movies} = useSelector(selectMovies);

    useEffect(() => {
        movies$.then((resolvedMovies) => dispatch(setMovies(resolvedMovies)));
    }, [dispatch]);

    const filteredMovies = useMemo(() => {
        return movies.filter(movie => {
            // If length is equals to zero, consider every category
            if(categories.length === 0){
                return true;
            }

            return categories.includes(movie.category)
        });
    }, [categories, movies]);

    const moviesToDisplay = filteredMovies.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    return(
        <div className="p-8 space-y-6">
            <div>
                <MovieFilters movies={filteredMovies}/>
            </div>

            <MoviesList movies={moviesToDisplay}/>
        </div>
    );
}

export default MoviesSection;