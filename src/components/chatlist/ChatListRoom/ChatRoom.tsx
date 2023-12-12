import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ChatRoomItem(props) {
	const { chatRoom, profileProps, accompanyPost, messageInfo } = props;
	return (
		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
			<ListItem alignItems="flex-start">

			
			<ListItemAvatar>

			</ListItemAvatar>
			<ListItemText
				primary={
					<React.Fragment>
						{chatRoom.title}
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
		</List>
	)
}