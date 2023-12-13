import { FC } from 'react';
import { ChatListPropsType } from 'src/components/chatlist/ChatList.types.ts';
import * as Style from 'src/components/chatlist/ChatList.styles.ts';
import ChatListItem from './ChatListRoom/ChatListItem.tsx';
import { List } from '@mui/material';


export const ChatList: FC<ChatListPropsType> = (props) => {
	return (
		<Style.ChatListContainer>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
				{props.chatRoomList.map((element) => (
					<ChatListItem
						key={element.chatRoom.id}
						accompanyPost={element.accompanyPost}
						profileProps={element.profileProps}
						messageInfo={element.messageInfo}
						chatRoom={element.chatRoom}
						chatId={element.chatId}
						setChatId={element.setChatId} />
				))}
			</List>
		</Style.ChatListContainer>
	);

}