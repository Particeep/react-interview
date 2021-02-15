import * as actions from '../actions/index';

const moviesPerPage = (state = 12, action) => {
    switch(action.type) {
        case actions.SET_MOVIES_PER_PAGE:
            return action.number;
        default:
            return state;
    }
}

export default moviesPerPage;