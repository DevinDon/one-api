import API, { Category } from '../main';

async function run() {
  const article = await API.getArticle(3795);
  const comments = await API.getComments(Category.article, 3795);
  console.log('ALL DONE');
}

run();
