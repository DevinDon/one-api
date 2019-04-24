export interface Wx {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

export interface WxTimeline {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

export interface Weibo {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

export interface Qq {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

export interface ShareList {
  wx: Wx;
  wx_timeline: WxTimeline;
  weibo: Weibo;
  qq: Qq;
}

export interface Data {
  id: string;
  title: string;
  indexcover: string;
  detailcover: string;
  video: string;
  verse: string;
  verse_en: string;
  score?: any;
  revisedscore: string;
  review: string;
  keywords: string;
  movie_id: string;
  info: string;
  officialstory: string;
  hide_flag: string;
  charge_edt: string;
  web_url: string;
  praisenum: number;
  sort: string;
  releasetime: string;
  scoretime: string;
  maketime: string;
  last_update_date: string;
  read_num: string;
  directors: string;
  editor_email: string;
  related: string;
  directors_id: string;
  start_video: string;
  media_type: string;
  poster: string;
  photo: string[];
  next_id: string;
  previous_id: string;
  tag_list: any[];
  share_list: ShareList;
  sharenum: number;
  commentnum: number;
  servertime: number;
}

export interface Movie {
  res: number;
  data: Data;
}
