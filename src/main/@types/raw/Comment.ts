interface User {
  user_id: string;
  user_name: string;
  web_url: string;
}

interface Touser {
  user_id: string;
  user_name: string;
  web_url: string;
}

export interface CommentData {
  id: string;
  quote: string;
  content: string;
  praisenum: number;
  device_token: string;
  del_flag: string;
  reviewed: string;
  user_info_id: string;
  input_date: string;
  created_at: string;
  updated_at: string;
  user: User;
  touser: Touser;
  type: number;
}

export interface RawComment {
  count: number;
  data: CommentData[];
}
