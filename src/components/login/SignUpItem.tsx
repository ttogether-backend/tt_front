import React, { useState } from 'react';
import ButtonsText from '../../shared/components/ButtonsText/index';
import { ButtonStyleType } from '../../shared/components/ButtonsText/ButtonsText.types';
import { useForm, SubmitHandler } from 'react-hook-form';
import PrivacyJoin from './PrivacyJoin';
import { SignUpTitle, SignUpItemDiv, ValidItemDiv, SignUpItemWrap } from './SignUpItem.style';
import axios from 'axios';
import { getCookie } from './cookie';


type loginType = {
  nickname: string;
  loginId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phoneNumber: string;
  termsAgreementList: (number | boolean)[];
};

axios.defaults.withCredentials = true;
// axios({
// 	method: 'get',
// 	url: 'http://ec2-44-203-114-252.compute-1.amazonaws.com:8000/api/v1/members/register/terms'
// })
// .then((response) => { console.log(response.data) })
// .catch((Error) => { console.log(Error) });

const SendValidationEmail = (email) => {
	
	console.log(email);
	axios({
		method: 'post',
		url: 'http://localhost:8000/api/v1/members/code/issue',
		data: {
			email: email
	 	}
	 })
	 .then((response) => { console.log(response.data) })
	 .catch((Error) => { console.log(Error) });
	const el = document.getElementById('validation');
	el.style.display = 'inline';

}

let codeError = false;

const ValidateCode = (data) => {
	console.log("email: ", data[0], "code: ", data[1]);
	const jwt = getCookie('Verification-Jwt');
	axios({
		method: 'post',
		url: 'http://localhost:8000/api/v1/members/code/verify',
		data: {
			email: data[0],
			code: data[1]
	 	},
		headers: {
			'Verification-Jwt': jwt
		}

	 })
	 .then((response) => { 
		console.log(response.data)
		document.getElementById("email").setAttribute("disabled", "disabled");
		document.getElementById("emailValidateButton").setAttribute("disabled", "disabled");
		document.getElementById("validation").style.display = 'none';
		document.getElementById("validSuccessMessage").style.display = 'inline';
	})
	 .catch((error) => { 
		if (error.response) {
			console.log(error.response.data);
			codeError = true;
		  } else if (error.request) {
			console.log(error.request);
		  } else {
			console.log('Error', error.message);
		  }
	  });
}

const SignUpItem = () => {
  const {
    register, // input field 지정
    handleSubmit,
	formState: { errors },
	trigger,
	getValues
  } = useForm<loginType>();

  const onSubmit = (data) => {
    console.log(data);
  };
  
//   console.log("errors", errors);

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
					{...register('nickname', {required: true})}
				/>
				{errors.nickname && <p>닉네임은 필수입니다.</p>}
			</SignUpItemDiv>
			<SignUpItemDiv>
				<span className="itemName">이메일</span>
				<ValidItemDiv>
					<input 
						id="email"
						className="validItemIput"
						placeholder="이메일을 입력해주세요."{...register('loginId', {required: true,
							pattern: /^[a-zA-Z0-9.\-+_]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/ 
						})}
					/>
					{errors.loginId && <p>이메일 형식으로 입력해주세요.</p>}
					<button 
						id="emailValidateButton"
						className="validButton"
						type="button"
						onClick= {async () => {
							const valid = await trigger("loginId")
							console.log("valid = " + valid)
							if (valid) {
								const email = getValues("loginId")
								await SendValidationEmail(email)
							}
						}}>이메일 인증</button>
				</ValidItemDiv>
				<div id="validSuccessMessage" style = {{display:'none'}}>
					<p>이메일 인증이 완료되었습니다.</p>
				</div>				
			</SignUpItemDiv>
			<div id='validation' style={{display:'none'}}>
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
							onClick = {async () => {
								const data = getValues(["loginId", "code"])
								ValidateCode(data);
							}}>인증</button>
					</ValidItemDiv>			
					{codeError &&  <p className="error-text">이메일 형식으로 입력해주세요.</p>}		
				</SignUpItemDiv>
			</div>
			<SignUpItemDiv>
				<span className="itemName">비밀번호</span>
				<input 
					className="itemIput"
					placeholder="영어,숫자,특수문자 중 2가지 이상 조합 8~20자"
					type="password"
					{...register('password', {required: true})}
				/>
				{errors.password && <p>비밀번호는 필수입니다.</p>}
			</SignUpItemDiv>
			<SignUpItemDiv>
				<span className="itemName">비밀번호 확인</span>
				<input 
					className="itemIput"
					placeholder="영어,숫자,특수문자 중 2가지 이상 조합 8~20자"
					type="password"
					{...register('passwordConfirm', {required: true})}
				/>
				{errors.passwordConfirm && <p>비밀번호 확인은 필수입니다.</p>}
			</SignUpItemDiv>
			<SignUpItemDiv>
				<span className="itemName">이름</span>
				<input 
					className="itemIput"
					placeholder="이름을 입력해주세요."
					{...register('name', {required: true})}
				/>
				{errors.name && <p>이름은 필수입니다.</p>}
			</SignUpItemDiv>
			<SignUpItemDiv>
				<span className="itemName">휴대폰번호</span>
				<input 
					className="itemIput"
					placeholder="000-0000-0000 형식으로 입력해주세요."
					pattern="^[0-9]{3}-[0-9]{4}-[0-9]{4}$"
					{...register('phoneNumber', {required: true})}
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
