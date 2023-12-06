import { Cookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Logout = (() => {
	const navigate = useNavigate();
	const cookies = new Cookies();

	useEffect(() => {
		
		if (cookies.get('refreshToken')) {
			cookies.remove('refreshToken');
			cookies.remove('memberId');
			console.log('logout compeletely')
		}
		else {
			console.log("로그인 된 상태가 아닙니다")
		}
		navigate('/');
	}, [navigate]);
	return (
		<>
		</>
	)	
})

export default Logout;
