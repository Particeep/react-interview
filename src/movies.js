import {
    creedII,
    goneGirl,
    inception,
    lesIndestructible2,
    midnightSun,
    ocean8,
    pulpFiction,
    sansUnBruit,
    seven
} from "./movieSvg/index";

const movies = [
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 4,
        dislikes: 1,
        src: ocean8,
    }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: 2,
        dislikes: 0,
        src: midnightSun,
    }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: 3,
        dislikes: 1,
        src: lesIndestructible2,
    }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: 6,
        dislikes: 6,
        src: sansUnBruit,
    }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: 16,
        dislikes: 2,
        src: creedII,
    }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 11,
        dislikes: 3,
        src: pulpFiction,
    }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 12333,
        dislikes: 32,
        src: pulpFiction,
    }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        src: seven,
    }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        src: inception,
    }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 22,
        dislikes: 12,
        src: goneGirl,
    },
]

export const movies$ = new Promise((resolve, reject) => setTimeout(resolve, 100, movies))
