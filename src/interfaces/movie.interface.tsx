export interface Movie {
  id: number;
  title: string;
  image: string;
  category: string;
  likes: number;
  dislikes: number;
  liked?: boolean | null;
  disliked?: boolean | null;
}