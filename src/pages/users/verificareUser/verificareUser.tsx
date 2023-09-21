import React, {useState} from 'react';
import { Container } from '../../../styles/GlobalStyles';
import { VerificareBoxWrap, VerificareBtn } from './verificareUser.styles';
import { Link, useParams } from 'react-router-dom';
import { Desc, InputBox } from '../mypage.styles';


const VerificareUser = () => {
  const { method } = useParams();
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(true);
  console.log(method);
  if (method === "password") {
    return (
      <VerificareBoxWrap style={{ width: '729px' }}>
        <div className="txt__wrap">
          <div className="box__tit">비밀번호로 인증하기</div>
          <div className="box__desc">투게더트래블 계정의 비밀번호로 인증을 완료하세요.</div>
        </div>
        <InputBox>
          <div className="input__group">
            <input
              type="text"
              placeholder="비밀번호를 입력하세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* 취소버튼인지 리셋버튼인지 모르겠음 리셋버튼이라면 변경버튼옆에 취소버튼도 있으면 좋을것같음(다른곳 클릭시 없어지던가..) */}{' '}
            <button onClick={() => setPassword('')} className="input__reset">
              리셋
            </button>
          </div>
          {passwordError && <Desc status={'error'}>비밀번호를 입력해주세요.</Desc>}
          <button type="submit">인증하기</button>
        </InputBox>
      </VerificareBoxWrap>
    );
  } else {
    return (
      <VerificareBoxWrap>
        <div className="txt__wrap">
          <div className="box__tit">개인정보 변경</div>
          <div className="box__desc">
            개인정보를 안전하게 보호하기 위해 다시 한 번 인증해 주세요.
          </div>
        </div>
        <div className="btn__wrap">
          <VerificareBtn name={'kakao'}>카카오톡으로 인증하기</VerificareBtn>
          <VerificareBtn name={'naver'}>네이버로 인증하기</VerificareBtn>
          <VerificareBtn name={'google'}>구글로 인증하기</VerificareBtn>
          <VerificareBtn name={'password'}>
            <Link to={'./password'}>비밀번호로 인증하기</Link>
          </VerificareBtn>
        </div>
      </VerificareBoxWrap>
    );
  }
}

export default VerificareUser