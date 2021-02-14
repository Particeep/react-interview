import * as actions from '../actions/index';

const allMoviesList = (state = [], action) => {
    switch(action.type) {
        case actions.SET_ALL_MOVIES:
            return [ ...action.movies ];
        default:
            return state;
    }
}

export default allMoviesList;