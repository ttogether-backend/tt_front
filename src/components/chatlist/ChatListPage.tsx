import Page from "src/pages/layout";
import { ChatList } from "./ChatList";
import { chatListDummy } from "./ChatListDummy";
import { useState, useEffect, useCallback, useRef } from 'react';
import createAxios from "src/Utils/axiosInstance";
import { ChatListRoomPropsType } from "./ChatListRoom/ChatListRoom.types";
import { Box, Container, Grid, Paper, styled } from "@mui/material";
import React from "react";
import ChatRoom from "./ChatRoom";

const setChatRoom = ({ data, chatId, setChatId }) => {
	console.log("chatdata :", data);
	return ({
		accompanyPost: {
			title: data.accompanyPostTitle,
			accompanyStatus: data.acoompanyStatus,
		},
		profileProps: {
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
		chatRoom: {
			id: data.roomUid,
			title: data.chatRoomTitle,
			memberCount: data.participantCnt,
			messageCount: data.notReadCnt,
		},
		chatId: chatId,
		setChatId: setChatId
	});
}

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.secondary,
}));

const ChatListPage = () => {

	const ws = useRef(null);
	const [wsConnected, setWsConnected] = useState(false);
	const [sendMsg, setSendMsg] = useState(false);
	const [chatRoomList, setChatRoomList] = useState([]);
	const [chatId, setChatId] = useState();

	useEffect(() => {
		const axiosInstance = createAxios();
		axiosInstance.get('/api/v1/chat/chat-room')
			.then((res) => {
				console.log("chatroom : ", res.data.data);
				const rooms: ChatListRoomPropsType[] = [];

				res.data.data.map((data) => (
					rooms.push(setChatRoom({ data, chatId, setChatId }))
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
			<Container maxWidth="md" style={{ marginTop: '50px' }}>
				<Grid container spacing={0} justifyContent="center">
					<Grid xs={4}>
						<Box
							sx={{
								height: "50vh",
								display: "flex",
								flexDirection: "row",
								bgcolor: "grey.200",
							}}
						>
							<ChatList chatRoomList={chatRoomList} />
						</Box>
					</Grid>
					<Grid xs={8}>
						<React.Fragment>
							{chatId ? <ChatRoom chatId={chatId} /> :
								<Item>선택된 채팅방이 없습니다.</Item>}
						</React.Fragment>
					</Grid>
				</Grid>
			</Container>
		</Page>
	)
}

export default ChatListPage;