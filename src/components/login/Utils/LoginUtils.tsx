import { Cookies } from 'react-cookie';
import axios from "axios";

const cookies = new Cookies();

export const onSilentRefresh = () => {
	const refreshToken = cookies.get('refreshToken');
	const memberId = cookies.get('memberId');
	const JWT_EXPRIY_TIME = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);

	axios.post('/api/v1/members/token/reissue', null, {
		headers: {
			'Authorization-Refresh' : refreshToken,
			'Member-Id' : memberId
		}
	})
	.then((res) => {
		cookies.set('accessToken', res.data.data.accessToken, {path: '/', expires: JWT_EXPRIY_TIME} );
		cookies.set('refreshToken', refreshToken, {path: '/', expires: JWT_EXPRIY_TIME} );
		cookies.set('memberId', memberId, {path: '/', expires: JWT_EXPRIY_TIME} );
	})
	
}

export const onLoginSuccess = (data) => {
	const memberId = data.data.memberId;
	const { accessToken, refreshToken } = data.data.token;
	const JWT_EXPRIY_TIME = new Date(new Date().getTime() + 1 * 60 * 60 * 1000);
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

export const kakaoLogin = () => {
	axios.post('/api/v1/members/login/social/KAKAO')
	.then((res) => {
		console.log(res);
	})
	.catch((err) => {
		console.log(err);
	})
}

export const setItemWithExpire = (key, value, tts) =>  {
	const obj = {
		value : value,
		expire : Date.now() + tts
	}

	const objString = JSON.stringify(obj);
	localStorage.setItem(key, objString);
}

export const redirectHome = () => {
	const homeurl = "http://localhost:5173/";
	setTimeout(function(){ window.location.replace(homeurl)}, 100);
}