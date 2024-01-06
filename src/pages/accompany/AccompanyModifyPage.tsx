import AccompanyForm from 'src/components/accompany/Form/AccompanyForm';
import { useParams } from 'react-router-dom';
import react, { useState, useEffect } from 'react';

import {
  HeaderType,
  BasicInfoType,
  ContentType,
} from '../../components/accompany/Detail/AccompanyDetail.types';
import { SubmitButton } from '../../components/accompany/Form/AccompanyForm.styles';
import Page from 'src/pages/layout';
import AccompanyBasicInfo from '../../components/accompany/Modify/AccompanyBasicInfo';
import AccompanyContent from '../../components/accompany/Modify/AccompanyContent';
import { AccompanyType, PostInfo } from '../../components/accompany/Form/AccompanyForm.types';

import { useNavigate, Link } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import createAxios from 'src/Utils/axiosInstance';

const initPostInfo = {
  title: '',
  category: AccompanyType.travel,
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
};

const AccompanyModifyPage = () => {
  const { id } = useParams();
  const cookies = new Cookies();
  const axiosInstance = createAxios();
  const navigate = useNavigate();

  const [postInfo, setPostInfo] = useState(initPostInfo);
  const [recruitAgeRange, setRecruitAgeRange] = useState([]);

  useEffect(() => {
    const axiosInstance = createAxios();

    axiosInstance
      .get('/api/v1/accompany/posts/' + id)
      .then((res) => {
        const data = res.data.result.data;
        console.log('data', data);
        const { title, category, location_info_list, period, recruit_number, recruit_age_range } =
          data?.accompany_post_detail?.accompany_summary;
        const { content } = data?.accompany_post_detail;
        const { is_age_agree } = data;

        setPostInfo({
          title: title,
          category: category,
          content: content,
          expected_start_at: period.start_at,
          expected_end_at: period.end_at,
          recruit_number: recruit_number,
          is_age_free: is_age_agree,
          min_recruit_age: recruit_age_range.min_recruit_age,
          max_recruit_age: recruit_age_range.max_recruit_age,
          location_info: location_info_list,
        });

        setRecruitAgeRange([recruit_age_range.min_recruit_age, recruit_age_range.max_recruit_age]);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

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

  const handleSubmitBtn = () => {
    console.log('postInfo', postInfo);
    axiosInstance
      .put('/api/v1/accompany/posts/' + id, postInfo, {
        headers: {
          memberId: cookies.get('memberId'),
          post_id: id,
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
          <AccompanyBasicInfo
            postInfo={postInfo}
            setBasicInfo={setBasicInfo}
            recruitAgeRange={recruitAgeRange}
          />
          <AccompanyContent postInfo={postInfo} setContentInfo={setContentInfo} />
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

export default AccompanyModifyPage;
