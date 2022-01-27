import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { currentPage, goToPage, maxPage, nextPage, previousPage, updateElementPerPage} from "../../redux/store/paginationSlice";
import { IconChevronLeft, IconChevronRight, IconElementsPerPage } from "../../utils/icon";

const Pagination = () => {
    const page = useAppSelector(currentPage);
    const maxP = useAppSelector(maxPage);
    const dispatch = useAppDispatch();
    return (
        <div className="ma__pagination">
            <div className="ma__pagination__container">
                <div className="ma__elperpage">
                    <div className="ma__elperpage__container">
                        <IconElementsPerPage />
                        <select name="" id=""
                        onChange={(e) => {
                            dispatch(updateElementPerPage(parseInt(e.target.value)));
                            dispatch(goToPage(1));
                        }}>
                            <option value="4">4</option>
                            <option value="8">8</option>
                            <option value="12">12</option>
                        </select>
                    </div>
                </div>
                <div className="ma__pagination__action">
                    <button
                    onClick={() => {
                        dispatch(previousPage());
                    }}><IconChevronLeft /></button>
                    {page !== 1 ?
                        <button 
                        onClick={() => {
                            dispatch(goToPage(1));
                        }} className="ma__pagination__pagebutton">1</button>
                    : null }
                    <button disabled className="ma__pagination__currentPage">{page}</button>
                    {maxP !== page ? 
                        <button 
                        onClick={() => {
                            dispatch(goToPage(maxP));
                        }} className="ma__pagination__pagebutton">{maxP}</button>
                    : null}
                    <button
                    onClick={() => {
                        dispatch(nextPage());
                    }}><IconChevronRight /></button>
                </div>
            </div>
        </div>
    )
}

export default Pagination;