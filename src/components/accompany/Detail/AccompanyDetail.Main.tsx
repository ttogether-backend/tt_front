import BasicInfo from './AccompanyDetail.BasicInfo';
import Content from './AccompanyDetail.Content';
import Header from './AccompanyDetail.Header';
import Participant from './AccompanyDetail.Participant2';
import { Divider, Wrapper, UserBox } from './AccompanyDetail.styles';

const Main = ({ headerData, basicInfoData, contentData }) => {
  console.log(basicInfoData);
  return (
    <>
      <Wrapper>
        <Header {...headerData} />
        <BasicInfo {...basicInfoData} />
        <Content {...contentData} />
      </Wrapper>

      <UserBox>
        <Participant />
      </UserBox>
    </>
  );
};

export default Main;
