import {
	Box,
	TextField,
	Button,
	Grid,
} from "@mui/material";
import { useEffect } from "react";
import createAxios from "src/Utils/axiosInstance";
import React from "react";
import SendIcon from '@mui/icons-material/Send';
import Message from "./Component/Message";
import { Client } from "@stomp/stompjs";
import { Cookies } from "react-cookie";


const ChatRoom = ({ chatId }) => {
	const [input, setInput] = React.useState("");
	const [messages, setMessage] = React.useState([]);
	const [memberId, setMemberId] = React.useState();
	const cookies = new Cookies();
	const [wsClient, setWsClient] = React.useState<Client | undefined>();

	const handleSend = () => {
		if (input.trim() !== "") {
			console.log(input);
			if (wsClient) {
				wsClient.publish({ destination: '/pub/message', body: JSON.stringify({
					roomId: chatId,
					senderId: memberId,
					nickname: cookies.get('nickname'),
					content: input,
					messageType: "MSG"
				}) });
			}
			setInput("");
		}
	};

	const handleInputChange = (event) => {
		setInput(event.target.value);
	};

	useEffect(() => {
		setMemberId(cookies.get('memberId'));
		const axiosInstance = createAxios();
		axiosInstance.get(`/api/v1/chat/${chatId}/message`)
			.then((res) => {
				console.log("chatroom:", res);
				setMessage(res.data.data);
			})
			.catch((err) => {
				console.log("chatroom:", err);
			})
		try {
			
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
					client.subscribe(`/sub/room/${chatId}`, (message) => {
						console.log(`Received: ${message.body}`);
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
	}, [chatId])


	return (
		<Box
			sx={{
				height: "50vh",
				display: "flex",
				flexDirection: "column",
				bgcolor: "grey.200",
			}}
		>
			<Box sx={{ flexGrow: 1, overflow: "auto", p: 2 }}>
				{messages ? messages.map((message) => (
					<Message key={message.messageId.value} message={message} />
				)) : <p>메세지가 없습니다.</p>}
			</Box>
			<Box sx={{ p: 2, backgroundColor: "background.default" }}>
				<Grid container spacing={2}>
					<Grid item xs={10}>
						<TextField
							fullWidth
							size="small"
							placeholder="Type a message"
							variant="outlined"
							value={input}
							onChange={handleInputChange}
						/>
					</Grid>
					<Grid item xs={2}>
						<Button
							fullWidth
							size="large"
							color="primary"
							variant="contained"
							endIcon={<SendIcon />}
							onClick={handleSend}
						>
							Send
						</Button>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
};

export default ChatRoom;