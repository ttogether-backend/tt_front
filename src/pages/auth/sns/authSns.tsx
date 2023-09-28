import React from 'react';
import { Link } from 'react-router-dom';
import { VerificareBoxWrap, VerificareBtn } from '../auth.styles';
import Page from 'src/pages/layout';


const VerificareUser = () => {
  return (
    <Page>
      <VerificareBoxWrap>
        <div className="txt__wrap">
          <div className="box__tit">개인정보 변경</div>
          <div className="box__desc">개인정보를 안전하게 보호하기 위해 다시 한 번 인증해 주세요.</div>
        </div>
        <div className="btn__wrap">
          <VerificareBtn name={'kakao'}>카카오톡으로 인증하기</VerificareBtn>
          <VerificareBtn name={'naver'}>네이버로 인증하기</VerificareBtn>
          <VerificareBtn name={'google'}>구글로 인증하기</VerificareBtn>
          <VerificareBtn name={'password'}>
            <Link to={'/auth/password/'}>비밀번호로 인증하기</Link>
          </VerificareBtn>
        </div>
      </VerificareBoxWrap>
    </Page>
  );
}

export default VerificareUser