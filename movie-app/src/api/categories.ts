import { ICategory } from "../redux/store/i.filtersSlice";

const categories = [
    {
        id: '1',
        name: 'Comedy'
    },{
        id: '2',
        name: 'Animation'
    },{
        id: '3',
        name: 'Thriller'
    },{
        id: '4',
        name: 'Drame'
    }
];

export const categories$ = new Promise<Array<ICategory>>((resolve, reject) => setTimeout(resolve, 100, categories));
