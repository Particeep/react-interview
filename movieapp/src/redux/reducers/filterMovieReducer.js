import { SET_TEXT_FILTER, SET_CHECKBOX_FILTER, REMOVE_FILTER_MOVIE, CLEAR_FILTERS } from '../constants/actionTypes';

const filterMovieReducerDefault = {
    category: [],
    name: ""
}


const filterMovieReducer = (state = filterMovieReducerDefault, action) => {
    switch(action.type) {
        case SET_CHECKBOX_FILTER:
        return {
            ...state,
            category: [...state.category, action.category]
        }
        case REMOVE_FILTER_MOVIE:
            return {
                ...state,
                category: state.category.filter((category) => category !== action.category)
        }
        case SET_TEXT_FILTER:
            return {
             ...state,
             name: action.name   
            }
        case CLEAR_FILTERS:
        return {
            ...state,
            category: [],
            name: ""

        }
        default: 
        return state

    }
}

export default filterMovieReducer;
