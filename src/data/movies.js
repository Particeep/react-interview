const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    image: 'ocean',
    category: 'Comedy',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    image: 'midnight',
    category: 'Comedy',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Incredibles 2',
    image: 'incredibles',
    category: 'Animation',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    image: 'quiet',
    title: 'A Quiet Place',
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    image: 'creed',
    title: 'Creed II',
    category: 'Drama',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    image: 'once',
    title: 'Once Upon a Time... in Hollywood',
    category: 'Comedy',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    image: 'pulp',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    image: 'seven',
    title: 'Se7en',
    category: 'Thriller',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    image: 'inception',
    title: 'Inception',
    category: 'Action',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    image: 'gone',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12
  },
  {
    id: '11',
    image: 'godfather',
    title: 'The Godfather',
    category: 'Drama',
    likes: 4,
    dislikes: 1
  }, {
    id: '12',
    image: 'shawshank',
    title: 'The Shawshank Redemption',
    category: 'Drama',
    likes: 2,
    dislikes: 0
  }, {
    id: '13',
    image: 'dark',
    title: 'The Dark Knight',
    category: 'Action',
    likes: 3,
    dislikes: 1
  }, {
    id: '14',
    image: 'parasite',
    title: 'Parasite',
    category: 'Thriller',
    likes: 6,
    dislikes: 6
  }, {
    id: '15',
    image: 'fight',
    title: 'Fight Club',
    category: 'Drama',
    likes: 16,
    dislikes: 2
  }, {
    id: '16',
    image: 'maverick',
    title: 'Top Gun: Maverick',
    category: 'Drama',
    likes: 11,
    dislikes: 3
  }, {
    id: '17',
    image: 'lord',
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    category: 'Fantasy',
    likes: 12333,
    dislikes: 32
  }, {
    id: '18',
    image: 'interstellar',
    title: 'Interstellar',
    category: 'Science Fiction',
    likes: 2,
    dislikes: 1
  }, {
    id: '19',
    image: 'back',
    title: 'Back to the Future',
    category: 'Science Fiction',
    likes: 2,
    dislikes: 1
  }, {
    id: '20',
    image: 'avengers',
    title: 'Avengers: Infinity War',
    category: 'Science Fiction',
    likes: 22,
    dislikes: 12
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
