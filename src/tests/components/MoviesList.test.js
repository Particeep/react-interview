import { isAsyncThunkAction } from '@reduxjs/toolkit';
import React from 'react';
import ReactDOM from 'react-dom';
import MoviesList from '../../components/MoviesList';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MoviesList />, div);
});