const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    poster: 'https://i.ibb.co/3c6fdbX/oceans8-trailer-feature.jpg'
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    poster: 'https://i.ibb.co/Ms1Lc1R/mid-night-sun.jpg'
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    poster: 'https://i.ibb.co/t4H9bvW/les-indestructibles-2.jpg'
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    poster: 'https://i.ibb.co/6Z5YS6p/sans-un-bruit.jpg'
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    poster: 'https://i.ibb.co/frzPgjb/Creed-II.jpg'
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    poster: 'https://i.ibb.co/0hKpzS4/pulp-fiction.jpg'
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    poster: 'https://i.ibb.co/gZ7X2Wm/pulp-fiction-alt.jpg'
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    poster: 'https://i.ibb.co/XJjz749/Se7en.jpg'
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    poster: 'https://i.ibb.co/Sw31Rt5/inception.jpg'
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    poster: 'https://i.ibb.co/0sqy3kT/gone-girl.jpg'
  },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
