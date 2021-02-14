import * as actions from '../actions/index';

const moviesList = (state = [], action) => {
    let nextState;

    switch(action.type) {
        case actions.ADD_MOVIES:
            nextState = [ ...state, ...action.movies ];
            return nextState;
        case actions.DELETE_MOVIE:
            let index = state.indexOf(action.movie);
            nextState = [ ...state ].splice(index, 1);
            return nextState;
        case actions.FILTER_MOVIES:
            nextState = action.movies.filter(movie => action.categories.includes(movie.category));
            return nextState;
        default:
            return state;
    }
}

export default moviesList;