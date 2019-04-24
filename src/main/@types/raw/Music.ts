export interface Author {
  user_id: string;
  user_name: string;
  desc: string;
  wb_name: string;
  is_settled: string;
  settled_type: string;
  summary: string;
  fans_total: string;
  web_url: string;
}

export interface StoryAuthor {
  user_id: string;
  user_name: string;
  desc: string;
  wb_name: string;
  is_settled: string;
  settled_type: string;
  summary: string;
  fans_total: string;
  web_url: string;
}

export interface AuthorList {
  user_id: string;
  user_name: string;
  desc: string;
  wb_name: string;
  is_settled: string;
  settled_type: string;
  summary: string;
  fans_total: string;
  web_url: string;
}

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
  cover: string;
  isfirst: string;
  story_title: string;
  story: string;
  lyric: string;
  info: string;
  platform: string;
  music_id: string;
  charge_edt: string;
  related_to: string;
  web_url: string;
  praisenum: number;
  hide_flag: string;
  sort: string;
  maketime: string;
  last_update_date: string;
  read_num: string;
  story_summary: string;
  audio: string;
  anchor: string;
  editor_email: string;
  related_musics: string;
  album: string;
  start_video: string;
  media_type: string;
  copyright: string;
  audio_duration: string;
  author: Author;
  story_author: StoryAuthor;
  author_list: AuthorList[];
  feeds_cover: string;
  next_id: string;
  previous_id: string;
  tag_list: any[];
  share_list: ShareList;
  music_exception: string;
  sharenum: number;
  commentnum: number;
}

export interface Music {
  res: number;
  data: Data;
}
