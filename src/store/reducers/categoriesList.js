import * as actions from '../actions/index';

const categoriesList = (state = [], action) => {
    let nextState;

    switch(action.type) {
        case actions.SET_ALL_CATEGORIES:
            nextState = action.movies.map(movie => movie.category);
            nextState = [ ...new Set(nextState) ];
            return [ ...nextState ];
        default:
            return state;
    }
}

export default categoriesList;