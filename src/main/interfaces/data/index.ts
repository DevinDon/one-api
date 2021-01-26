export * from './article';
export * from './comment';
export * from './common';
export * from './movie';
export * from './music';
export * from './picture';
export * from './question';

export interface Resp<T> {
  res: number;
  data: T;
}
