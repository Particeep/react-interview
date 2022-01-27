import { useAppSelector } from "../../redux/hooks";
import { filteredMoviesList } from "../../redux/store/moviesSlice";
import { currentPage, elementPerPage } from "../../redux/store/paginationSlice";
import MovieCard from "../MovieCard";

const MoviesList = () => {
    const elPerPage = useAppSelector(elementPerPage);
    const curPage = useAppSelector(currentPage);
    const filteredMovies = useAppSelector(filteredMoviesList);
    return (
        <div className="ma__movieslist">
            {filteredMovies.map((movie, index) => {
                return (
                    <>
                        { ( index >= (elPerPage * (curPage-1) ) && index < elPerPage * (curPage) ) ?
                            <MovieCard key={movie.id} movieData={movie} />
                        : <span key={movie.id}></span> }
                    </>
                )
            })}
        </div>
    )
}

export default MoviesList;