import Page from '../layout';
import { FC, useState, useEffect } from 'react';
import {
  HeaderType,
  BasicInfoType,
  ContentType,
} from '../../components/accompany/Detail/AccompanyDetail.types';
import Comment from 'src/components/accompany/Detail/AccompanyDetail.Comment';
import Main from 'src/components/accompany/Detail/AccompanyDetail.Main';
import axios from 'axios';

const AccompanyDetailPage = () => {
  const [headerData, setHeaderData] = useState<HeaderType>();
  const [basicInfoData, setBasicInfoData] = useState<BasicInfoType>();
  const [contentData, setContentData] = useState<ContentType>();

  useEffect(() => {
    axios
      .get(
        'http://ec2-44-203-114-252.compute-1.amazonaws.com:8000/api/v1/together/accompany/posts/2',
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3NjgwMGRjZC02YTAwLTRhOWMtYmFlNC0wOTZkOTVlZDcwODIiLCJpYXQiOjE3MDAwMTQ4MTIsImV4cCI6MTcwMDAxODQxMn0.1rcMayhFibzjr8Ix0Jyo5LwhKCRZsTNpi38fjJ2I4vw',
            memberId: '76800dcd-6a00-4a9c-bae4-096d95ed7082',
          },
        }
      )
      .then((res) => {
        const data = res.data.data;
        const {
          title,
          category,
          recruit_status,
          status,
          location_info_list,
          period,
          recruit_number,
          recruit_age_range,
        } = data?.accompany_post_detail?.accompanySummary;
        const { content, view_count } = data?.accompany_post_detail;
        const { image_list } = data?.image_list;
        const { document_list } = data?.document_list;

        setHeaderData({ title, category, recruit_status, view_count });
        setBasicInfoData({ status, location_info_list, period, recruit_number, recruit_age_range });
        setContentData({ content, image_list, document_list });
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <Page>
      <Main headerData={headerData} basicInfoData={basicInfoData} contentData={contentData} />
      <Comment />
    </Page>
  );
};

export default AccompanyDetailPage;
