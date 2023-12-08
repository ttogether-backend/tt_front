export interface RequestListItemProps {
  postInfo: AccompanyPostType;
  requestInfo: AccompanyRequestType;
}

export interface AccompanyPostType {
  id: number;
  title: string;
}

export interface AccompanyRequestType {
  id: number;
  requester: AccompanyRequesterType;
  date: Date;
  status: string;
}

export interface AccompanyRequesterType {
  id: string;
  nickname: string;
  profileImagePath: string;
}
