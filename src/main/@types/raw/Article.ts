interface Author {
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

interface AuthorList {
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

interface TagList {
  id: string;
  title: string;
}

interface Wx {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

interface WxTimeline {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

interface Weibo {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

interface Qq {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

interface ShareList {
  wx: Wx;
  wx_timeline: WxTimeline;
  weibo: Weibo;
  qq: Qq;
}

export interface ArticleData {
  content_id: string;
  hp_title: string;
  sub_title: string;
  hp_author: string;
  auth_it: string;
  hp_author_introduce: string;
  hp_content: string;
  hp_makettime: string;
  hide_flag: string;
  wb_name: string;
  wb_img_url: string;
  last_update_date: string;
  web_url: string;
  guide_word: string;
  audio: string;
  anchor: string;
  editor_email: string;
  top_media_type: string;
  top_media_file: string;
  top_media_image: string;
  start_video: string;
  copyright: string;
  audio_duration: string;
  cover: string;
  author: Author[];
  maketime: string;
  author_list: AuthorList[];
  next_id: string;
  previous_id: string;
  tag_list: TagList[];
  share_list: ShareList;
  praisenum: number;
  sharenum: number;
  commentnum: number;
}
