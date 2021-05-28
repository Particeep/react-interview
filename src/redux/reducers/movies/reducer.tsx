import ReducerActionType from '../../reducer-action-type'; 

const moviesReducer = (state = {
  movies: [],
  categories: [],
  filters: ["All"]
}, action : ReducerActionType) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload.movies
      };
    case 'SET_MOVIES_CATEGORIES':
      return {
        ...state,
        categories: action.payload.categories
      };
    case 'SET_CATEGORY_FILTERS':
      return {
        ...state,
        filters: action.payload.filters
      };
    default:
      return state;
  }
}
  
export default moviesReducer;
  