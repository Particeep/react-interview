//React libraries
import {useDispatch} from "react-redux";

//Redux
import {dislikeMovie, likeMovie, removeMovie} from "../../../redux/movies/movieSlice";

//Typescript type
import {AppDispatch} from "../../../store";

type Props = {
    movieId: string;
}

const MovieActions = ({movieId}: Props) => {
    //Use dispatch
    const dispatch = useDispatch<AppDispatch>();

    return(
        <div className="flex justify-between">
            <div className="flex row gap-4">
                <div className="rounded-full bg-green-700 p-2 items-center flex cursor-pointer zoom-in" onClick={() => dispatch(likeMovie(movieId))}>
                    <img src="/like.svg" className="h-3 sm:h-6" alt="Like"/>
                </div>
                <div className="rounded-full bg-red-700 p-2 items-center flex cursor-pointer zoom-in" onClick={() => dispatch(dislikeMovie(movieId))}>
                    <img src="/dislike.svg" className="h-3 sm:h-6" alt="Dislike"/>
                </div>
            </div>

            <div className="rounded-full bg-blue-700 p-2 items-center flex cursor-pointer zoom-in" onClick={() => dispatch(removeMovie(movieId))}>
                <img src="/delete.svg" className="h-3 sm:h-6" alt="Delete"/>
            </div>
        </div>
    );
}

export default MovieActions;