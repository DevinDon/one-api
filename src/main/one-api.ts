import Axios from 'axios';
import { Article, ArticleData, Category, Comment, CommentData, CommentListData, Index, MovieData, MusicData, PictureData, QuestionData, Resp } from './interfaces';
import * as html2md from 'html-to-md';

const HOST = 'http://v3.wufazhuce.com:8000/api';

export const fetchDetail = async <T>(type: Category, id: number): Promise<T> => Axios
  .get<Resp<T>>(`${HOST}/${type}/detail/${id}`)
  .then(response => response.data.data);

export const fetchArticleData = async (id: number): Promise<ArticleData> => fetchDetail(Category.Article, id);

export const fetchMovieData = async (id: number): Promise<MovieData> => fetchDetail(Category.Movie, id);

export const fetchMusicData = async (id: number): Promise<MusicData> => fetchDetail(Category.Music, id);

export const fetchPictureData = async (id: number): Promise<PictureData> => fetchDetail(Category.Picture, id);

export const fetchQuestionData = async (id: number): Promise<QuestionData> => fetchDetail(Category.Question, id);

export const fetchArticle = async (id: number): Promise<Index<Article>> => {
  const detail = await fetchDetail<ArticleData>(Category.Article, id);
  const index: Index<Article> = {
    index: id,
    category: Category.Article,
    comments: await fetchComments(Category.Article, id),
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
      content: html2md(detail.hp_content).trim(),
      title: detail.hp_title
    }
  };
  return index;
};

export const fetchComments = async (type: Category, id: number): Promise<Comment[]> => {
  let raw: CommentData[] = [];
  let data: CommentData[] = [];
  let index = 0;
  do {
    data = await Axios
      .get<Resp<CommentListData>>(`${HOST}/comment/praiseandtime/${type}/${id}/${index}`)
      .then(response => response.data.data.data);
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
};

export const getVersion = () => '0.2.0';
