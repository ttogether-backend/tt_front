import { Cookies } from 'react-cookie';
import axios from "axios";

const cookies = new Cookies();

export const onSilentRefresh = () => {
	const refreshToken = cookies.get('refreshToken');
	const memberId = cookies.get('memberId');

	console.log(refreshToken, memberId)
	if (!refreshToken && !memberId) {
		console.log('로그인 된 유저 없음')
		return false
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
			return res.data.data.accessToken;
		})
	}
	
}

export const onLoginSuccess = (data) => {
	const memberId = data.data.memberId;
	const { accessToken, refreshToken } = data.data.token;
	const JWT_EXPRIY_TIME = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
			
	localStorage.setItem('accessToken', accessToken);
	localStorage.setItem('refreshToken', refreshToken);
	localStorage.setItem('memberId', memberId);
}

export const isLogin = () => {
	if (cookies.get('refreshToken')) {
		return true;
	}
	return false;
}