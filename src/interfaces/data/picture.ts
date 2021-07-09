import { ShareListData } from './common';

export interface PictureData {
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
  share_list: ShareListData;
  praisenum: number;
  sharenum: number;
  commentnum: number;
}

export interface PictureListData {
  res: number;
  data: PictureData;
}
