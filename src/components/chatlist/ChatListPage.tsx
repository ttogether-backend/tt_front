import Page from "src/pages/layout";
import { ChatList } from "./ChatList";
import { chatListDummy } from "./ChatListDummy";
import { useState, useEffect, useCallback, useRef } from 'react';
import createAxios from "src/Utils/axiosInstance";
import { ChatListRoomPropsType } from "./ChatListRoom/ChatListRoom.types";
import { Box, Container, Grid, Paper, styled } from "@mui/material";
import React from "react";
import ChatRoom from "./ChatRoom";
import { Client, IMessage } from '@stomp/stompjs';
import { Cookies } from 'react-cookie';
import { useParams } from "react-router";


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
	height: "700px",
	display: "flex",
	flexDirection: "row",
}));

const ChatListPage = () => {
	const [wsClient, setWsClient] = useState<Client | undefined>();
	const [chatRoomList, setChatRoomList] = useState([]);
	const [chatId, setChatId] = useState();
	const [isUpdate, setIsUpdate] = useState<IMessage | undefined>();
	const { memberId } = useParams();
	const cookies = new Cookies();

	useEffect(() => {
		const axiosInstance = createAxios();
		axiosInstance.get('/api/v1/chat/chat-room')
			.then((res) => {
				// console.log("chatroom : ", res.data.data);
				const rooms: ChatListRoomPropsType[] = [];

				res.data.data.map((data) => (
					rooms.push(setChatRoom({ data, chatId, setChatId }))
				))
				setChatRoomList(rooms);
				// console.log("rooms:", rooms);

			})
			.catch((err) => {
				console.log("chatroom: ", err);
			})
		if (memberId) {
			axiosInstance.get('/api/v1/chat/chat-room/direct/' + memberId)
				.then((res) => {
					setChatId(res.data.data);
				})
				.catch((err) => {
					console.log("direct chat: ", err);
				})
		}
	}, [isUpdate])

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
				reconnectDelay: 5000,
				heartbeatIncoming: 4000,
				heartbeatOutgoing: 4000,
				onConnect: () => {
					// 채팅방 목록 업데이트를 위한 구독 
					client.subscribe(`/sub/chat-room/${memberId}`, (message) => {
						console.log(`Received: ${message.body}`);
						setIsUpdate(message)
					});
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

	return (
		<Page>
			<Container style={{ width: '1000px', height: '700px', marginTop: '5em', marginBottom: '5em' }}>
				<Grid container spacing={0} style={{ width: '800px', height: '700px'}}>
					<Grid item xs={4}>
						<ChatList chatRoomList={chatRoomList} />
					</Grid>
					<Grid item xs={8} >
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