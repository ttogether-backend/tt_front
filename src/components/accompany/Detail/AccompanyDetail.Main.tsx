import { useState, useEffect, FC } from 'react';

import BasicInfo from './AccompanyDetail.BasicInfo';
import Content from './AccompanyDetail.Content';
import Header from './AccompanyDetail.Header';
import Participant from './AccompanyDetail.Participant2';
import { Divider, Wrapper, UserBox } from './AccompanyDetail.styles';
import { AccompanyDetailPropsType, AccompanyStatus } from './AccompanyDetail.types';

const Main = ({ headerData, basicInfoData, contentData }) => {
  const [progressStatus, setProgressStatus] = useState('');

  useEffect(() => {
    if (headerData.progress_status) {
      setProgressStatus(headerData.progress_status);
    }
  }, [headerData.progress_status]);

  return (
    <>
      <Wrapper>
        <Header {...headerData} setProgressStatus={setProgressStatus} />
        <BasicInfo {...basicInfoData} progressStatus={progressStatus} />
        <Content {...contentData} />
      </Wrapper>

      <div style={{ height: 'calc(100vh - 128px - 60px - 563px - 40px - 160px - 360px)' }}></div>
      <UserBox>
        <Participant />
      </UserBox>
    </>
  );
};

export default Main;
