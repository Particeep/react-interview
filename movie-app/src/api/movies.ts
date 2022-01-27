import { IMovie } from "../redux/store/i.moviesSlice";

const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    img: "https://media.senscritique.com/media/000017793496/source_big/Ocean_s_8.jpg",
    likes: 4,
    dislikes: 1
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    img: "https://media.senscritique.com/media/000017774692/source_big/Midnight_Sun.jpg",
    likes: 2,
    dislikes: 0
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    img: "https://media.senscritique.com/media/000017729190/source_big/Les_Indestructibles_2.jpg",
    likes: 3,
    dislikes: 1
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    img: "https://media.senscritique.com/media/000017703233/source_big/Sans_un_bruit.jpg",
    likes: 6,
    dislikes: 6
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    img: "https://media.senscritique.com/media/000018251089/source_big/Creed_II.jpg",
    likes: 16,
    dislikes: 2
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    img: "https://media.senscritique.com/media/000012288077/source_big/Pulp_Fiction.jpg",
    likes: 11,
    dislikes: 3
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    img: "https://media.senscritique.com/media/000012288077/source_big/Pulp_Fiction.jpg",
    likes: 12333,
    dislikes: 32
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    img: "https://media.senscritique.com/media/000012353656/source_big/Seven.jpg",
    likes: 2,
    dislikes: 1
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    img: "https://media.senscritique.com/media/000004710747/source_big/Inception.jpg",
    likes: 2,
    dislikes: 1
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    img: "https://media.senscritique.com/media/000015538722/source_big/Gone_Girl.jpg",
    likes: 22,
    dislikes: 12
  },
];

export const movies$ = new Promise<Array<IMovie>>((resolve, reject) => setTimeout(resolve, 100, movies));
