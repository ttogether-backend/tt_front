import React, {useState} from 'react';
import { InputBox } from '../../users/mypage.styles';
import { FormTextBtn } from '../../../shared/components/FormTextBtn/FormTextBtn';
import { VerificareBoxWrap, Desc } from '../auth.styles';
import Page from 'src/pages/layout';

const AuthPassword = () => {
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(true);
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
            onchange={(e) => setPassword(e.target.value)}
            onclick={() => setPassword('')}
          />
          {passwordError && <Desc status={'error'}>비밀번호를 입력해주세요.</Desc>}
          <button type="submit">인증하기</button>
        </InputBox>
      </VerificareBoxWrap>
    </Page>
  );
};

export default AuthPassword;