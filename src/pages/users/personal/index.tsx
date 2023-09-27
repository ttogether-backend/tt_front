import React, { useState } from 'react';
import {
  ProfileBoxWrap,
  ProfileBox,
  ProfilePhotoBox,
  Box,
  InfoItem,
  ModifyBtn,
  Label,
  Desc,
  InputBox,
  DeleteBtn,
} from '../mypage.styles';
import ProfileCameraIcon from '../../../shared/components/ProfileCameraIcon/ProfileCameraIcon';
import { Link } from 'react-router-dom';
import { FormTextBtn } from '../../../shared/components/FormTextBtn/FormTextBtn';
import { FormText } from '../../../shared/components/FormText/FormText';
import { Container } from 'src/pages/accompany/AccompanyListPage.styles';
import Page from 'src/pages/layout';


const UserPersonal = () => {
  const [nickName, setNickName] = useState('김행성');
  const [password, setPassword] = useState('********');
  const [nickNameError, setnickNameError] = useState(true); // 필요한지 모르겠음
  const [intro, setIntro] = useState('안녕하세요. 여행을 어쩌고 저쩌고 하는 어쩌고 입니다.'); // 닉네임 수정상태
  const [modifyNickName, setModifyNickName] = useState(false); // 닉네임 수정상태
  const [modifyIntro, setModifyIntro] = useState(false); // 자기소개 수정상태
  const [modifyPassword, setModifyPassword] = useState(false); // 비밀번호 수정상태
  const [modifyEmergency, setmodifyEmergency] = useState(false); // 비상연락망 수정상태
  const [verified, setVerified] = useState(true); // 임시 인증된상태
  
  return (
    <Page>
      <Container>
        <ProfileBoxWrap>
          {/* 프로필사진 -> 단일 컴포넌트 */}
          <ProfilePhotoBox>
            <ProfileCameraIcon 
              imgSrc="/images/common/img_user_profile_tmp.png" 
              state="modify" 
            />
          </ProfilePhotoBox>
          {/* 프로필 설정영역 */}
          <div className="right">
            {/* 프로필 정보 */}
            <ProfileBox>
              <div className="txt__wrap">
                <div className="box__tit">프로필 정보</div>
                <div className="box__desc">
                  프로필은 투게더트래블 서비스에서 다른 동행자들에게 공유가 되는 정보입니다.
                </div>
              </div>
              <Box>
                <InfoItem>
                  <Label>
                    닉네임
                    {!modifyNickName && (
                      <ModifyBtn onClick={() => setModifyNickName(true)}>수정</ModifyBtn>
                    )}
                  </Label>
                  {modifyNickName ? (
                    <InputBox>
                      <FormTextBtn
                        placeholder="수정할 닉네임을 입력하세요."
                        value={nickName}
                        onchange={(e) => setNickName(e.target.value)}
                        onclick={() => setNickName('')}
                      />
                      {/* <div className="input__group">
                        <input
                          type="text"
                          placeholder="수정할 닉네임을 입력하세요."
                          value={nickName}
                          onChange={(e) => setNickName(e.target.value)}
                        /><button onClick={() => setNickName('')} className="input__reset">
                          리셋
                        </button>
                      </div> */}
                      {nickNameError && (
                        <Desc status={'error'}>해당 닉네임은 사용 중인 닉네임입니다.</Desc>
                      )}
                      <button type="submit">변경하기</button>
                      <button
                        className="input__close"
                        type="submit"
                        onClick={() => setModifyNickName(false)}
                      >
                        취소하기
                      </button>
                    </InputBox>
                  ) : (
                    <p className="info">{nickName}</p>
                  )}
                </InfoItem>
                <InfoItem>
                  <Label>
                    자기소개
                    {!modifyIntro && (
                      <ModifyBtn onClick={() => setModifyIntro(true)}>수정</ModifyBtn>
                    )}
                  </Label>
                  {modifyIntro ? (
                    <InputBox>
                      <FormTextBtn
                        placeholder="자기소개를 입력하세요."
                        value={intro}
                        onchange={(e) => setIntro(e.target.value)}
                        onclick={() => setIntro('')}
                      />
                      {nickNameError && <Desc status={'error'}>10자이상 작성해주세요.</Desc>}
                      <button type="submit">변경하기</button>
                      <button
                        className="input__close"
                        type="submit"
                        onClick={() => setModifyIntro(false)}
                      >
                        취소하기
                      </button>
                    </InputBox>
                  ) : (
                    <p className="info">{intro}</p>
                  )}
                </InfoItem>
                <InfoItem>
                  <Label>
                    관심 여행 키워드
                    <ModifyBtn>수정</ModifyBtn>
                  </Label>
                  <Desc status={'normal'}>
                    프로필에 관심 키워드를 추가하여 다른 사용자들과의 공통점을 찾아보세요.
                  </Desc>
                  <p className="info keywords">로컬여행, 아웃도어 레저여행, 맛집탐방</p>
                </InfoItem>
              </Box>
            </ProfileBox>
            {/* 인증 정보 */}
            <ProfileBox>
              <div className="txt__wrap">
                <div className="box__tit">인증 정보</div>
                <div className="box__desc">
                  안전한 여행을 위해 투게더트래블에서 수집하는 정보입니다.
                </div>
              </div>
              <Box>
                <InfoItem>
                  <Label>
                    비밀번호
                    {!modifyPassword && verified && (
                      <ModifyBtn onClick={() => setModifyPassword(true)}>수정</ModifyBtn>
                    )}
                  </Label>
                  {modifyPassword ? (
                    <InputBox>
                      <FormTextBtn
                        placeholder="수정할 비밀번호를 입력하세요."
                        value={password}
                        onchange={(e) => setPassword(e.target.value)}
                        onclick={() => setPassword('')}
                      />
                      {nickNameError && (
                        <Desc status={'error'}>해당 닉네임은 사용 중인 닉네임입니다.</Desc>
                      )}
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
                  <Label>1차 인증</Label>
                  <Desc status="success">안전한 여행을 위해 요구되는 1차 인증 입니다.</Desc>
                  <p className="info gray fw600">실명</p>
                  <p className="info gray">김**</p>
                  <p className="info gray fw600">전화번호</p>
                  <p className="info gray">+82) 010-1***-2***</p>
                </InfoItem>
                <InfoItem>
                  <Label>
                    비상연락망
                    {!modifyEmergency && verified && (
                      <ModifyBtn onClick={() => setmodifyEmergency(true)}>수정</ModifyBtn>
                    )}
                  </Label>
                  {modifyEmergency ? (
                    <>
                      <Desc status={'normal'}>1건이 등록되어 있습니다.</Desc>
                      <p className="info gray fw600">전화번호</p>
                      <p
                        className="info"
                        style={{ display: 'flex', justifyContent: 'space-between' }}
                      >
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
                  {!verified && (
                    <Label>
                      <div></div>
                      <ModifyBtn>
                        <Link to={'./verificareUser'}>수정</Link>
                      </ModifyBtn>
                    </Label>
                  )}
                </InfoItem>
              </Box>
              <Link to={'/deleteUser'} className="deleteUser">
                계정 삭제하기
              </Link>
            </ProfileBox>
          </div>
        </ProfileBoxWrap>
      </Container>
    </Page>
  );
};

export default UserPersonal;
