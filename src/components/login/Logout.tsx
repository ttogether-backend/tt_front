import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Logout = (() => {
	const navigate = useNavigate();
	const cookies = new Cookies();

	useEffect(() => {
		
		if (cookies.get('accessToken')) {
			cookies.remove('refreshToken');
			cookies.remove('accessToken')
			cookies.remove('memberId');
			localStorage.removeItem('nickname');
			localStorage.removeItem('profileImagePath')
			console.log('logout compeletely')
		}
		else {
			console.log("로그인 된 상태가 아닙니다")
		}
		setTimeout(function(){ window.location.replace('http://localhost:5173/')}, 100);
	}, []);
	return (
		<>
		</>
	)	
})

export default Logout;
