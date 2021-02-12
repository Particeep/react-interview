import { isAsyncThunkAction } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import MovieCard from '../../components/MovieCard';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MovieCard />, div);
});