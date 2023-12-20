import { useState, useEffect } from 'react';
import AccompanyForm from 'src/components/accompany/Form/AccompanyForm';
import { RecoilState, useRecoilState, atom } from 'recoil';

import { Cookies } from 'react-cookie';
import createAxios from 'src/Utils/axiosInstance';

const postId: RecoilState<number> = atom({ key: 'postId', default: -1 });

const AccompanyCreatePage = () => {
  const cookies = new Cookies();
  const axiosInstance = createAxios();

  const [selectedPostId, setSelectedPostId] = useRecoilState(postId);

  useEffect(() => {
    if (selectedPostId < 0) {
      axiosInstance
        .post('/api/v1/accompany/posts/init', {
          headers: {
            memberId: cookies.get('memberId'),
          },
        })
        .then((res) => {
          if (res.data.result.code == 'SUCCESS') {
            setSelectedPostId(res.data.result.data.creating_accompany_post.accompanyPostId.value);
          }
        });
    }
  }, []);

  return <div>{selectedPostId > 0 ? <AccompanyForm postId={selectedPostId} /> : null}</div>;
};

export default AccompanyCreatePage;
