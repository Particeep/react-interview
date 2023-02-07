//Components
import MovieCard from "./Movies/Card/MovieCard";

//Typescript type
import {Movie} from "../data/movies";

type Props = {
    movies: Movie[]
}
const MoviesList = ({movies}: Props) => (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
    </div>
);

export default MoviesList;