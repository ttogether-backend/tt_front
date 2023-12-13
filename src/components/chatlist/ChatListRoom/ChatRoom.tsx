import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function ChatRoomItem(props) {
	const { chatRoom, profileProps, accompanyPost, messageInfo } = props;
	return (
		<Link to="/">
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
								{chatRoom.memberCount}
								{messageInfo.time}
							</Typography>
						</React.Fragment>
					}
					secondary={
						messageInfo.message
					}
				/>
			</ListItem>
			<Divider variant="inset" component="li" />
		</Link>

	)
}