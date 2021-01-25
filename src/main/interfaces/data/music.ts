import { AuthorData, AuthorListData, ShareListData } from './common';

export interface MusicData {
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
  author: AuthorData;
  story_author: AuthorData;
  author_list: AuthorListData[];
  feeds_cover: string;
  next_id: string;
  previous_id: string;
  tag_list: any[];
  share_list: ShareListData;
  music_exception: string;
  sharenum: number;
  commentnum: number;
}

export interface MusicListData {
  res: number;
  data: MusicData;
}
