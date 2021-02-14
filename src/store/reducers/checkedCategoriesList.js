import * as actions from '../actions/index';

const checkedCategoriesList = (state = [], action) => {
    let nextState;

    switch(action.type) {
        case actions.SET_CHECKED_CATEGORIES:
            if (state.includes(action.category)) {
                nextState = state.filter(category => {
                    return action.category !== category;
                });
            } else {
                nextState = [ ...state, action.category ];
            }
            return nextState;
        default:
            return state;
    }
}

export default checkedCategoriesList;