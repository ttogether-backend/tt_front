import { Cookies } from 'react-cookie';
import axios from "axios";
import axiosInstance from 'src/Utils/axiosInstance';

const cookies = new Cookies();

export const onAuthStatus = () => {
  const refreshToken = cookies.get('refreshToken');
  const memberId = cookies.get('memberId');
  const JWT_EXPRIY_TIME = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

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
			cookies.set('accessToken', res.data.data.accessToken, {path: '/', expires: JWT_EXPRIY_TIME} );
		})
		return true
	}
	
}

export const onLoginSuccess = (data) => {
	const memberId = data.data.memberId;
	const { accessToken, refreshToken } = data.data.token;
	const JWT_EXPRIY_TIME = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
	const config = {path: '/', expires: JWT_EXPRIY_TIME} 

	cookies.set('accessToken', accessToken, config);
	cookies.set('refreshToken', refreshToken, config);
	cookies.set('memberId', memberId, config);
}

export const isLogin = () => {
  if (cookies.get('refreshToken')) {
    return true;
  }
  return false;
};
