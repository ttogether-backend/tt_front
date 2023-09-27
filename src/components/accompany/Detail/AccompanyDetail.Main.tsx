import BasicInfo from './AccompanyDetail.BasicInfo';
import Content from './AccompanyDetail.Content';
import Header from './AccompanyDetail.Header';
import { Divider, Wrapper } from './AccompanyDetail.styles';

const Main = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <BasicInfo />
        <Content />
      </Wrapper>

      <Divider />
    </>
  );
};

export default Main;
