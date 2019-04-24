export * from './Article';
export * from './Comment';

export interface Detail<T> {
  res: number;
  data: T;
}
