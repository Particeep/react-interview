export type Movie = {
  id: string;
  title: string;
  category: Category;
  likes: number;
  dislikes: number;
};

export type Category = string;
