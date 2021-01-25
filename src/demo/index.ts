import { Category, getArticle, getComments } from '../main';
import { logger } from '@iinfinity/logger';

(async () => {
  const id = 3795;
  const article = await getArticle(id);
  logger.debug(`fetched article ${id}, content:\n`, article);
  const comments = await getComments(Category.article, id);
  logger.debug(`fetched comments of article ${id}, content:\n`, comments.length);
})();
