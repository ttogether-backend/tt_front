import { FC } from 'react';
import { ChatListPropsType } from 'src/components/chatlist/ChatList.types.ts';
import { ChatListRoom } from './ChatListRoom/ChatListRoom.tsx';
import * as Style from 'src/components/chatlist/ChatList.styles.ts';
import ChatRoomItem from './ChatListRoom/ChatRoom.tsx';

export const ChatList: FC<ChatListPropsType> = (props) => {
  return(
    <Style.ChatListContainer>
    {props.chatRoomList.map((element) => (
      <ChatRoomItem
        accompanyPost={element.accompanyPost}
        profileProps={element.profileProps}
        messageInfo={element.messageInfo}
        chatRoom={element.chatRoom}/>
      ))}
    </Style.ChatListContainer>
  );

}