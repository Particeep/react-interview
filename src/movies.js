const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
      image: 'https://i.ibb.co/dLbNzVr/ocean-8-4.jpg'
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0,
      image: 'https://i.ibb.co/wCyGYcq/060616-jpg-r-1920-1080-f-jpg-q-x-xxyxx.jpg'
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1,
      image: 'https://i.ibb.co/SBgPN2M/mabu-Ns-GJg-Ru-CTu-Gqj-Fk-We1xdu19.jpg'
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6,
      image: 'https://i.ibb.co/rH8FR0V/sans-un-bruit-photo-1401954.jpg'
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2,
      image: 'https://i.ibb.co/CtvWf4K/creed-2-affiche-1025052-large.jpg'
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3,
      image: 'https://i.ibb.co/N9yhZV8/91-912623-pulp-fiction-wallpapers-hd-movie-3-pulp-fiction.jpg'
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32,
      image: 'https://i.ibb.co/pJkvYgh/pulpfictionillustration.jpg'
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      image: 'https://i.ibb.co/27C5SLP/seven-david-fincher-film-critique.jpg'
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1,
      image: 'https://i.ibb.co/D40TYmG/thumb-1920-85182.jpg'
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12,
      image: 'https://i.ibb.co/4TQSwj3/gone-girl-rosamund-pike-ben-affleck-scaled.jpg'
    },
  ]
  
  export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))