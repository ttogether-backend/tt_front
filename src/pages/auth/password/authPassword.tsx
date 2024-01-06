import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { RecoilState, useRecoilState, atom } from 'recoil';

import {
  onLoginSuccess,
  kakaoLogin,
  redirectHome,
} from '../../../components/users/personal/Utils/LoginUtils';
import { useForm, SubmitHandler } from 'react-hook-form';
import { InputBox } from '../../users/mypage.styles';
import { FormTextBtn } from '../../../shared/components/FormTextBtn/FormTextBtn';
import { VerificareBoxWrap, Desc } from '../auth.styles';
import Page from 'src/pages/layout';

import createAxios from 'src/Utils/axiosInstance';

export const recoilIsVerified: RecoilState<boolean> = atom({ key: 'isVerified', default: false });

type loginType = {
  email: string;
  password: string;
};

const AuthPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [, setIsVerified] = useRecoilState(recoilIsVerified);
  const axiosInstance = createAxios();
  const navigate = useNavigate();

  const {
    register, // input field 지정
    handleSubmit,
    formState: { errors },
  } = useForm<loginType>();

  const onSubmit = (password) => {
    console.log('password', password);

    axiosInstance
      .post('/api/v1/members/profile/password', {
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.success && res.data.data) {
          console.log('success');
          setIsVerified(true);
          navigate('/users/personal');
        } else {
          setPasswordError('비밀번호가 틀렸습니다. 다시 확인해주세요.');
        }
      })
      .catch((error) => {
        console.log(error);
        document.getElementById('signinFailureMessage').style.display = 'inline';
      });
  };

  return (
    <Page>
      <VerificareBoxWrap style={{ width: '729px' }}>
        <div className="txt__wrap">
          <div className="box__tit">비밀번호로 인증하기</div>
          <div className="box__desc">투게더트래블 계정의 비밀번호로 인증을 완료하세요.</div>
        </div>

        <InputBox>
          <FormTextBtn
            placeholder="비밀번호를 입력하세요."
            value={password}
            type="password"
            autoComplete="off"
            onchange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <Desc status={'error'}>{passwordError}</Desc>}
          <button type="submit" onClick={(e) => onSubmit(password)}>
            인증하기
          </button>
        </InputBox>
      </VerificareBoxWrap>
    </Page>
  );
};

export default AuthPassword;
