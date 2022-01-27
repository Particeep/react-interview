export interface ICategory {
    id: string;
    name: string;
}

export interface IFilters {
    categories: Array<ICategory>;
    currentFilter:Array<ICategory>;
}