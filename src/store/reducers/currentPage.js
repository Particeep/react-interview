import * as actions from '../actions/index';

const currentPage = (state = 1, action) => {
    let nextState;

    switch(action.type) {
        case actions.PAGINATE:
            nextState = action.pageNumber;
            return nextState;
        case actions.NEXT_PAGE:
            nextState = state === action.lastPage ? state : state + 1;
            return nextState;
        case actions.PREV_PAGE:
            nextState = state === 1 ? state : state - 1;
            return nextState;
        default:
            return state;
    }
}

export default currentPage;