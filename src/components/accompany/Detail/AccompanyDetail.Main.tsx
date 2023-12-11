import BasicInfo from './AccompanyDetail.BasicInfo';
import Content from './AccompanyDetail.Content';
import Header from './AccompanyDetail.Header';
import { Divider, Wrapper } from './AccompanyDetail.styles';

const Main = ({ headerData, basicInfoData, contentData }) => {
  console.log(basicInfoData);
  return (
    <>
      <Wrapper>
        <Header {...headerData} />
        <BasicInfo {...basicInfoData} />
        <Content {...contentData} />
      </Wrapper>

      <Divider />
    </>
  );
};

export default Main;
