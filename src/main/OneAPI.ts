import Axios from 'axios';
import { JSDOM } from 'jsdom';
import { Article, ArticleData, Category, Comment, CommentData, Index, RawComment, Resp } from './@types';

const host = 'http://v3.wufazhuce.com:8000/api';

export async function getDetail<T>(type: Category, id: number): Promise<T> {
  return (await Axios.get<Resp<T>>(`${host}/${type}/detail/${id}`)).data.data;
}

export async function getArticle(id: number): Promise<Index<Article>> {
  const detail = await getDetail<ArticleData>(Category.article, id);
  const index: Index<Article> = {
    index: id,
    category: Category.article,
    comments: await getComments(Category.article, id),
    date: new Date(detail.maketime).toISOString(),
    editor: {
      name: /（?责任编辑：(.*) .*）?/.exec(detail.hp_author_introduce)![1],
      email: detail.editor_email
    },
    like: detail.praisenum,
    read: 0,
    share: detail.sharenum,
    stamp: Date.now(),
    url: detail.web_url,
    content: {
      anchor: detail.anchor.replace('朗读者-', ''),
      audio: detail.audio,
      author: {
        id: Number(detail.author[0].user_id),
        desc: detail.author[0].desc,
        fans: Number(detail.author[0].fans_total),
        head: Buffer.from(detail.author[0].web_url).toString('base64'),
        name: detail.author[0].user_name,
        summary: detail.author[0].summary,
        weibo: detail.author[0].wb_name
      },
      summary: detail.guide_word,
      text: new JSDOM(`<!DOCTYPE html><html><body>${detail.hp_content}</body></html>`).window.document.body.textContent!.trim(),
      title: detail.hp_title
    }
  };
  return index;
}

export async function getComments(type: Category, id: number): Promise<Comment[]> {
  let raw: CommentData[] = [];
  let data: CommentData[] = [];
  let index = 0;
  do {
    data = (await Axios.get<Resp<RawComment>>(`${host}/comment/praiseandtime/${type}/${id}/${index}`)).data.data.data;
    index = data.length ? Number(data[data.length - 1].id) : 0;
    raw = raw.concat(data);
  } while (index);
  const comments: Comment[] = [];
  raw.forEach(v => {
    comments.push({
      id: Number(v.id),
      content: v.content,
      date: new Date(v.input_date).toISOString(),
      hot: Boolean(v.type),
      index: id,
      like: v.praisenum,
      quote: v.quote,
      user: {
        id: Number(v.user.user_id),
        head: Buffer.from(v.user.web_url).toString('base64'),
        name: v.user.user_name
      }
    });
  });
  return comments;
}

export function getVersion(): string {
  return 'v4.x';
}
