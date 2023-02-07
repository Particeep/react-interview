export type Movie = {
    readonly id: string;
    readonly title: string;
    readonly category: string;
    readonly likes: number;
    readonly dislikes: number;
    readonly cover: string;
};

const movies: Movie[] = [
    {
        id: '1',
        title: 'Oceans 8',
        category: 'Comedy',
        likes: 4,
        dislikes: 1,
        cover: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9fxmD5um8kqj3lCV3TBVKJqRB4P.jpg"
    }, {
        id: '2',
        title: 'Midnight Sun',
        category: 'Comedy',
        likes: 2,
        dislikes: 0,
        cover: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/1TH4PwfcRPenIxce3BREDIV4mBd.jpg"
    }, {
        id: '3',
        title: 'Les indestructibles 2',
        category: 'Animation',
        likes: 3,
        dislikes: 1,
        cover: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/Apish2YD3QIAepzxZ96VLkqEZo3.jpg"
    }, {
        id: '4',
        title: 'Sans un bruit',
        category: 'Thriller',
        likes: 6,
        dislikes: 6,
        cover: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/xlJCSHnR7sbaibX3OY97vEmsjxt.jpg"
    }, {
        id: '5',
        title: 'Creed II',
        category: 'Drame',
        likes: 16,
        dislikes: 2,
        cover: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/84FrvyX2QiAy2QXYSanaCcnqgE1.jpg"
    }, {
        id: '6',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 11,
        dislikes: 3,
        cover: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg"
    }, {
        id: '7',
        title: 'Pulp Fiction',
        category: 'Thriller',
        likes: 12333,
        dislikes: 32,
        cover: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/4TBdF7nFw2aKNM0gPOlDNq3v3se.jpg"
    }, {
        id: '8',
        title: 'Seven',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        cover: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/moHx8JGzIdEAMLj1CqDzcLYhMRY.jpg"
    }, {
        id: '9',
        title: 'Inception',
        category: 'Thriller',
        likes: 2,
        dislikes: 1,
        cover: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/aej3LRUga5rhgkmRP6XMFw3ejbl.jpg"
    }, {
        id: '10',
        title: 'Gone Girl',
        category: 'Thriller',
        likes: 22,
        dislikes: 12,
        cover: "https://www.themoviedb.org/t/p/w94_and_h141_bestv2/7xkJ1ACu40BjzLHVPRILWjFvW7.jpg"
    },
]

export const movies$ = new Promise<Movie[]>((resolve, reject) => setTimeout(resolve, 100, movies))