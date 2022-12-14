const movies = [
  {
    id: "1",
    title: "Oceans 8",
    category: "Comedy",
    likes: 4,
    dislikes: 1,
    poster_url : "https://images.moviesanywhere.com/59afcf857fe47db733e38867da349f46/a726b292-d20d-4cb6-b19a-dcb962874f4a.jpg",
  },
  {
    id: "2",
    title: "Midnight Sun",
    category: "Comedy",
    likes: 2,
    dislikes: 0,
    poster_url : "https://cimazoom.com/wp-content/uploads/2018/06/MV5BYTc3ZmZhN2QtOTNkNi00ODczLWJiODctOGEyZTI1MDJhYzQzXkEyXkFqcGdeQXVyMjk3OTcwNQ@@._V1_.jpg",
  },
  {
    id: "3",
    title: "Les indestructibles 2",
    category: "Animation",
    likes: 3,
    dislikes: 1,
    poster_url : "https://gentlemanmoderne.com/wp-content/uploads/2018/07/indestructible-2-critique-indestructibles-2.jpg",
  },
  {
    id: "4",
    title: "Sans un bruit",
    category: "Thriller",
    likes: 6,
    dislikes: 6,
    poster_url : "https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg",
  },
  {
    id: "5",
    title: "Creed II",
    category: "Drame",
    likes: 16,
    dislikes: 2,
    poster_url : "https://m.media-amazon.com/images/I/81NxZ00PfxL._AC_SX342_.jpg",
  },
  {
    id: "6",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 11,
    dislikes: 3,
    poster_url : "https://c4.wallpaperflare.com/wallpaper/143/242/573/pulp-fiction-wallpaper-preview.jpg",
  },
  {
    id: "7",
    title: "Pulp Fiction",
    category: "Thriller",
    likes: 12333,
    dislikes: 32,
    poster_url : "https://c4.wallpaperflare.com/wallpaper/143/242/573/pulp-fiction-wallpaper-preview.jpg",
  },
  {
    id: "8",
    title: "Seven",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    poster_url : "https://bestoftheyear.in/wp-content/uploads/2017/07/Se7en.jpg",
  },
  {
    id: "9",
    title: "Inception",
    category: "Thriller",
    likes: 2,
    dislikes: 1,
    poster_url : "https://i.ytimg.com/vi/herRuccntNE/movieposter_en.jpg",
  },
  {
    id: "10",
    title: "Gone Girl",
    category: "Thriller",
    likes: 22,
    dislikes: 12,
    poster_url : "https://wallpapercave.com/wp/wp3623264.jpg",
  },
];

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 500, movies));
