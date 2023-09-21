import { InfoBox, Label, StatusValue, Value } from './AccompanyDetail.styles';

const BasicInfo = () => {
  return (
    <div
      style={{
        display: 'grid',
        gap: '12px',
        marginBottom: '40px',
      }}
    >
      <InfoBox>
        <Label>동행 상태</Label>
        <StatusValue>동행 확정</StatusValue>
      </InfoBox>

      <InfoBox>
        <Label>동행 장소</Label>
        <Value>서울특별시 도봉구 어쩌구 아차산 앞 어쩌구 저쩌구</Value>
      </InfoBox>

      <InfoBox>
        <Label>동행 일자</Label>
        <Value>2023년 6월 17일 ~ 날짜 미정</Value>
      </InfoBox>

      <InfoBox>
        <Label>모집 인원</Label>
        <Value>5명</Value>
      </InfoBox>

      <InfoBox>
        <Label>모집 연령</Label>
        <Value>무관</Value>
      </InfoBox>
    </div>
  );
};

export default BasicInfo;
