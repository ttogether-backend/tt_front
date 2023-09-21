import { KeywordBox, KeywordItem, KeywordList, KeywordTitle } from './AccompanyDetail.styles';

const Keyword = () => {
  return (
    <KeywordBox>
      <KeywordTitle>이렇게 여행하고 싶어요!</KeywordTitle>

      <KeywordList>
        <KeywordItem>느긋한 여행</KeywordItem>
        <KeywordItem>느긋한 여행</KeywordItem>
        <KeywordItem>느긋한 여행</KeywordItem>
        <KeywordItem>느긋한 여행</KeywordItem>
      </KeywordList>
    </KeywordBox>
  );
};

export default Keyword;
