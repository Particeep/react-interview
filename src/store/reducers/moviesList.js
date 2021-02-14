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
            console.log('NEXT: ' + nextState);
            return nextState;
        case actions.FILTER_MOVIES:
            nextState = state.filter(movie => action.categories.indexOf(movie.category) !== -1)
            return nextState;
        default:
            return state;
    }
}

export default moviesList;