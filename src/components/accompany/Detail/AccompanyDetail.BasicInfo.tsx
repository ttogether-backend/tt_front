import { useState, useEffect, FC } from 'react';
import { InfoBox, Label, StatusValue, Value } from './AccompanyDetail.styles';
import { AccompanyDetailPropsType, AccompanyStatus } from './AccompanyDetail.types';

const BasicInfo: FC<AccompanyDetailPropsType['BasicInfoType']> = ({
  location_info_list,
  period,
  recruit_number,
  recruit_age_range,
  progressStatus,
}) => {
  useEffect(() => {
    console.log('ef', progressStatus);
  }, [progressStatus]);

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
        <StatusValue>{AccompanyStatus[progressStatus]}</StatusValue>
      </InfoBox>

      <InfoBox>
        <Label>동행 장소</Label>
        <Value>{location_info_list[0].address}</Value>
      </InfoBox>

      <InfoBox>
        <Label>동행 일자</Label>
        <Value>
          {period.start_at} ~ {period.end_at}
        </Value>
      </InfoBox>

      <InfoBox>
        <Label>모집 인원</Label>
        <Value>{recruit_number}명</Value>
      </InfoBox>

      <InfoBox>
        <Label>모집 연령</Label>
        <Value>
          {recruit_age_range.min_recruit_age}대 ~ {recruit_age_range.max_recruit_age}대
        </Value>
      </InfoBox>
    </div>
  );
};

export default BasicInfo;
