import react, { useState, useEffect } from 'react';

import { SubmitButton } from './AccompanyForm.styles';
import Page from 'src/pages/layout';
import AccompanyBasicInfo from './AccompanyBasicInfo';
import AccompanyContent from './AccompanyContent';
import { AccompanyType, PostInfo } from './AccompanyForm.types';

import { useNavigate, Link } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import createAxios from 'src/Utils/axiosInstance';

const initPostInfo: PostInfo = {
  category: AccompanyType.travel,
  title: '',
  content: '',
  expected_start_at: '',
  expected_end_at: '',
  recruit_number: 0,
  is_age_free: false,
  min_recruit_age: 0,
  max_recruit_age: 0,
  location_info: [
    {
      location_id: 0,
      country: '',
      city: '',
      latitude: '',
      longitude: '',
      name: '',
      address: '',
    },
  ],
  add_content: '',
};

const AccompanyForm = ({ postId }) => {
  const cookies = new Cookies();
  const axiosInstance = createAxios();
  const navigate = useNavigate();

  const [postInfo, setPostInfo] = useState(initPostInfo);

  // AccompanyBasicInfo에서 사용할 정보 업데이트 함수
  const setBasicInfo = (basicInfo) => {
    setPostInfo((prevInfo) => ({
      ...prevInfo,
      ...basicInfo,
    }));
  };

  // AccompanyContent에서 사용할 정보 업데이트 함수
  const setContentInfo = (contentInfo) => {
    setPostInfo((prevInfo) => ({
      ...prevInfo,
      ...contentInfo,
    }));
  };

  useEffect(() => {
    console.log('postInfo', postInfo);
  }, [postInfo]);

  const handleSubmitBtn = () => {
    console.log('e', postId);
    axiosInstance
      .post('/api/v1/accompany/posts/' + postId, postInfo, {
        headers: {
          memberId: cookies.get('memberId'),
          post_id: postId,
        },
      })
      .then((res) => {
        if (res.data.result.code == 'SUCCESS') {
          alert('등록 완료');
          navigate('/accompany');
        }
      });
  };

  return (
    <>
      <Page>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <AccompanyBasicInfo setBasicInfo={setBasicInfo} />
          <AccompanyContent setContentInfo={setContentInfo} />
        </div>
        <div
          style={{
            width: '1416px',
            margin: '0px auto 30px',
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <SubmitButton style={{ marginTop: 0 }} onClick={() => handleSubmitBtn()}>
            등록하기
          </SubmitButton>
        </div>
      </Page>
    </>
  );
};

export default AccompanyForm;
