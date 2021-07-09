/* eslint-disable no-console */
import { Category, fetchArticle, fetchComments } from '.';

(async () => {
  const id = 3795;
  const article = await fetchArticle(id);
  console.debug(`fetched article ${id}, content:\n`, article);
  const comments = await fetchComments(Category.Article, id);
  console.debug(`fetched comments of article ${id}, content:\n`, comments.length);
})();
