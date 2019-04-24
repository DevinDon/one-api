export interface Answerer {
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

export interface Asker {
  user_id: string;
  user_name: string;
  web_url: string;
  summary: string;
  desc: string;
  is_settled: string;
  settled_type: string;
  fans_total: string;
  wb_name: string;
}

export interface AuthorList {
  user_id: string;
  user_name: string;
  web_url: string;
  summary: string;
  desc: string;
  is_settled: string;
  settled_type: string;
  fans_total: string;
  wb_name: string;
}

export interface AskerList {
  user_id: string;
  user_name: string;
  web_url: string;
  summary: string;
  desc: string;
  is_settled: string;
  settled_type: string;
  fans_total: string;
  wb_name: string;
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
  question_id: string;
  question_title: string;
  question_content: string;
  answer_title: string;
  answer_content: string;
  question_makettime: string;
  recommend_flag: string;
  charge_edt: string;
  charge_email: string;
  last_update_date: string;
  web_url: string;
  read_num: string;
  guide_word?: any;
  audio: string;
  anchor: string;
  cover: string;
  content_bgcolor: string;
  cover_media_type: string;
  cover_media_file: string;
  start_video: string;
  copyright: string;
  audio_duration: string;
  answerer: Answerer;
  asker: Asker;
  author_list: AuthorList[];
  asker_list: AskerList[];
  next_id: string;
  previous_id: string;
  tag_list: any[];
  share_list: ShareList;
  praisenum: number;
  sharenum: number;
  commentnum: number;
}

export interface Question {
  res: number;
  data: Data;
}
