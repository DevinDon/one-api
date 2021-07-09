import html2md from 'html-to-md';
import fetch from 'node-fetch';
import {
  Article,
  ArticleData,
  Category,
  Comment,
  CommentData,
  CommentListData,
  Index,
  Movie,
  MovieData,
  MusicData,
  PictureData,
  QuestionData,
  Resp,
} from './interfaces';
import { parseEditorEmail, parseEditorName } from './utils';

const HOST = 'http://v3.wufazhuce.com:8000/api';

export const fetchDetail = async <T>(type: Category, id: number): Promise<T> => fetch(`${HOST}/${type}/detail/${id}`)
  .then<Resp<T>>(response => response.json())
  .then(response => response.data);

export const fetchArticleData = async (id: number): Promise<ArticleData> => fetchDetail(Category.Article, id);

export const fetchMovieData = async (id: number): Promise<MovieData> => fetchDetail(Category.Movie, id);

export const fetchMusicData = async (id: number): Promise<MusicData> => fetchDetail(Category.Music, id);

export const fetchPictureData = async (id: number): Promise<PictureData> => fetchDetail(Category.Picture, id);

export const fetchQuestionData = async (id: number): Promise<QuestionData> => fetchDetail(Category.Question, id);

export const fetchComments = async (type: Category, id: number): Promise<Comment[]> => {
  let raw: CommentData[] = [];
  let data: CommentData[] = [];
  let index = 0;
  do {
    data = await fetch(`${HOST}/comment/praiseandtime/${type}/${id}/${index}`)
      .then<Resp<CommentListData>>(response => response.json())
      .then(response => response.data.data);
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
        name: v.user.user_name,
      },
    });
  });
  return comments;
};

export const fetchArticle = async (id: number): Promise<Index<Article>> => {
  const detail = await fetchArticleData(id);
  const index: Index<Article> = {
    index: id,
    category: Category.Article,
    comments: await fetchComments(Category.Article, id),
    date: new Date(detail.maketime).toISOString(),
    editor: {
      name: parseEditorName(detail.hp_author_introduce),
      email: parseEditorEmail(detail.hp_author_introduce),
    },
    like: +(detail.praisenum || 0),
    read: +(detail?.read_num || 0),
    share: +(detail.sharenum || 0),
    comment: +(detail.commentnum || 0),
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
        weibo: detail.author[0].wb_name,
      },
      content: html2md(detail.hp_content).trim(),
      summary: detail.guide_word,
      title: detail.hp_title,
    },
  };
  return index;
};

export const fetchMovie = async (id: number): Promise<Index<Movie>> => {
  const detail = await fetchMovieData(id);
  const index: Index<Movie> = {
    index: id,
    category: Category.Movie,
    comments: await fetchComments(Category.Movie, id),
    date: new Date(detail.maketime).toISOString(),
    editor: {
      name: parseEditorName(detail.charge_edt),
      email: parseEditorEmail(detail.charge_edt),
    },
    like: +(detail.praisenum || 0),
    read: +(detail.read_num || 0),
    share: +(detail.sharenum || 0),
    comment: +(detail.commentnum || 0),
    url: detail.web_url,
    content: {
      title: detail.title,
      cover: detail.indexcover,
      image: detail.detailcover,
      keyworks: detail.keywords,
      video: detail.video,
    },
  };
  return index;
};

export const getVersion = () => '0.2.0';
