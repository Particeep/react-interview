//React libraries
import {useDispatch, useSelector} from "react-redux";

//Redux
import {selectMovies, setCategories, setCurrentPage, setItemsPerPage} from "../../../redux/movies/movieSlice";

//Selectors
import CategorySelector from "../../Selectors/CategorySelector";
import ItemPerPageSelector from "../../Selectors/ItemPerPageSelector";

//Typescript type
import {AppDispatch} from "../../../store";
import {Movie} from "../../../data/movies";

type Props = {
    movies: Movie[];
}

const MovieFilters = ({movies}: Props) => {
    //Use dispatch
    const dispatch = useDispatch<AppDispatch>();

    //Use selector
    const {categories, currentPage, itemsPerPage} = useSelector(selectMovies);

    const pageCount = Math.ceil(movies.length / itemsPerPage);

    const isPreviousPageButtonDisabled = currentPage === 0;
    const isNextPageButtonDisabled = (currentPage + 1) === pageCount;

    return(
        <div className="flex flex-col space-y-6">
            <div>
                <h5 className="mb-2 text-lg sm:text-xl xl:text-2xl font-bold text-white">Category filter: </h5>
                <CategorySelector name="categories" onChange={(values) => dispatch(setCategories(values))} value={categories}/>
            </div>

            <div className="flex justify-between">
                <div>
                    <ItemPerPageSelector name="itemsPerPage" onChange={(value) => dispatch(setItemsPerPage(value))} value={itemsPerPage}/>
                </div>

                <div className="flex flex-row gap-3 items-center">
                    <span>Page {currentPage + 1} / {pageCount}</span>

                    <button className="rounded-full bg-blue-700 p-2 items-center flex cursor-pointer zoom-in" disabled={isPreviousPageButtonDisabled} onClick={() => dispatch(setCurrentPage(currentPage - 1))}>
                        <img src="/previous.svg" className="h-3 sm:h-6" alt="Previous page"/>
                    </button>
                    <button className="rounded-full bg-blue-700 p-2 items-center flex cursor-pointer zoom-in" disabled={isNextPageButtonDisabled} onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                        <img src="/next.svg" className="h-3 sm:h-6" alt="Next page"/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MovieFilters;