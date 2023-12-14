import { Avatar, Box, Paper, Typography } from "@mui/material";
import { Cookies } from "react-cookie";

const cookie = new Cookies();
const Message = ({ message }) => {
	const memberId = cookie.get('memberId');
	const isMine = message.memberId != memberId;
	return (
	  <Box
		sx={{
		  display: "flex",
		  justifyContent: isMine ? "flex-start" : "flex-end",
		  mb: 2,
		}}
	  >
		<Box
		  sx={{
			display: "flex",
			flexDirection: isMine ? "row" : "row-reverse",
			alignItems: "center",
		  }}
		>
		  <Avatar sx={{ bgcolor: isMine ? "primary.main" : "secondary.main" }}>
			{isMine ? "B" : "U"}
		  </Avatar>
		  <Paper
			variant="outlined"
			sx={{
			  p: 2,
			  ml: isMine ? 1 : 0,
			  mr: isMine ? 0 : 1,
			  backgroundColor: isMine ? "primary.light" : "secondary.light",
			  borderRadius: isMine ? "20px 20px 20px 5px" : "20px 20px 5px 20px",
			}}
		  >
			<Typography variant="body1">{message.content}</Typography>
		  </Paper>
		</Box>
	  </Box>
	);
  };

export default Message;