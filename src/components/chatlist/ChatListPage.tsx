import Page from "src/pages/layout";
import { ChatList } from "./ChatList";
import { chatListDummy } from "./ChatListDummy";
import { useState, useEffect, useCallback, useRef } from 'react';
import createAxios from "src/Utils/axiosInstance";
import { ChatListRoomPropsType } from "./ChatListRoom/ChatListRoom.types";

const setChatRoom = (data) => {
	console.log("chatdata :", data);
	return ({
		accompanyPost : {
		  title: data.accompanyPostTitle,
		  accompanyStatus: data.acoompanyStatus,
		},
		profileProps : {
		  profileCount: 3,
		  src: [
			'src/shared/components/ProfileSqure/Ellipse498.svg',
			'src/shared/components/ProfileSqure/Ellipse498.svg',
			'src/shared/components/ProfileSqure/Ellipse498.svg',
		  ],
		},
		messageInfo: {
		  message: data.lastMessage ? data.lastMessage : '메세지 없음',
		  time: data.lastMessageAt ? data.lastMessageAt : '',
		},
		chatRoom : {
		  id: data.roomUid,
		  title: data.chatRoomTitle,
		  memberCount: data.participantCnt,
		  messageCount: data.notReadCnt,
		}
	  });
}

const ChatListPage = () => {

	const ws = useRef(null);
	const [wsConnected, setWsConnected] = useState(false);
	const [sendMsg, setSendMsg] = useState(false);
	const [chatRoomList, setChatRoomList] = useState([]);

	useEffect(() => {
		const axiosInstance = createAxios();
		axiosInstance.get('/api/v1/chat/chat-room')
		.then((res) => {
			console.log("chatroom : ", res.data.data);
			const rooms : ChatListRoomPropsType[] = [];

			res.data.data.map((data) => (
				rooms.push(setChatRoom(data))
			))
			setChatRoomList(rooms);
			console.log("rooms:", rooms);

		})
		.catch((err) => {
			console.log("chatroom: ", err);
		})
		// const _socket = new WebSocket('ws://localhost:8000/api/v1/chat/ws');
		// ws.current = _socket;
		// console.log(ws);
	}, [])


	return (
		<Page>
			<ChatList chatRoomList={chatRoomList} />
		</Page>	
	)
}

export default ChatListPage;