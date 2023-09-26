import { FC } from 'react';
// import { CustomDatepicker } from 'src/shared/components/Datepicker/Datepicker.tsx';
import { ProfileSquare } from 'src/shared/components/ProfileSqure/ProfileSquare.tsx';
import Page from 'src/pages/layout/index.tsx';
import {
  AccompanyPost,
  AccompanyStatus, ChatRoom,
  LatestMessage,
} from 'src/components/chatlist/ChatListRoom/ChatListRoom.types.ts';
import {
  ProfileSquarePropsType
} from 'src/shared/components/ProfileSqure/ProfileSquare.types.ts';
import { ChatListRoom } from 'src/components/chatlist/ChatListRoom/ChatListRoom.tsx';
import { ChatList } from 'src/components/chatlist/ChatList.tsx';
import { chatListDummy } from 'src/components/chatlist/ChatListDummy.ts';

export const Test1:FC = () => {
  const myAccompanyPost: AccompanyPost = {
    title: '영월도 백패킹 가실 분',
    accompanyStatus: AccompanyStatus.READY,
  };
  const myProfileProps: ProfileSquarePropsType = {
    profileCount: 3,
    src: [
      'src/shared/components/ProfileSqure/Ellipse498.svg',
      'src/shared/components/ProfileSqure/Ellipse498.svg',
      'src/shared/components/ProfileSqure/Ellipse498.svg',
    ],
  };
  const myMessageInfo: LatestMessage = {
    message:
      '죄송합니다 ㅠㅠ 일정이 취소되어가지구 동행 취소해야할 거 같아요. 방장님께는 미리 취소 신청 보내겠습니다 죄송합니다',
    time: '11:54am',
  };
  const myChatRoom: ChatRoom = {
    id: 3,
    title: '하이디라오 조지기 모임 구로구 월요일 오후 2시',
    memberCount: 4,
    messageCount: 1,
  };
  return <Page>
    {/*<CustomDatepicker />*/}
    <ChatList chatRoomList={chatListDummy}/>
    <ChatListRoom
      accompanyPost={myAccompanyPost}
      profileProps={myProfileProps}
      messageInfo={myMessageInfo}
      chatRoom={myChatRoom}
    />
    <ProfileSquare profileCount={1} src={[
    'src/shared/components/ProfileSqure/Rectangle6280.svg',
  ]} /><ProfileSquare profileCount={2} src={[
    'src/shared/components/ProfileSqure/Component1.svg',
    'src/shared/components/ProfileSqure/Ellipse498.svg',
  ]} /><ProfileSquare profileCount={3} src={[
    'src/shared/components/ProfileSqure/Rectangle6280.svg',
    'src/shared/components/ProfileSqure/Rectangle6281.svg',
    'src/shared/components/ProfileSqure/img.png',
  ]} /><ProfileSquare profileCount={4} src={[
    'src/shared/components/ProfileSqure/Component1.svg',
    'src/shared/components/ProfileSqure/Ellipse498.svg',
    'src/shared/components/ProfileSqure/img.png',
    'src/shared/components/ProfileSqure/Component1.svg',
  ]} /></Page>
}