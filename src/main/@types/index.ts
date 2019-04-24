export * from './raw';

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

export interface Comment {
  id: number;
  content: string;
  date: string;
  head: string;
  host: boolean;
  name: string;
  quote: string;
  user: number;
}

export interface Base {
  id: number;
  category: Category;
  comments: Comment[];
  date: string;
  editor: Editor;
  like: number;
  read: number;
  share: number;
  stamp: number;
  url: string;
}

export interface Article {
  anchor: string;
  audio: string;
  author: Author;
  summary: string;
  text: string;
  title: string;
}
