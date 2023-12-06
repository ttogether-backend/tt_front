import { Cookies } from 'react-cookie';
import axios from "axios";

const cookies = new Cookies();

export const onSilentRefresh = () => {
	const refreshToken = cookies.get('refreshToken');
	const memberId = cookies.get('memberId');

	console.log(refreshToken, memberId)
	if (!refreshToken && !memberId) {
		console.log('not have a token')
	}
	else {
		axios.post('/api/v1/members/token/reissue', null, {
			headers: {
				'Authorization-Refresh' : refreshToken,
				'Member-Id' : memberId
			}
		})
		.then((res) => {
			console.log(res);
			axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.data.accessToken;
		})
	}
	
}

export const onLoginSuccess = (data) => {
	const memberId = data.data.memberId;
	const { accessToken, refreshToken } = data.data.token;
	const JWT_EXPRIY_TIME = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
			
	axios.defaults.headers.common['Authorization'] = 'Bearer ' + accessToken;
	cookies.set('refreshToken', refreshToken, { path: '/', expires: JWT_EXPRIY_TIME });
	cookies.set('memberId', memberId, { path: '/', expires: JWT_EXPRIY_TIME });
}

export const isLogin = () => {
	if (cookies.get('refreshToken')) {
		return true;
	}
	return false;
}