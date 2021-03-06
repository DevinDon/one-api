export enum Category {
  Picture = 'hp',
  Article = 'essay',
  Serial = 'serial',
  Question = 'question',
  Music = 'music',
  Movie = 'movie',
  Radio = 'radio'
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
  index: number;
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
  comment: number;
  url: string;
  content: T;
}

export interface Article {
  anchor: string;
  audio: string;
  author: Author;
  content: string;
  summary: string;
  title: string;
}

export interface Movie {
  title: string;
  cover: string;
  image: string;
  video: string;
  keyworks: string;
}
