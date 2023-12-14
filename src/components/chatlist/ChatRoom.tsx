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

const messages = [
	{ id: 1, text: "Hi there!", sender: "bot" },
	{ id: 2, text: "Hello!", sender: "user" },
	{ id: 3, text: "How can I assist you today?", sender: "bot" },
  ];


const ChatRoom = ({ chatId }) => {
	const [input, setInput] = React.useState("");

	const handleSend = () => {
	  if (input.trim() !== "") {
		console.log(input);
		setInput("");
	  }
	};
  
	const handleInputChange = (event) => {
	  setInput(event.target.value);
	};

	useEffect(() => {
		const axiosInstance = createAxios();
		axiosInstance.get(`/api/v1/chat/${chatId}/message`)
			.then((res) => {
				console.log("chatroom:", res);
			})
			.catch((err) => {
				console.log("chatroom:", err);
			})
	}, [])


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
			{messages.map((message) => (
			  <Message key={message.id} message={message} />
			))}
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