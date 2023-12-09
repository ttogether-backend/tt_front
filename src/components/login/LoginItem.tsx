
import colors from '../../styles/colors';
import React, { useState } from 'react';
import ButtonsText from '../../shared/components/ButtonsText/index';
import { ButtonStyleType } from '../../shared/components/ButtonsText/ButtonsText.types';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { LoginTitle, LoginItemDiv, LoginItemWrap, ExtraButton } from './LoginItem.style';
import { onLoginSuccess, kakaoLogin } from "./Utils/LoginUtils";
import { useNavigate, Link } from 'react-router-dom';

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
			email: data.email,
			password: data.password
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
						<input
							className="itemIput"
							placeholder="아이디"
							{...register('email', {
								required: true,
								pattern: /^[a-zA-Z0-9.\-+_]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
							})}
						/>
						{errors.email && <p className="error-text">이메일 형식으로 입력해주세요.</p>}
					</LoginItemDiv>
					<LoginItemDiv>
						<input
							className="itemIput"
							placeholder="비밀번호"
							type="password"
							{...register('password', { required: true })}
						/>
						{errors.password && <p className="error-text">비밀번호를 입력해주세요.</p>}
					</LoginItemDiv>
					<LoginItemDiv>
						<div id="signinFailureMessage" style={{ display: 'none' }}>
							<p className="error-text">아이디 또는 비밀번호가 맞지 않습니다.</p>
						</div>
					</LoginItemDiv>
					<LoginItemDiv>
						<button className="submitButton" type="submit">로그인</button>
					</LoginItemDiv>
					<LoginItemDiv>
						<ExtraButton>
							<div>아이디/비밀번호 찾기</div>
							<div><Link to="/signup">회원가입</Link></div>
						</ExtraButton>
					</LoginItemDiv>
					<LoginItemDiv>
						<div className="hr-sect">
							간편 로그인
						</div>
					</LoginItemDiv>
					<LoginItemDiv>
						<button className="kakaoLogin" onClick={kakaoLogin}>카카오톡으로 로그인</button>
					</LoginItemDiv>
					<LoginItemDiv>
						<button className="naverLogin">네이버로 로그인</button>
					</LoginItemDiv>
					<LoginItemDiv>
						<button className="googleLogin">구글로 로그인</button>
					</LoginItemDiv>
				</form>
			</LoginItemWrap>
		</>
	);
};

export default LoginItem;
