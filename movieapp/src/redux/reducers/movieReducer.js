import { DELETE_MOVIE, HANDLE_LIKE } from '../constants/actionTypes';

const initState = {
    movies: [
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        image: 'https://tse3.mm.bing.net/th?id=OIP.FHyiyTJYbKttdEOeY6_pDgHaK-&pid=Api&P=0&w=600&h=600',
        likes: 4,
        dislikes: 1,
        bgcolor: '#eea29a'
  
      }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        image: 'https://tse3.mm.bing.net/th?id=OIP.ivXZgfaJzk5OHdKcgfeAtwHaKj&pid=Api&P=0&w=600&h=600',
        likes: 2,
        dislikes: 0,
        bgcolor: '#eea29a'
      }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        image: 'https://tse3.mm.bing.net/th?id=OIP.wMG5lU1H5DxzdVAONkPQFAHaKl&pid=Api&P=0&w=600&h=600',
        likes: 3,
        dislikes: 1,
        bgcolor: '#034f84'
      }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        image: 'https://tse1.mm.bing.net/th?id=OIP.s2uvNkvcajBkazygOEiLqwHaKD&pid=Api&P=0&w=600&h=600',
        likes: 6,
        dislikes: 6,
        bgcolor: '#6b5b95'
      }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        image: 'https://tse4.mm.bing.net/th?id=OIP.C7XT3Dh-k3ZROdsBMswKGgHaIk&pid=Api&P=0&w=600&h=600',
        likes: 16,
        dislikes: 2,
        bgcolor: '#50394c'
      }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        image: 'https://tse2.explicit.bing.net/th?id=OIP.oVSXJArra_OG8yixpwMZ6wHaLH&pid=Api&P=0&w=600&h=600',
        likes: 11,
        dislikes: 3,
        bgcolor: '#6b5b95'
      }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        image: 'https://tse2.explicit.bing.net/th?id=OIP.oVSXJArra_OG8yixpwMZ6wHaLH&pid=Api&P=0&w=600&h=600',
        likes: 12333,
        dislikes: 32,
        bgcolor: '#6b5b95'
      }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        image: 'https://tse2.mm.bing.net/th?id=OIP.E__mbHUy6Ay5zDcYH5SvHwHaLH&pid=Api&P=0&w=600&h=600',
        likes: 2,
        dislikes: 1,
        bgcolor: '#6b5b95'
      }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        image: 'https://images-na.ssl-images-amazon.com/images/I/51NbVEuw1HL._SX355_.jpg',
        likes: 2,
        dislikes: 1,
        bgcolor: '#6b5b95'
      }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        image: 'https://tse2.mm.bing.net/th?id=OIP.HzdNvwsSeK0pCivtRefR4wHaKj&pid=Api&P=0&w=600&h=600',
        likes: 22,
        dislikes: 12,
        bgcolor: '#6b5b95'
      },
    ],
};

const movieReducer = (state = initState, action) => {

    switch(action.type) {
        case DELETE_MOVIE:
            const newMovie = state.movies.filter((movie) => movie.id !== action.id);
        return {
            ...state,
            movies: newMovie
        }
        case HANDLE_LIKE:
        return {
          ...state
        }
        default:
            return state;
    }
};

export default movieReducer;
