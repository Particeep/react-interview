import { combineReducers } from 'redux'
import { useDispatch, useSelector } from 'react-redux'

import movieReducer from './movie'

export const useAppDispatch = useDispatch
export const useAppSelector = useSelector

const rootReducer = combineReducers({
  movie: movieReducer
})

export default rootReducer
