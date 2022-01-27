import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addFilter, currentFiltersList, filtersList, removeFilter } from "../../redux/store/filtersSlice";
import { ICategory } from "../../redux/store/i.filtersSlice";
import { IMovie } from "../../redux/store/i.moviesSlice";
import { moviesList, setFiltered } from "../../redux/store/moviesSlice";
import { elementPerPage, updateMaxPage } from "../../redux/store/paginationSlice";

const Filters = () => {
    const filters = useAppSelector(filtersList);
    const movies = useAppSelector(moviesList);
    const currentFilter = useAppSelector(currentFiltersList);
    const dispatch = useAppDispatch();
    const elPerPage = useAppSelector(elementPerPage);

    useEffect(() => {
        const currentFilterList = currentFilter.map((filter) => filter.name);
        let filteredMovies = movies.filter((movie) => currentFilterList.includes(movie.category));
        filteredMovies = currentFilterList.length === 0 ? movies : filteredMovies; 
        dispatch(setFiltered(filteredMovies));
        dispatch(updateMaxPage(Math.ceil(filteredMovies.length/elPerPage)));
    }, [currentFilter,movies, dispatch, elPerPage])
    return (
        <div className="ma__filters">
            {filters.map((filter) => {
                const notEmpty = movies.filter((item:IMovie) => item.category.indexOf(filter.name) > -1).length > 0;
                const selected = currentFilter.filter((item: ICategory) => item.id.indexOf(filter.id) > -1).length > 0;
                return (
                    <span key={filter.id}>
                    {notEmpty ? 
                        <button  className={`ma__filters__button ${selected?"ma__filters__button-active":""}`}
                        onClick={() => {
                            if (selected){
                                dispatch(removeFilter(filter))
                            }else {
                                dispatch(addFilter(filter))
                            }
                        }}>{filter.name}</button>
                    : null}
                    </span>
                )
            })}  
        </div>
    )
}

export default Filters;