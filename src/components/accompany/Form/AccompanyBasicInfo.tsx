import { DatePicker } from 'src/shared/components/Datepicker/Datepicker';
import {
  Badge,
  Box,
  Button,
  CheckboxLabel,
  Label,
  PlaceWrapper,
  ResultInput,
  SearchButton,
  SectionTitle,
  TypeWrapper,
} from './AccompanyForm.styles';
import { Range } from 'src/shared/components/Range/Range';
import { RangeDataList } from 'src/shared/components/Range/Range.types';
import Checkbox from 'src/shared/components/Checkbox/Checkbox';
import { useState } from 'react';
import { AccompanyType } from './AccompanyForm.types';

const AccompanyBasicInfo = () => {
  const [isNoEndDate, setIsNoEndDate] = useState(false);
  const [isAnyAge, setIsAnyAge] = useState(false);

  const personnel: RangeDataList[] = [
    {
      value: 1,
      unit: '명',
      isSelected: false,
    },
    {
      value: 2,
      unit: '명',
      isSelected: false,
    },
    {
      value: 3,
      unit: '명',
      isSelected: false,
    },
    {
      value: 4,
      unit: '명',
      isSelected: false,
    },
    {
      value: 5,
      unit: '명',
      isSelected: false,
    },
    {
      value: 6,
      unit: '명',
      isSelected: false,
    },
  ];

  const age: RangeDataList[] = [
    {
      value: 10,
      unit: '대',
      isSelected: false,
    },
    {
      value: 20,
      unit: '대',
      isSelected: false,
    },
    {
      value: 30,
      unit: '대',
      isSelected: false,
    },
    {
      value: 40,
      unit: '대',
      isSelected: false,
    },
    {
      value: 50,
      unit: '대',
      isSelected: false,
    },
    {
      value: 60,
      unit: '대',
      isSelected: false,
    },
  ];

  return (
    <div
      style={{
        width: '456px',
        margin: '50px 144px 0 0',
      }}
    >
      <Badge>1</Badge>
      <SectionTitle>동행 기본 정보</SectionTitle>

      <Box>
        <Label>동행 종류</Label>
        <TypeWrapper>
          <Button name={AccompanyType.culture} isSelected={true} background="#85B3B5">
            문화
          </Button>
          <Button name={AccompanyType.food} isSelected={false} background="#D97736">
            맛집
          </Button>
          <Button name={AccompanyType.travel} isSelected={false} background="#5BB13D">
            여행
          </Button>
        </TypeWrapper>
      </Box>

      <Box>
        <Label>동행 장소</Label>
        <PlaceWrapper>
          <ResultInput />
          <SearchButton>검색하기</SearchButton>
        </PlaceWrapper>
      </Box>

      <Box>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Label>동행 기간</Label>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <Checkbox
              id={'endDate'}
              checked={isNoEndDate}
              onChange={() => setIsNoEndDate(!isNoEndDate)}
            />{' '}
            <CheckboxLabel onClick={() => setIsNoEndDate(!isNoEndDate)}>
              종료 기간 미정
            </CheckboxLabel>
          </div>
        </div>

        <DatePicker />
      </Box>

      <Box>
        <Label>모집 인원</Label>
        <Range dataList={personnel} getRangeValue={(value) => console.log(value)} />
      </Box>

      <div
        style={{
          margin: '60px 0',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Label>모집 연령</Label>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <Checkbox id={'anyAge'} checked={isAnyAge} onChange={() => setIsAnyAge(!isAnyAge)} />{' '}
            <CheckboxLabel onClick={() => setIsAnyAge(!isAnyAge)}>무관</CheckboxLabel>
          </div>
        </div>

        <Range dataList={age} getRangeValue={(value) => console.log(value)} />
      </div>

      {/* <Label>여행 키워드</Label> */}
    </div>
  );
};

export default AccompanyBasicInfo;
