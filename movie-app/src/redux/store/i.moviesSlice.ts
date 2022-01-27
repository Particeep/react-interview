export interface IMovie {
    id: string;
    title: string;
    category: string;
    img: string;
    likes: number;
    dislikes: number;
}
export interface IMovies {
    list: Array<IMovie>;
    filtered: Array<IMovie>;
}