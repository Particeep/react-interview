const movies = [
  {
    id: '1',
    title: 'Oceans 8',
    category: 'Comedy',
    likes: 4,
    dislikes: 1,
    image:"https://resize-elle.ladmedia.fr/rcrop/796,1024/img/var/plain_site/storage/images/loisirs/cinema/news/j-y-vais-j-y-vais-pas/ocean-s-8-pourquoi-il-faut-courir-voir-le-film-3688991/87900620-1-fre-FR/Ocean-s-8-pourquoi-il-faut-courir-voir-le-film.jpg"
  }, {
    id: '2',
    title: 'Midnight Sun',
    category: 'Comedy',
    likes: 2,
    dislikes: 0,
    image: "https://images-na.ssl-images-amazon.com/images/I/71-J6giZEQL.jpg"
  }, {
    id: '3',
    title: 'Les indestructibles 2',
    category: 'Animation',
    likes: 3,
    dislikes: 1,
    image:"https://fr.web.img6.acsta.net/pictures/18/04/13/15/09/0323902.jpg"
  }, {
    id: '4',
    title: 'Sans un bruit',
    category: 'Thriller',
    likes: 6,
    dislikes: 6,
    image:"https://fr.web.img3.acsta.net/pictures/18/03/22/16/48/2454348.jpg"
  }, {
    id: '5',
    title: 'Creed II',
    category: 'Drame',
    likes: 16,
    dislikes: 2,
    image:"https://pics.filmaffinity.com/Creed_2-609949858-large.jpg"
  }, {
    id: '6',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 11,
    dislikes: 3,
    image:"https://m.media-amazon.com/images/I/71TQT4vrS+L._AC_SL1500_.jpg"
  }, {
    id: '7',
    title: 'Pulp Fiction',
    category: 'Thriller',
    likes: 12333,
    dislikes: 32,
    image:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/95df13db7e5832579c4d677402bd1c42aeee764299458cfad4a7abd91020fa61._RI_V_TTW_.jpg"
  }, {
    id: '8',
    title: 'Seven',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    image:"https://imgsrc.cineserie.com/2016/11/282283.jpg?ver=1"
  }, {
    id: '9',
    title: 'Inception',
    category: 'Thriller',
    likes: 2,
    dislikes: 1,
    image:"https://images.affiches-et-posters.com//albums/3/4535/poster-film-inception-2350.jpg"
  }, {
    id: '10',
    title: 'Gone Girl',
    category: 'Thriller',
    likes: 22,
    dislikes: 12,
    image:"https://lh3.googleusercontent.com/proxy/pPWXbPTrnjZuPiwEI8KsaxRL_yc-f1dTW6nFX_Ut4stjY9bm-q9vMJnyiKjjXM2JPrAk6nP1tCtI74DYW5HPIJgIaBJIerEOiIgoJPuepVAKt2nQJeAegZGBGINsVbPXqegqa3Bbx8-1JwJBmSTX"
  },
]

const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
export default movies$ 