import Page from "src/pages/layout";
import { ChatList } from "./ChatList";
import { chatListDummy } from "./ChatListDummy";
import { useState, useEffect, useCallback, useRef } from 'react';
import createAxios from "src/Utils/axiosInstance";
import { ChatListRoomPropsType } from "./ChatListRoom/ChatListRoom.types";
import { Box, Container, Grid, Paper, styled } from "@mui/material";
import React from "react";
import ChatRoom from "./ChatRoom";
import { Client } from '@stomp/stompjs';
import { Cookies } from 'react-cookie';
import { connect } from "./Utils/StompUtils";


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
	height: "50vh",
	display: "flex",
	flexDirection: "row",
}));

const ChatListPage = () => {
	const [wsClient, setWsClient] = useState<Client | undefined>();
	const [sendMsg, setSendMsg] = useState(false);
	const [chatRoomList, setChatRoomList] = useState([]);
	const [chatId, setChatId] = useState();
	const [isUpdate, setIsUpdate] = useState(false);
	const cookies = new Cookies();

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
		
		if (!wsClient) {
			try {
				const memberId = cookies.get('memberId');
				const client = new Client({
					brokerURL: "ws://localhost:8000/api/v1/chat/ws",
					connectHeaders: {
						memberId: memberId,
					},
					debug: function (str) {
						console.log("ws : ", str);
					},
					reconnectDelay: 5000, // 자동 재 연결
					heartbeatIncoming: 4000,
					heartbeatOutgoing: 4000,
					onConnect: () => {
						// 채팅방 목록 업데이트를 위한 구독 추가랑 테스트를 위한 메세지 전송
						client.subscribe(`/sub/chat-room/${memberId}`, (message) => {
							console.log(`Received: ${message.body}`);
							setIsUpdate(!isUpdate)
						});
						client.publish({ destination: '/pub/message', body: 'test message' });
					},
				});
				if (client) {
					client.activate();
					setWsClient(client);
				}
			} catch (err) {
				console.log("ws connect error : ", err);
			}
			
		}
		
		// const _socket = new WebSocket('ws://localhost:8000/api/v1/chat/ws');
		// ws.current = _socket;
		// console.log(ws);
	}, [isUpdate])



	return (
		<Page>
			<Container maxWidth="md" style={{ marginTop: '50px' }}>
				<Grid container spacing={0} justifyContent="center">
					<Grid xs={5}>
						<Item>
							<ChatList chatRoomList={chatRoomList} />
						</Item>
					</Grid>
					<Grid xs={7}>
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