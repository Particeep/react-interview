import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { ILiked } from './i.likedSlice';
import { IMovie } from './i.moviesSlice';

const initialState: ILiked = {
  listLike: [],
  listDislike: []
};

export const likedSlice = createSlice({
    name: 'liked',
    initialState,
    reducers: {
        addLike: (state, action: PayloadAction<IMovie>) => {
            state.listDislike = state.listDislike.filter((item: string) => !(item.indexOf(action.payload.id) > -1) );
            state.listLike.push(action.payload.id);
        },
        removeLike: (state, action: PayloadAction<IMovie>) => {
            state.listLike = state.listLike.filter((item: string) => !(item.indexOf(action.payload.id) > -1) );
        },
        addDisLike: (state, action: PayloadAction<IMovie>) => {
            state.listLike = state.listLike.filter((item: string) => !(item.indexOf(action.payload.id) > -1) );
            state.listDislike.push(action.payload.id);
        },
        removeDisLike: (state, action: PayloadAction<IMovie>) => {
            state.listDislike = state.listDislike.filter((item: string) => !(item.indexOf(action.payload.id) > -1) );
        }
    }
});

export const { addLike, removeLike, addDisLike, removeDisLike } = likedSlice.actions;
export const likedList = (state: RootState) => state.liked.listLike;
export const dislikedList = (state: RootState) => state.liked.listDislike;
export default likedSlice.reducer;
