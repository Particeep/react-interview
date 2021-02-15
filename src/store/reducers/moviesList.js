import * as actions from '../actions/index';

const moviesList = (state = [], action) => {
    let nextState;

    switch(action.type) {
        case actions.ADD_MOVIES:
            nextState = [ ...state, ...action.movies ];
            return nextState;
        case actions.DELETE_MOVIE:
            let index = state.indexOf(action.movie);
            nextState = [ ...state ];
            nextState.splice(index, 1);
            return nextState;
        case actions.FILTER_MOVIES:
            nextState = action.movies.filter(movie => action.categories.includes(movie.category));
            return nextState;
        case actions.ADD_LIKE:
            nextState = [ ...state ];
            nextState = nextState.map(movie => {
                if (movie.title === action.movie.title && movie.id === action.movie.id) {
                    let updatedMovie = { ...movie };
                    ++updatedMovie['likes'];
                    return updatedMovie;
                }
                return movie;
            });
            return nextState;
        case actions.DELETE_LIKE:
            nextState = [ ...state ];
            nextState = nextState.map(movie => {
                if (movie.title === action.movie.title && movie.id === action.movie.id) {
                    let updatedMovie = { ...movie };
                    --updatedMovie['likes'];
                    return updatedMovie;
                }
                return movie;
            });
            return nextState;
        case actions.ADD_DISLIKE:
            nextState = [ ...state ];
            nextState = nextState.map(movie => {
                if (movie.title === action.movie.title && movie.id === action.movie.id) {
                    let updatedMovie = { ...movie };
                    ++updatedMovie['dislikes'];
                    return updatedMovie;
                }
                return movie;
            });
            return nextState;
        case actions.DELETE_DISLIKE:
            nextState = [ ...state ];
            nextState = nextState.map(movie => {
                if (movie.title === action.movie.title && movie.id === action.movie.id) {
                    let updatedMovie = { ...movie };
                    --updatedMovie['dislikes'];
                    return updatedMovie;
                }
                return movie;
            });
            return nextState;
        default:
            return state;
    }
}

export default moviesList;