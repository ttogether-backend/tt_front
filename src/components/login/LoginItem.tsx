
import colors from '../../styles/colors';
import React, { useState } from 'react';
import ButtonsText from '../../shared/components/ButtonsText/index';
import { ButtonStyleType } from '../../shared/components/ButtonsText/ButtonsText.types';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { LoginTitle, LoginItemDiv, LoginItemWrap } from './LoginItem.style';
import { onLoginSuccess, onSilentRefresh } from "./Utils/LoginUtils";
import { useNavigate } from 'react-router-dom';

type loginType = {
	email: string,
	password: string
};


const LoginItem = () => {
	const navigate = useNavigate();

	
  const {
    register, // input field 지정
    handleSubmit,
	formState: { errors },
  } = useForm<loginType>();

  const onSubmit = (data) => {
    console.log(data);

	axios.post('/api/v1/members/login/email', {
		email : data.email,
		password : data.password
	})
	.then((res) => {
		console.log(res)
		if (res.data.success) {
			// console.log("accessToken:", accessToken, "refreshToken:", refreshToken);
			onLoginSuccess(res.data);
			navigate('/');
		}
	})
	.catch((error) => {
		console.log(error)
		document.getElementById("signinFailureMessage").style.display = 'inline';
	});
  };

  return (
    <>
	<LoginTitle>
		로그인
	</LoginTitle>
	<LoginItemWrap>
		<form onSubmit={handleSubmit(onSubmit)}>
			<LoginItemDiv>
				<span className="itemName">아이디</span>
				<input 
					className="itemIput"
					placeholder="로그인 아이디"
					{...register('email', { required: true,
						pattern: /^[a-zA-Z0-9.\-+_]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
					})}
				/>
				{errors.email && <p className="error-text">이메일 형식으로 입력해주세요.</p>}
			</LoginItemDiv>
			<LoginItemDiv>
				<span className="itemName">비밀번호</span>
				<input 
					className="itemIput"
					placeholder="비밀번호"
					type="password"
					{...register('password', { required: true })}
				/>
				{errors.password && <p className="error-text">비밀번호를 입력해주세요.</p>}
			</LoginItemDiv>
			<LoginItemDiv>
				<div id="signinFailureMessage" style = {{display:'none'}}>
						<p>아이디와 비밀번호가 일치하지 않습니다.</p>
				</div>
			</LoginItemDiv>
			<LoginItemDiv>
				<button className="submitButton" type="submit">로그인</button>
			</LoginItemDiv>
		</form>
	</LoginItemWrap>
    </>
  );
};

export default LoginItem;
