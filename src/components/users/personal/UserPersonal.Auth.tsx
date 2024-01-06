import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ProfileBox,
  Box,
  InfoItem,
  Label,
  InputBox,
  ModifyBtn,
  Desc,
  DeleteBtn,
} from './UserPersonal.styles';
import { FormTextBtn } from '../../../shared/components/FormTextBtn/FormTextBtn';

import { useRecoilState } from 'recoil';
import { recoilIsVerified } from '../../../pages/auth/password/authPassword';

const Auth = () => {
  const [password, setPassword] = useState('********'); // 로그인할 때 따로 저장해둔 거 불러옴 (로그인 성공 시에만 저장해야됨)
  const [modifyPassword, setModifyPassword] = useState(false); // 비밀번호 수정상태
  const [modifyEmergency, setmodifyEmergency] = useState(false); // 비상연락망 수정상태
  const [isVerified, setIsVerified] = useRecoilState(recoilIsVerified);

  // 페이지를 나갈 때 재인증했다는 Recoil 상태 초기화
  useEffect(() => {
    return () => {
      setIsVerified(false);
    };
  }, []);

  return (
    <ProfileBox>
      <div className="txt__wrap">
        <div className="box__tit">인증 정보</div>
        <div className="box__desc">안전한 여행을 위해 투게더트래블에서 수집하는 정보입니다.</div>
      </div>
      <Box>
        <InfoItem>
          <Label>
            비밀번호
            {!modifyPassword && isVerified && (
              <ModifyBtn onClick={() => setModifyPassword(true)}>수정</ModifyBtn>
            )}
          </Label>
          {modifyPassword && isVerified ? (
            <InputBox>
              <FormTextBtn
                placeholder="수정할 비밀번호를 입력하세요."
                value={password}
                onchange={(e) => setPassword(e.target.value)}
                onclick={() => setPassword('')}
              />
              <button type="submit">변경하기</button>
              <button
                className="input__close"
                type="submit"
                onClick={() => setModifyPassword(false)}
              >
                취소하기
              </button>
            </InputBox>
          ) : (
            <p className="info">{password}</p>
          )}
        </InfoItem>
        <InfoItem>
          <Label>2차 인증</Label>
          <Desc status="success">안전한 여행을 위해 요구되는 2차 인증 입니다.</Desc>
          <p className="info gray fw600">실명</p>
          <p className="info gray">김**</p>
          <p className="info gray fw600">전화번호</p>
          <p className="info gray">+82) 010-1***-2***</p>
        </InfoItem>
        <InfoItem>
          <Label>
            비상연락망
            {!modifyEmergency && isVerified && (
              <ModifyBtn onClick={() => setmodifyEmergency(true)}>수정</ModifyBtn>
            )}
          </Label>
          {modifyEmergency && isVerified ? (
            <>
              <Desc status={'normal'}>1건이 등록되어 있습니다.</Desc>
              <p className="info gray fw600">전화번호</p>
              <p className="info" style={{ display: 'flex', justifyContent: 'space-between' }}>
                010-2233-4455
                <DeleteBtn>삭제하기</DeleteBtn>
              </p>
              <InputBox>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <FormTextBtn
                    placeholder="관계/이름"
                    value=""
                    onchange={console.log('')}
                    onclick={console.log('')}
                    width="180px"
                  />
                  <FormTextBtn
                    placeholder="추가할 비상 연락망을 입력하세요."
                    value=""
                    onchange={console.log('')}
                    onclick={console.log('')}
                  />
                </div>

                {nickNameError && <Desc status={'error'}>에러메시지입니다.</Desc>}
                <button type="submit">변경하기</button>
                <button
                  className="input__close"
                  type="submit"
                  onClick={() => setmodifyEmergency(false)}
                >
                  취소하기
                </button>
              </InputBox>
            </>
          ) : (
            <Desc status={'normal'}>1건이 등록되어 있습니다.</Desc>
          )}
        </InfoItem>
        <InfoItem>
          {!isVerified && (
            <Label>
              <div></div>
              <ModifyBtn>
                <Link to={'./verificareUser'}>수정</Link>
              </ModifyBtn>
            </Label>
          )}
        </InfoItem>
      </Box>
      {/* <Link to={'/deleteUser'} className="deleteUser">
        계정 삭제하기
      </Link> */}
    </ProfileBox>
  );
};

export default Auth;
