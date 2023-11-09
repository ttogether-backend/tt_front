
import colors from '../../styles/colors';
import React, { useState } from 'react';
import ButtonsText from '../../shared/components/ButtonsText/index';
import { ButtonStyleType } from '../../shared/components/ButtonsText/ButtonsText.types';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { LoginTitle, LoginItemDiv, LoginItemWrap } from './LoginItem.style';


type loginType = {
	email: string,
	password: string
};

axios.defaults.withCredentials = true;

const LoginItem = () => {
  const {
    register, // input field 지정
    handleSubmit,
	formState: { errors },
  } = useForm<loginType>();

  const onSubmit = (data) => {
    console.log(data);
	axios.post('http://localhost:8000/api/v1/members/login/email', {
		email : data.email,
		password : data.password
	})
	.then((res) => {
		console.log(res)
	})
	.catch((error) => {
		console.log(error)
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
				<button className="submitButton" type="submit">로그인</button>
			</LoginItemDiv>
		</form>
	</LoginItemWrap>
    </>
  );
};

export default LoginItem;
