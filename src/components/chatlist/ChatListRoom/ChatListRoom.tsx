import { FC } from 'react';
import * as Style from 'src/components/chatlist/ChatListRoom/ChatListRoom.styles';
import { ChatListRoomPropsType } from './ChatListRoom.types';
import { ProfileSquare } from 'src/shared/components/ProfileSqure/ProfileSquare';
import { ChatCountBadge, ChatStateBadge } from 'src/shared/components/Badges/Badges.style.tsx';

export const ChatListRoom: FC<ChatListRoomPropsType> = (props) => {
  const { chatRoom, profileProps, accompanyPost, messageInfo } = props;
  return (
    <Style.ChatListRoomContainer>
      <Style.ChatProfileContainer>
        <ProfileSquare {...profileProps} />
      </Style.ChatProfileContainer>
      <Style.ChatRoom>
        <Style.ChatHeader>
          <Style.ChatRoomTitle>{chatRoom.title}</Style.ChatRoomTitle>
          <Style.ChatRoomMemberCount>{chatRoom.memberCount}</Style.ChatRoomMemberCount>
          <Style.ChatTime>{messageInfo.time}</Style.ChatTime>
        </Style.ChatHeader>
        <Style.ChatBody>
          <Style.ChatMessage>{messageInfo.message}</Style.ChatMessage>
          <Style.ChatAlarm>
            <ChatCountBadge subType={""} text={chatRoom.messageCount.toString()}/>
          </Style.ChatAlarm>
        </Style.ChatBody>
        <Style.AccompanyPost>
          <Style.AccompanyStatus>
            <ChatStateBadge subType={""} text={accompanyPost.accompanyStatus}/>
          </Style.AccompanyStatus>
          <Style.AccompanyTitle>{accompanyPost.title}</Style.AccompanyTitle>
        </Style.AccompanyPost>
      </Style.ChatRoom>

    </Style.ChatListRoomContainer>
  );
};
