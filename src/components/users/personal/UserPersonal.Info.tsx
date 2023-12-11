import { useEffect, useState, FC } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

import { ProfileBox, Box, InfoItem, Label, InputBox, ModifyBtn, Desc } from './UserPersonal.styles';
import { FormTextBtn } from '../../../shared/components/FormTextBtn/FormTextBtn';
import { AccordionDialog } from './AccordionDialog';
import { InfoType } from './UserPersonal.types';
import { TravelTypes } from './TravelType';
import { AccordionItem } from 'src/components/users/personal/AccordionDialog/AccordionDialog.types';
import createAxios from 'src/Utils/axiosInstance';

const Info: FC<InfoType> = ({ nickname, bio, profile_image_url }) => {
  const [newNickname, setNewNickname] = useState(nickname); // 업데이트 될 닉네임 저장
  const [modifyNickName, setModifyNickName] = useState(false); // 닉네임 수정상태
  const [isLoading, setIsLoading] = useState(false); // 변경 처리 중 로딩 상태 보여주고 입력 막기 위함
  const [nickNameError, setnickNameError] = useState(''); // 닉네임 입력폼 관련 에러메시지 저장

  const [newBio, setNewBio] = useState(bio); // 업데이트 될 자기소개 저장
  const [modifyBio, setModifyBio] = useState(false); // 자기소개 수정상태
  const [isOpenBioModal, setIsOpenBioModal] = useState(false);
  const useLoading = true;

  const cookies = new Cookies();

  useEffect(() => {
    setNewNickname(nickname);
    setNewBio(bio);
    console.log(nickname, bio, newNickname, newBio);
  }, [nickname, bio]);

  // 중복 검사 로직은 API 가능해지면 추가
  function NickNameChange(e) {
    const axiosInstance = createAxios();

    setIsLoading(true);

    axiosInstance
      .get('/api/v1/members/check-nickname', {
        params: {
          nickname: newNickname,
        },
      })
      .then(function (res) {
        if (res.data.result.code == 'NICKNAME_EXISTS') {
          alert('이미 존재하는 닉네임입니다.');
          setModifyNickName(false);
          setNewNickname(nickname);
        } else {
          axiosInstance
            .put(
              '/api/v1/members/my',
              {
                nickname: newNickname,
                bio: newBio,
              },
              {
                headers: {
                  memberId: cookies.get('memberId'),
                },
              }
            )
            .then(function (response) {
              if (response.data.success) {
                console.log('닉네임 변경 성공');
                setNewNickname(newNickname);
              } else {
                console.log('닉네임 변경 실패');
                alert('닉네임 변경에 실패했습니다.');
              }
            })
            .then(() => {
              setIsLoading(false);
              setModifyNickName(false);
            })
            .catch(function (error) {
              console.log('닉네임 변경 실패');
              alert('닉네임 변경에 실패했습니다.');
              setModifyNickName(false);
            });
        }
      });
  }

  function BioChange(e) {
    const axiosInstance = createAxios();
    axiosInstance
      .put(
        '/api/v1/members/my',
        {
          nickname: newNickname,
          bio: newBio,
        },
        {
          headers: {
            memberId: cookies.get('memberId'),
          },
        }
      )
      .then(function (response) {
        if (response.data.success) {
          console.log('자기소개 변경 성공');
          setNewBio(newBio);
        } else {
          console.log('자기소개 변경 실패');
          alert('자기소개 변경에 실패했습니다.');
        }
      })
      .then(() => {
        setModifyBio(false);
      })
      .catch(function (error) {
        console.log('자기소개 변경 실패');
        alert('자기소개 변경에 실패했습니다.');
        setModifyBio(false);
      });
  }

  useEffect(() => {
    const regex = /^[a-zA-Z0-9가-힣]{2,12}$/; //무슨 라이브러리 쓰라했는데

    if (!regex.test(newNickname)) {
      // 정규표현식과 일치하지 않을 경우
      if (newNickname.length < 2) {
        setnickNameError('입력값이 너무 짧습니다. 최소 2글자 이상이어야 합니다.');
      } else if (newNickname.length > 12) {
        setnickNameError('입력값이 너무 깁니다. 최대 12글자까지만 허용됩니다.');
      } else if (!/^[가-힣a-zA-Z]+$/.test(newNickname)) {
        setnickNameError('올바른 문자를 입력하세요. 한글, 영어만 허용됩니다.');
      } else if (newNickname == nickname) {
        setnickNameError('변경 이전과 같은 닉네임입니다. 다른 닉네임을 입력하세요');
      }
    } else {
      setnickNameError('');
    }
  }, [newNickname]);

  return (
    <>
      {/* 프로필 정보 */}
      <ProfileBox>
        <div className="txt__wrap">
          <div className="box__tit">프로필 정보</div>
          <div></div>
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
                  value={newNickname}
                  onchange={(e) => setNewNickname(e.target.value)}
                  isLoading={isLoading}
                  useLoading={useLoading}
                />

                {nickNameError && <Desc status={'error'}>{nickNameError}</Desc>}
                {!isLoading && (
                  <button
                    type="submit"
                    disabled={nickNameError.length > 0}
                    onClick={(e) => NickNameChange(e)}
                  >
                    변경하기
                  </button>
                )}
                {!isLoading && (
                  <button
                    className="input__close"
                    type="submit"
                    onClick={() => setModifyNickName(false)}
                  >
                    취소하기
                  </button>
                )}
              </InputBox>
            ) : (
              <p className="info">{newNickname ? newNickname : nickname}</p>
            )}
          </InfoItem>
          <InfoItem>
            <Label>
              자기소개
              {!modifyBio && <ModifyBtn onClick={() => setModifyBio(true)}>수정</ModifyBtn>}
            </Label>
            {modifyBio ? (
              <InputBox>
                <FormTextBtn
                  placeholder="수정할 자기소개를 입력하세요."
                  value={newBio}
                  onchange={(e) => setNewBio(e.target.value)}
                />
                {nickNameError && <Desc status={'error'}>10자이상 작성해주세요.</Desc>}
                <button type="submit" onClick={(e) => BioChange(e)}>
                  변경하기
                </button>
                <button className="input__close" type="submit" onClick={() => setModifyBio(false)}>
                  취소하기
                </button>
              </InputBox>
            ) : (
              <p className="info">{newBio ? newBio : bio}</p>
            )}
          </InfoItem>
          {/* 1차 개발 범위 제외 */}
          <InfoItem>
            <Label>
              관심 여행 키워드
              <ModifyBtn onClick={() => setIsOpenBioModal(true)}>수정</ModifyBtn>
            </Label>
            <Desc status={'normal'}>
              프로필에 관심 키워드를 추가하여 다른 사용자들과의 공통점을 찾아보세요.
            </Desc>
            <p className="info keywords">로컬여행, 아웃도어 레저여행, 맛집탐방</p>
          </InfoItem>
        </Box>
      </ProfileBox>

      <AccordionDialog
        title="어떤 여행에 관심이 가나요?"
        message="평소 좋아하는 여행이나 해보고 싶은 여행을 최대 7개까지 체크해주세요.언제든지 변경이 가능합니다."
        isOpen={isOpenBioModal}
        list={TravelTypes}
        confirmButtonLabel="제출하기"
        isCloseBackgroundClick={true}
        handleClose={() => {
          setIsOpenBioModal(false);
        }}
        handleConfirm={function () {
          // patch api 있는 함수
          throw new Error('Function not implemented.');
        }}
        // handleConfirm:(accordionItem:AccordionItem) => any;
      />
    </>
  );
};

export default Info;
