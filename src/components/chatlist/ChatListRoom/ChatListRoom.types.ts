import { ProfileSquarePropsType } from 'src/shared/components/ProfileSqure/ProfileSquare.types';

export interface ChatListRoomPropsType {
  accompanyPost: AccompanyPost;
  profileProps: ProfileSquarePropsType;
  messageInfo: LatestMessage;
  chatRoom: ChatRoom;
}

export interface ChatRoom {
  id: number;
  title: string;
  memberCount: number;
  messageCount: number;
}
export interface LatestMessage {
  message: string;
  time: string;
}

export interface AccompanyPost {
  title: string;
  accompanyStatus: AccompanyStatus;
}

export enum AccompanyStatus {
  READY = '동행준비',
  CONFIRM = '동행확정',
  COMPLETE = '동행완료',
  CANCEL = '동행취소',
}
