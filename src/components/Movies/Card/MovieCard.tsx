// Typescript type
import {Movie} from "../../../data/movies";
import Badge from "../../Badge/Badge";
import ProgressBar from "../../ProgressBar/ProgressBar";
import {getPercentageRatio} from "../../../utils/movies.utils";
import MovieActions from "../Actions/MovieActions";

type Props = {
    movie: Movie;
}
const MovieCard = ({movie: {category, cover, dislikes, id, likes, title}}: Props) => {

    const likesDislikesCount = dislikes + likes;
    const likesPercentage = getPercentageRatio(likesDislikesCount, likes);
    const dislikesPercentage = getPercentageRatio(likesDislikesCount, dislikes);

    return(
        <div className="flex items-center border rounded-lg shadow flex-row max-w-xl border-gray-700 bg-gray-900">
            <img className="object-cover h:1/2 w-1/3 rounded-none rounded-l-lg" src={cover} alt="movieCover"/>
            <div className="p-4 w-2/3">
                <div className="flex flex-col">
                    <h5 className="mb-2 text-lg sm:text-xl xl:text-2xl font-bold text-white">{title}</h5>

                    <div>
                        <Badge label={category} />
                    </div>

                    <div className="mt-6 space-y-2">
                        <span>Likes / Dislikes: </span>
                        <ProgressBar dislikesPercentage={dislikesPercentage} likesPercentage={likesPercentage}/>
                    </div>

                    <div className="mt-6">
                        <MovieActions movieId={id}/>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieCard;