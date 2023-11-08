import styled from '@emotion/styled';
import colors from '../../styles/colors';
import React, { useState } from 'react';
import ButtonsText from '../../shared/components/ButtonsText/index';
import { ButtonStyleType } from '../../shared/components/ButtonsText/ButtonsText.types';
import { useForm, SubmitHandler } from 'react-hook-form';
import PrivacyJoin from './PrivacyJoin';
import { SignUpTitle, SignUpWrap } from './SignUpPage.style';
import axios from 'axios';

export const SignUpItemWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 454.5px;

  .submitButton {
    width: 100%;
    height: 50px;
    margin-top: 10.73px;
    background-color: #64c243;
    border: transparent;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-family: Pretendard Variable;
  }

  .validButton {
    width: 30%;
    height: 50px;
    margin-top: 10.73px;
    background-color: #64c243;
    border: transparent;
    border-radius: 10px;
    color: white;
    font-weight: bold;
    font-family: Pretendard Variable;
  }
`;

export const SignUpItemDiv = styled.div`
  font-family: Pretendard Variable;
  width: 454.5px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  .itemName {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-size: 18px;
    font-weight: bold;
	text-align: left; 
  }

  .error-text {
    font-size: 14px;
    margin-top: 8px;
    color: red;
  }

  .itemIput {
    font-family: Pretendard Variable;
    height: 49px;
    border-radius: 5px;
    border: 1px solid;
    border-color: #d9d9d9;
    :focus {
      outline: none;
    }

    .placeholder {
      color: #acacb3;
    }
  }

  .validItemIput {
	font-family: Pretendard Variable;
	width: 70%;
    height: 49px;
    border-radius: 5px;
    border: 1px solid;
    border-color: #d9d9d9;
    :focus {
      outline: none;
    }

    .placeholder {
      color: #acacb3;
    }
  }
`;

type loginType = {
  nickname: string;
  loginId: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phoneNumber: string;
  termsAgreementList: (number | boolean)[];
};

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
		url: 'http://ec2-44-203-114-252.compute-1.amazonaws.com:8000/api/v1/members/code/issue',
		data: {
			email: email
	 	}
	 })
	 .then((response) => { console.log(response.data) })
	 .catch((Error) => { console.log(Error) });
	const el = document.getElementById('validation');
	el.style.display = 'inline';
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
				<input 
					className="itemIput"
					placeholder="이메일을 입력해주세요."{...register('loginId', {required: true,
						pattern: /^[a-zA-Z0-9.\-+_]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/ 
					})}
				/>
				{errors.loginId && <p>이메일 형식으로 입력해주세요.</p>}
				<button className="validButton"
					type="button"
					onClick= {async () => {
						const valid = await trigger("loginId")
						console.log("valid = " + valid)
						if (valid) {
							const email = getValues("loginId")
							await SendValidationEmail(email)
						}
					}}>이메일 인증</button>
			</SignUpItemDiv>
			<div id='validation' style={{display:'none'}}>
				<SignUpItemDiv>
					<span 
						className="itemName">인증번호</span>
					<input
						className="validItemIput"
						{...register('code')}
					/>
					<button className="validButton"
						type="button">인증</button>
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
