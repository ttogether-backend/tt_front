import React from 'react';
import { Navigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';

const PrivateRoute = ({component:Component}) => {
	const cookies = new Cookies();
	return (
		cookies.get('accessToken') ? Component:<Navigate to="/login" {...alert("로그인이 필요합니다.")}></Navigate>
	)
}

export default PrivateRoute;