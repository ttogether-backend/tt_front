import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { Avatar, Badge, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { dateFormatting } from '../Utils/DateFormatting';
export default function ChatListItem(props) {
	const { chatRoom, profileProps, accompanyPost, messageInfo, chatId, setChatId } = props;
	const [msgCount, setMsgCount] = React.useState(chatRoom.messageCount);

	// React.useEffect(() => {
		// setIsRead(false);
	// }, [props])
	console.log("chatListItem : ", props);
	return (
		<div style={{ width: '100%' }} onClick={() => {
			setChatId(chatRoom.id)
			setMsgCount(0)
		}}>
			<ListItem alignItems="flex-start">
				<ListItemAvatar>
					<Avatar alt="profile" src={profileProps.src[0]} />
				</ListItemAvatar>
				<ListItemText
					primary={
						<React.Fragment>
							{chatRoom.title + " "}
							<Typography
								sx={{ display: 'inline' }}
								component="span"
								variant="body2"
								color="text.primary"
							>
								{chatRoom.memberCount + " "}
							</Typography>
							{msgCount > 0 && <Badge badgeContent={msgCount} color="primary" />}
							<div style={{ position: "absolute", right: 0 }}>
								
								<Typography sx={{ display: 'inline' }}
									component="span"
									variant="body2"
									color="text.primary"
								>
									{dateFormatting(messageInfo.time)}
								</Typography>
							</div>
						</React.Fragment>
					}
					secondary={
						messageInfo.message
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
		</div>
	)
}	