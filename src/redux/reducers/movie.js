import { LOAD_MOVIES,DELETE_MOVIE,LIKE_MOVIE,DISLIKE_MOVIE,CANCEL_LIKE_MOVIE,CANCEL_DISLIKE_MOVIE  } from '../actions'


const initialState = {
    
    movies: [],
    moviesLikes:[],
    moviesDisLikes:[]
   
}

export const moviesReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD_MOVIES:
           
            return {
                ...state,   
                movies: action.payload,
               
            }
        case DELETE_MOVIE:
           
            return {
                ...state,   
                movies: state.movies.filter(movie => movie.id !== action.payload)
            }
        case LIKE_MOVIE:
            
            return {
                ...state,
                moviesLikes: [...state.moviesLikes,action.payload ] ,  
                movies: state.movies.map(m => (m.id !== action.payload ? m : { ...m, likes: m.likes + 1 })),
                       
            }
        case DISLIKE_MOVIE:
            
            return {
                ...state,  
                moviesDisLikes: [...state.moviesDisLikes,action.payload ] ,  
                movies: state.movies.map(m => (m.id !== action.payload ? m : { ...m, dislikes: m.dislikes + 1 })),

                           
            }
            case CANCEL_LIKE_MOVIE:
               
                return {
                    ...state,   
                    moviesLikes: state.moviesLikes.filter(movie => movie !== action.payload),
                    movies: state.movies.map(m => (m.id !== action.payload ? m : { ...m, likes: m.likes - 1 })),
                           
                }
            case CANCEL_DISLIKE_MOVIE:
                
                return {
                    ...state,  
                    moviesDisLikes: state.moviesDisLikes.filter(movie => movie !== action.payload), 
                    movies: state.movies.map(m => (m.id !== action.payload ? m : { ...m, dislikes: m.dislikes - 1 })),
    
                               
                }
        default:
            return state;
    }

}

