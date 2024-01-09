import Page from '../layout';
import { FC, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
  HeaderType,
  BasicInfoType,
  ContentType,
} from '../../components/accompany/Detail/AccompanyDetail.types';
import Comment from 'src/components/accompany/Detail/AccompanyDetail.Comment';
import Main from 'src/components/accompany/Detail/AccompanyDetail.Main';

import { Cookies } from 'react-cookie';
import createAxios from 'src/Utils/axiosInstance';

const AccompanyDetailPage = () => {
  const [headerData, setHeaderData] = useState<HeaderType>();
  const [basicInfoData, setBasicInfoData] = useState<BasicInfoType>();
  const [contentData, setContentData] = useState<ContentType>();

  const { id } = useParams();

  useEffect(() => {
    const axiosInstance = createAxios();

    axiosInstance
      .get('/api/v1/accompany/posts/' + id)
      .then((res) => {
        const data = res.data.result.data;
        const {
          accompany_id,
          title,
          category,
          recruit_status,
          progress_status,
          location_info_list,
          period,
          recruit_number,
          recruit_age_range,
        } = data?.accompany_post_detail?.accompany_summary;

        const { content, view_count } = data?.accompany_post_detail;
        //const { image_list } = data?.image_list;
        //const { document_list } = data?.document_list;
        setHeaderData({
          accompany_id,
          title,
          category,
          recruit_status,
          view_count,
          progress_status,
        });
        setBasicInfoData({
          progress_status,
          location_info_list,
          period,
          recruit_number,
          recruit_age_range,
        });
        console.log(location_info_list);
        setContentData({ content: content, image_list: [], document_list: [] });
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  useEffect(() => {
    console.log('eesss', basicInfoData);
  }, [basicInfoData]);

  return (
    <>
      <Page>
        {headerData && basicInfoData && (
          <Main headerData={headerData} basicInfoData={basicInfoData} contentData={contentData} />
        )}
        {/* <Comment /> */}
      </Page>
    </>
  );
};

export default AccompanyDetailPage;
