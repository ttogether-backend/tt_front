import { useState, useEffect } from 'react';
import AccompanyForm from 'src/components/accompany/Form/AccompanyForm';
import { RecoilState, useRecoilState, atom } from 'recoil';

import { Cookies } from 'react-cookie';
import createAxios from 'src/Utils/axiosInstance';

const recoilPostId: RecoilState<number> = atom({ key: 'postId', default: -1 });

const AccompanyCreatePage = () => {
  const cookies = new Cookies();
  const axiosInstance = createAxios();
  const [postId, setPostId] = useState(-1);
  const [selectedPostId, setSelectedPostId] = useRecoilState(recoilPostId);

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
            setPostId(res.data.result.data.creating_accompany_post.accompanyPostId.value);
          }
        });
    } else {
      setPostId(selectedPostId);
    }
  }, []);

  return <div>{postId > 0 ? <AccompanyForm postId={postId} /> : null}</div>;
};

export default AccompanyCreatePage;
