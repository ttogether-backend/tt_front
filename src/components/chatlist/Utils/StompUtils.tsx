import { Client } from '@stomp/stompjs';

export const connect = ({memberId, onConnect}) => {
	try {
		const clientData = new Client({
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
			onConnect: onConnect,
		});
		return clientData;
	} catch (err) {
		console.log("ws connect error : ", err);
	}
	return null;
}