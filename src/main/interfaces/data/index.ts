export * from './article';
export * from './comment';
export * from './common';

export interface Resp<T> {
  res: number;
  data: T;
}
