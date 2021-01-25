import { AuthorData, AuthorListData, ShareListData, TagListData } from './common';

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
  author: AuthorData[];
  maketime: string;
  author_list: AuthorListData[];
  next_id: string;
  previous_id: string;
  tag_list: TagListData[];
  share_list: ShareListData;
  praisenum: number;
  sharenum: number;
  commentnum: number;
}
