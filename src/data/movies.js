import img1 from '../Assets/img/img1.jpeg'
import img2 from '../Assets/img/img2.jpeg'
import img3 from '../Assets/img/img3.jpeg'
import img4 from '../Assets/img/img4.jpeg'
import img5 from '../Assets/img/img5.jpeg'
import img6 from '../Assets/img/img6.jpeg'
import img7 from '../Assets/img/img7.jpeg'
import img8 from '../Assets/img/img8.jpeg'
import img9 from '../Assets/img/img9.jpeg'
import img10 from '../Assets/img/img10.jpeg'
const moviesLists = [
  {
    id: '1',
    img:img1,
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    isLiked:false
  }, {
    id: '2',
    img:img2,
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    isLiked:false
  }, {
    id: '3',
    img:img3,
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    isLiked:false
  }, {
    id: '4',
    img:img4,
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    isLiked:false
  }, {
    id: '5',
    img:img5,
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    isLiked:false
  }, {
    id: '6',
    img:img6,
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    isLiked:false
  }, {
    id: '7',
    img:img7,
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    isLiked:false
  }, {
    id: '8',
    img:img8,
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    isLiked:false
  }, {
    id: '9',
    img:img9,
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    isLiked:false
  }, {
    id: '10',
    img:img10,
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    isLiked:false
  },
]

  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, moviesLists))