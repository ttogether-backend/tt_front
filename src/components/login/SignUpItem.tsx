import React, { useState } from 'react';
import ButtonsText from '../../shared/components/ButtonsText/index';
import { ButtonStyleType } from '../../shared/components/ButtonsText/ButtonsText.types';
import { useForm, SubmitHandler } from 'react-hook-form';
import PrivacyJoin from './PrivacyJoin';
import { SignUpTitle, SignUpItemDiv, ValidItemDiv, SignUpItemWrap } from './SignUpItem.style';
import axios from 'axios';
import axiosCreate from '../../Utils/axiosInstance';
import { getCookie } from './cookie';
import Timer from './Utils/AuthTimer';
import { useNavigate } from 'react-router';


let isValidEmail = false;
const axiosInstance = axiosCreate();

type loginType = {
	nickname: string;
	loginId: string;
	password: string;
	passwordConfirm: string;
	name: string;
	phoneNumber: string;
	termsAgreementList: (number | boolean)[];
};

const SendValidationEmail = (email) => {

	console.log(email);
	axiosInstance.post('/api/v1/members/code/issue',
		{ email: email }
	)
		.then((response) => { 
			console.log("send email = ", response.data) })
		.catch((Error) => { console.log("send email = ", Error) });
	const el = document.getElementById('validation');
	el.style.display = 'inline';

}


const ValidateCode = (data) => {
	const jwt = getCookie('Verification-Jwt');

	axios({
		method: 'post',
		url: '/api/v1/members/code/verify',
		data: {
			email: data[0],
			code: data[1]
		},
		headers: {
			'Verification-Jwt': jwt
		}

	})
		.then((response) => {
			if (response.data.data) {
				document.getElementById("emailValidateButton").setAttribute("disabled", "disabled");
				document.getElementById("validation").style.display = 'none';
				document.getElementById("validSuccessMessage").style.display = 'inline';
				isValidEmail = true;
			}
			else {
				alert("인증번호를 다시 확인해주세요.");
			}

		})
		.catch((error) => {
			if (error.response) {
				console.log(error.response.data);
			} else if (error.request) {
				console.log(error.request);
			} else {
				console.log('Error', error.message);
			}
		});
}

const SignUpItem = () => {
	const [count, setCount] = useState(300);
	const {
		register, // input field 지정
		handleSubmit,
		formState: { errors },
		trigger,
		getValues,
	} = useForm<loginType>();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		console.log(data);
		document.getElementById("notEqualPassword").style.display = 'none';
		if (data.password != data.passwordConfirm) {
			console.log("비밀번호가 맞지 않습니다");
			document.getElementById("notEqualPassword").style.display = 'inline';
			return
		}
		if (!isValidEmail) {
			alert("이메일 인증이 필요합니다.");
			return
		}
		const jwt = getCookie('Verified-jwt');
		axios({
			method: 'post',
			url: '/api/v1/members/register/email',
			data: {
				loginId: data.loginId,
				password: data.password,
				name: data.name,
				nickname: data.nickname,
				phoneNumber: data.phoneNumber,
				authority: 'USER',
				memberType: 'EMAIL',
				termsAgreementList: [{ "termsId": 1, "agree": true }, { "termsId": 2, "agree": true }]
			},
			headers: {
				'Verified-Jwt': jwt
			}
		})
			.then((response) => {
				console.log(response.data)
				navigate('/login');
			})
			.catch((error) => {
				if (error.response) {
					console.log(error.response.data);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log('Error', error.message);
				}
			});
	};

	return (
		<>
			<SignUpTitle>
				회원가입
			</SignUpTitle>
			<SignUpItemWrap>
				<form onSubmit={handleSubmit(onSubmit)}>
					<SignUpItemDiv>
						<span className="itemName">닉네임</span>
						<input
							className="itemIput"
							placeholder="닉네임을 입력해주세요."
							{...register('nickname', { required: true })}
						/>
						{errors.nickname && <p>닉네임은 필수입니다.</p>}
					</SignUpItemDiv>
					<SignUpItemDiv>
						<span className="itemName">이메일</span>
						<ValidItemDiv>
							<input
								id="email"
								className="validItemIput"
								placeholder="이메일을 입력해주세요."{...register('loginId', {
									required: true,
									pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									minLength: 5,
									maxLength: 60
								})}
							/>
							<button
								id="emailValidateButton"
								className="validButton"
								type="button"
								onClick={async () => {
									const valid = await trigger("loginId")
									console.log("valid = " + valid)
									if (valid) {
										const email = getValues("loginId")
										await SendValidationEmail(email)
									}
								}}>이메일 인증</button>
						</ValidItemDiv>
						{errors.loginId && <p>이메일 형식으로 입력해주세요.</p>}
						<div id="validSuccessMessage" style={{ display: 'none' }}>
							<p>이메일 인증이 완료되었습니다.</p>
						</div>
					</SignUpItemDiv>
					<div id='validation' style={{ display: 'none' }}>
						<SignUpItemDiv>
							<span
								className="itemName">인증번호</span>
							<ValidItemDiv>
								<input
									className="validItemIput"
									{...register('code')}
								/>
								<button className="validButton"
									type="button"
									onClick={async () => {
										const data = getValues(["loginId", "code"])
										ValidateCode(data);
									}}>인증</button>
							</ValidItemDiv>
							<ValidItemDiv>
								<p>메일로 발송된 인증번호를 입력해주세요.</p>
								<Timer count={count} setCount={setCount} />
							</ValidItemDiv>
						</SignUpItemDiv>
					</div>
					<SignUpItemDiv>
						<span className="itemName">비밀번호</span>
						<input
							className="itemIput"
							placeholder="영어,숫자,특수문자 중 3가지 이상 조합 8~20자"
							type="password"
							{...register('password', {
								required: true,
								pattern: /^(?=.*[A-Za-z])(?=.*[0-9!@#\$%^&*])[A-Za-z0-9!@#\$%^&*]+$/,
								minLength: 8,
								maxLength: 20
							})}
						/>
						{errors.password && <p>비밀번호는 필수입니다.</p>}
					</SignUpItemDiv>
					<SignUpItemDiv>
						<span className="itemName">비밀번호 확인</span>
						<input
							className="itemIput"
							placeholder="영어,숫자,특수문자 중 3가지 이상 조합 8~20자"
							type="password"
							{...register('passwordConfirm', {
								required: true,
								pattern: /^(?=.*[A-Za-z])(?=.*[0-9!@#\$%^&*])[A-Za-z0-9!@#\$%^&*]+$/,
								minLength: 8,
								maxLength: 20
							})}
						/>
						{errors.passwordConfirm && <p>비밀번호 확인은 필수입니다.</p>}
					</SignUpItemDiv>
					<SignUpItemDiv>
						<div id='notEqualPassword' style={{ display: 'none' }}>
							<p>비밀번호가 일치하지 않습니다.</p>
						</div>
					</SignUpItemDiv>
					<SignUpItemDiv>
						<span className="itemName">이름</span>
						<input
							className="itemIput"
							placeholder="이름을 입력해주세요."
							{...register('name', {
								required: true,
								pattern: /^[A-Za-z가-힣\\s]/,
								minLength: 1,
								maxLength: 50
							})}
						/>
						{errors.name && <p>이름은 필수입니다.</p>}
					</SignUpItemDiv>
					<SignUpItemDiv>
						<span className="itemName">휴대폰번호</span>
						<input
							className="itemIput"
							placeholder="000-0000-0000 형식으로 입력해주세요."
							{...register('phoneNumber', {
								required: true,
								pattern: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
								minLength: 3,
								maxLength: 24
							})}
						/>
						{errors.phoneNumber && <p>휴대폰번호는 필수입니다.</p>}
					</SignUpItemDiv>
					<SignUpItemDiv>
						<input className="submitButton" type="submit" />
					</SignUpItemDiv>

				</form>
			</SignUpItemWrap>
		</>
	);
};

export default SignUpItem;
