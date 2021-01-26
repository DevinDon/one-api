import { logger } from '@iinfinity/logger';
import { Category, fetchArticle, fetchComments } from '../main';

(async () => {
  const id = 3795;
  const article = await fetchArticle(id);
  logger.debug(`fetched article ${id}, content:\n`, article);
  const comments = await fetchComments(Category.Article, id);
  logger.debug(`fetched comments of article ${id}, content:\n`, comments.length);
})();
