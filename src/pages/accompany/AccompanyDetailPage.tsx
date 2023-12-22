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

// const getAccompanyList = async () => {
//   const cookies = new Cookies();
//   const axiosInstance = createAxios();

//   axiosInstance
//     .post('/api/v1/accompany/posts/init')
//     .then((res) => {
//       console.log('res', res);
//       var postId = res.data.result.data.creating_accompany_post.accompanyPostId.value;
//       console.log(postId);
//       axiosInstance
//         .post(
//           '/api/v1/accompany/posts/' + postId,
//           {
//             category: 'TRAVEL',
//             title: '뚜기와 함께하는 여행',
//             content: '제주도로 가기',
//             expected_start_at: '2024-01-20',
//             expected_end_at: '2024-09-20',
//             recruit_number: 1,
//             is_age_free: false,
//             min_recruit_age: 20,
//             max_recruit_age: 30,
//             location_info: [
//               {
//                 location_id: 3,
//                 country: 'korea',
//                 city: 'seoul',
//                 latitude: '12354',
//                 longitude: '4897',
//                 name: '오뚜기',
//                 address: '서울시양천구',
//               },
//             ],
//             add_content: '밥 먹고싶어요',
//           },
//           {
//             headers: {
//               memberId: cookies.get('memberId'),
//               post_id: postId,
//             },
//           }
//         )
//         .then((res) => {
//           console.log('postId res', res);
//         });
//     })
//     .catch((Error) => {
//       console.log(Error);
//     });
// };

const AccompanyDetailPage = () => {
  const [headerData, setHeaderData] = useState<HeaderType>();
  const [basicInfoData, setBasicInfoData] = useState<BasicInfoType>();
  const [contentData, setContentData] = useState<ContentType>();

  const { id } = useParams();

  useEffect(() => {
    const cookies = new Cookies();
    const axiosInstance = createAxios();

    axiosInstance
      .get('/api/v1/accompany/posts/' + id)
      .then((res) => {
        console.log(res);
        const data = res.data.result.data;
        const {
          title,
          category,
          recruit_status,
          progess_status,
          location_info_list,
          period,
          recruit_number,
          recruit_age_range,
        } = data?.accompany_post_detail?.accompanySummary;
        const { content, view_count } = data?.accompany_post_detail;
        //const { image_list } = data?.image_list;
        //const { document_list } = data?.document_list;

        setHeaderData({ title, category, recruit_status, view_count, progess_status });
        setBasicInfoData({
          progess_status,
          location_info_list,
          period,
          recruit_number,
          recruit_age_range,
        });
        console.log(location_info_list);
        setContentData({ content });
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);
  useEffect(() => {
    console.log('eesss', basicInfoData);
  }, [basicInfoData]);

  //getAccompanyList();
  return (
    <Page>
      {headerData && basicInfoData && (
        <Main headerData={headerData} basicInfoData={basicInfoData} contentData={contentData} />
      )}
      {/* <Comment /> */}
    </Page>
  );
};

export default AccompanyDetailPage;
