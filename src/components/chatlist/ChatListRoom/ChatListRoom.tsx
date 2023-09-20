import { FC } from 'react';
// import Badges from '../../Badges';
import * as Style from 'src/components/chatlist/ChatListRoom/ChatListRoom.styles';
import { ChatListRoomPropsType } from './ChatListRoom.types';
import { ProfileSquare } from 'src/shared/components/ProfileSqure/ProfileSquare';

export const ChatListRoom: FC<ChatListRoomPropsType> = (props) => {
  const { chatRoom, profileProps, /*accompanyPost,*/ messageInfo } = props;
  return (
    <Style.ChatListRoomContainer>
      <Style.ChatProfileContainer>
        <ProfileSquare {...profileProps} />
      </Style.ChatProfileContainer>
      <Style.ChatHeader>
        <Style.ChatRoomTile>{chatRoom.title}</Style.ChatRoomTile>
        <Style.ChatRoomMemberCount>{chatRoom.memberCount}</Style.ChatRoomMemberCount>
        <Style.ChatTime>{messageInfo.time}</Style.ChatTime>
      </Style.ChatHeader>
      <div
        style={{
          gridArea: 'chat-room-body',
        }}
      ></div>
      <div
        style={{
          gridArea: 'accompany-post',
        }}
      ></div>
    </Style.ChatListRoomContainer>
  );
};
