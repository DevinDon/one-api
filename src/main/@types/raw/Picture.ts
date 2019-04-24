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
  hpcontent_id: string;
  hp_title: string;
  author_id: string;
  hp_img_url: string;
  hp_img_original_url: string;
  hp_author: string;
  ipad_url: string;
  hp_content: string;
  hp_makettime: string;
  last_update_date: string;
  web_url: string;
  wb_img_url: string;
  image_authors: string;
  text_authors: string;
  image_from: string;
  text_from: string;
  content_bgcolor: string;
  template_category: string;
  maketime: string;
  share_list: ShareList;
  praisenum: number;
  sharenum: number;
  commentnum: number;
}

export interface Picture {
  res: number;
  data: Data;
}
