import * as actions from '../actions/index';

const pageNumbers = (state = [], action) => {
    let nextState = [];

    switch(action.type) {
        case actions.SET_PAGE_NUMBERS:
            for (let i = 1; i <= Math.ceil(action.moviesNumber / action.moviesPerPage); i++) {
                nextState.push(i);
            }
            return nextState;
        default:
            return state;
    }
}

export default pageNumbers;