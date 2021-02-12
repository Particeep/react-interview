import React from 'react';
import ReactDOM from 'react-dom';
import MoviesFilter from '../../components/MoviesFilter';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<MoviesFilter />, div);
});