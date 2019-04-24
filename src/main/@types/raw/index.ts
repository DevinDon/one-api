export * from './Article';
export * from './Comment';

export interface Resp<T> {
  res: number;
  data: T;
}
