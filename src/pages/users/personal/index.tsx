import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { AlertDialog } from 'src/shared/components/modals/AlertDialog';
import { InfoType, AuthType } from '../../../components/users/personal/UserPersonal.types';
import { Cookies } from 'react-cookie';

import ProfilePhotoBox from 'src/components/users/personal/ProfilePhotoBox';
import Info from '../../../components/users/personal/UserPersonal.Info';
import Auth from 'src/components/users/personal/UserPersonal.Auth';

import ProfileCameraIcon from '../../../shared/components/ProfileCameraIcon/ProfileCameraIcon';
import { Link } from 'react-router-dom';
import { FormTextBtn } from '../../../shared/components/FormTextBtn/FormTextBtn';
import { LoadingIcon } from '../../../shared/components/LoadingIcon/LoadingIcon.style';
import { FormText } from '../../../shared/components/FormText/FormText';
import { Container } from 'src/pages/accompany/AccompanyListPage.styles';
import Page from 'src/pages/layout';
import createAxios from 'src/Utils/axiosInstance';

export const ProfileBoxWrap = styled.div`
  width: 1108px;
  margin: auto;
  padding: 100px 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .right {
    margin-left: 80px;
    width: 100%;
  }
  .deleteUser {
    float: right;
    color: #000;
    font-size: 16px;
    margin-top: 30px;
  }
`;

const UserPersonal = () => {
  const cookies = new Cookies();

  const [infoData, setInfoData] = useState<InfoType>(null);
  const [authData, setAuthData] = useState<AuthType>(null);

  useEffect(() => {
    const axiosInstance = createAxios();
    axiosInstance
      .get('/api/v1/members/' + cookies.get('memberId') + '/profile')
      .then((res) => {
        const data = res.data.result.data;
        const { nickname, bio, profile_image_url } = data;
        setInfoData({ nickname, bio, profile_image_url });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // const [isOnline, setIsOnline] = useState(navigator.onLine);

  // const handleOnlineStatus = () => {
  //   setIsOnline(navigator.onLine);
  // };

  // useEffect(() => {
  //   window.addEventListener('online', handleOnlineStatus);
  //   window.addEventListener('offline', handleOnlineStatus);

  //   return () => {
  //     window.removeEventListener('online', handleOnlineStatus);
  //     window.removeEventListener('offline', handleOnlineStatus);
  //   };
  // }, []);

  return (
    <Page>
      <Container>
        <ProfileBoxWrap>
          <ProfilePhotoBox />
          <div className="right">
            <Info {...infoData} />
            <Auth />
          </div>
        </ProfileBoxWrap>
      </Container>
    </Page>
  );
};

export default UserPersonal;
