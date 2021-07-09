export interface TagListData {
  id: string;
  title: string;
}

export interface WXData {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

export interface WXTimelineData {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

export interface WeiboData {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

export interface QQData {
  title: string;
  desc: string;
  link: string;
  imgUrl: string;
  audio: string;
}

export interface ShareListData {
  wx: WXData;
  wx_timeline: WXTimelineData;
  weibo: WeiboData;
  qq: QQData;
}


export interface AuthorData {
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

export interface AuthorListData {
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
