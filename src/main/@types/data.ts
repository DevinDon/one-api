
export enum Category {
  picture = 'hp',
  article = 'essay',
  serial = 'serial',
  question = 'question',
  music = 'music',
  movie = 'movie',
  radio = 'radio'
}

export interface Author {
  id: number;
  desc: string;
  fans: number;
  head: string;
  name: string;
  summary: string;
  weibo: string;
}

export interface Editor {
  name: string;
  email: string;
}

export interface User {
  id: number;
  head: string;
  name: string;
}

export interface Comment {
  id: number;
  content: string;
  date: string;
  hot: boolean;
  like: number;
  quote: string;
  user: User;
}

export interface Index<T> {
  index: number;
  category: Category;
  comments: Comment[];
  date: string;
  editor: Editor;
  like: number;
  read: number;
  share: number;
  stamp: number;
  url: string;
  content: T;
}

export interface Article {
  anchor: string;
  audio: string;
  author: Author;
  summary: string;
  text: string;
  title: string;
}
