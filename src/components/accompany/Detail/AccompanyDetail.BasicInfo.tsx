import { InfoBox, Label, StatusValue, Value } from './AccompanyDetail.styles';

const BasicInfo = ({
  progess_status,
  location_info_list,
  period,
  recruit_number,
  recruit_age_range,
}) => {
  console.log(location_info_list);
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
        <StatusValue>{progess_status}</StatusValue>
      </InfoBox>

      <InfoBox>
        <Label>동행 장소</Label>
        <Value>{location_info_list[0].address}</Value>
      </InfoBox>

      <InfoBox>
        <Label>동행 일자</Label>
        <Value>
          {period.startAt} ~ {period.endAt}
        </Value>
      </InfoBox>

      <InfoBox>
        <Label>모집 인원</Label>
        <Value>{recruit_number}명</Value>
      </InfoBox>

      <InfoBox>
        <Label>모집 연령</Label>
        <Value>
          {recruit_age_range.minRecruitAge}대 ~ {recruit_age_range.maxRecruitAge}대
        </Value>
      </InfoBox>
    </div>
  );
};

export default BasicInfo;
