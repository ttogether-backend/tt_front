import { CustomDatepicker } from 'src/shared/components/Datepicker/Datepicker';
import {
  Badge,
  Box,
  Button,
  Label,
  PlaceWrapper,
  ResultInput,
  SearchButton,
  SectionTitle,
  TypeWrapper,
} from './AccompanyForm.styles';

const AccompanyBasicInfo = () => {
  return (
    <div
      style={{
        width: '33%',
        margin: '50px auto',
      }}
    >
      <Badge>1</Badge>
      <SectionTitle>동행 기본 정보</SectionTitle>

      <Box>
        <Label>동행 종류</Label>
        <TypeWrapper>
          <Button>문화</Button>
          <Button>맛집</Button>
          <Button>여행</Button>
        </TypeWrapper>
      </Box>

      <Box>
        <Label>동행 장소</Label>
        <PlaceWrapper>
          <ResultInput value="이탈리아 피렌체" />
          <SearchButton>검색하기</SearchButton>
        </PlaceWrapper>
      </Box>

      <Box>
        <Label>동행 기간</Label>
        <CustomDatepicker />
      </Box>

      <Label>모집 인원</Label>
      <Label>모집 연령</Label>
      <Label>여행 키워드</Label>
    </div>
  );
};

export default AccompanyBasicInfo;
