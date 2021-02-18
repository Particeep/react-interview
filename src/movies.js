const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    src: 'ocean-8.jpg',
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    src: 'midnight-sun.jpg',
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    src: 'les-indestructibles-2.jpg',
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    src: 'sans-un-bruit.jpg',
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    src: 'creed-2.jpg',
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    src: 'pulp-fiction.png',
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    src: 'pulp-fiction.png',
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    src: 'seven.jpg',
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    src: 'inception.jpg',
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    src: 'gone-girl.jpg',
    likes: 22,
    dislikes: 12
  }, {
    id: 11,
    title: 'Vol au dessus d\'un nid de coucou',
    category: 'Drame',
    src: 'vol-au-dessus-d-un-nid-de-coucou.jpg',
    likes: 1254,
    dislikes: 95
  }
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
