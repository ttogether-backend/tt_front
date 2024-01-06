import { FC, useState, useEffect } from 'react';
import DateRangePicker from '../Form/DateRangePicker';
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
} from '../Form/AccompanyForm.styles';
import { Range } from 'src/shared/components/Range/Range';
import { SingleSelector } from 'src/shared/components/Range/SingleSelector';
import { RangeDataList } from 'src/shared/components/Range/Range.types';
import { DataList } from 'src/shared/components/Range/SingleSelector.types';
import Checkbox from 'src/shared/components/Checkbox/Checkbox';
import { AccompanyType, LocationInfo } from '../Form/AccompanyForm.types';
import { MapDialog } from '../Form/MapDialog';

const AccompanyBasicInfo = ({ postInfo, setBasicInfo, recruitAgeRange }) => {
  const [isAnyAge, setIsAnyAge] = useState(false);
  const [selectedType, setSelectedType] = useState<AccompanyType>(AccompanyType.culture);
  const [openModal, setOpenModal] = useState(false);
  const [range, setRange] = useState([]);
  const [locationInfo, setLocationInfo] = useState<LocationInfo>({
    location_id: 0,
    country: '',
    city: '',
    latitude: '',
    longitude: '',
    name: '',
    address: '',
  });
  console.log('postInfo', postInfo);

  useEffect(() => {
    setRange([postInfo.min_recruit_age, postInfo.max_recruit_age]);
  }, [postInfo]);

  const handleButtonClick = (type: AccompanyType) => {
    setSelectedType(type);
    setBasicInfo({
      category: type,
    });
  };
  const handleRecruitNum = (value: number) => {
    setBasicInfo({
      recruit_number: value,
    });
  };
  const handleIsAnyAge = (value: boolean) => {
    console.log('value', value);
    setIsAnyAge(value);
    setBasicInfo({
      is_age_free: value,
    });
  };
  const handleAgeRange = (value: Object[]) => {
    console.log('value', value);

    const selectedItems = value.filter((item) => item.isSelected);
    const values = selectedItems.map((item) => item.value);

    // Math.max와 Math.min을 사용하여 최대값과 최소값 계산
    const max = Math.max(...values);
    const min = Math.min(...values);

    console.log(max, min);
    setBasicInfo({
      min_recruit_age: min,
      max_recruit_age: max,
    });
  };

  useEffect(() => {
    setBasicInfo({
      location_info: [locationInfo],
    });
  }, [locationInfo]);

  const personnel: DataList[] = [
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
          <Button
            name={AccompanyType.culture}
            isSelected={postInfo.category === AccompanyType.culture}
            onClick={() => handleButtonClick(AccompanyType.culture)}
            background="#85B3B5"
          >
            문화
          </Button>
          <Button
            name={AccompanyType.food}
            isSelected={postInfo.category === AccompanyType.food}
            onClick={() => handleButtonClick(AccompanyType.food)}
            background="#D97736"
          >
            맛집
          </Button>
          <Button
            name={AccompanyType.travel}
            isSelected={postInfo.category === AccompanyType.travel}
            onClick={() => handleButtonClick(AccompanyType.travel)}
            background="#5BB13D"
          >
            여행
          </Button>
        </TypeWrapper>
      </Box>

      <Box>
        <Label>동행 장소</Label>
        <PlaceWrapper>
          <ResultInput onClick={(e) => setOpenModal(true)}>
            {postInfo.location_info[0].name}
          </ResultInput>
          <SearchButton onClick={(e) => setOpenModal(true)}>검색하기</SearchButton>
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
            {/* <Checkbox
              id={'endDate'}
              checked={isNoEndDate}
              onChange={() => setIsNoEndDate(!isNoEndDate)}
            />{' '}
            <CheckboxLabel onClick={() => setIsNoEndDate(!isNoEndDate)}>
              종료 기간 미정
            </CheckboxLabel> */}
          </div>
        </div>

        <DateRangePicker setBasicInfo={setBasicInfo} />
      </Box>

      <Box>
        <Label>모집 인원</Label>
        <SingleSelector
          dataList={personnel}
          setSingleDataValue={(value) => handleRecruitNum(value)}
          singleDataValue={postInfo.recruit_number}
        />
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
            <Checkbox id={'anyAge'} checked={isAnyAge} onChange={() => handleIsAnyAge(!isAnyAge)} />{' '}
            <CheckboxLabel onClick={() => setIsAnyAge(!isAnyAge)}>무관</CheckboxLabel>
          </div>
        </div>

        <Range
          dataList={age}
          getRangeValue={(value) => handleAgeRange(value)}
          rangeValue={recruitAgeRange}
        />
      </div>

      <MapDialog
        isOpen={openModal}
        isCloseBackgroundClick={true}
        setLocationInfo={setLocationInfo}
        handleClose={() => {
          setOpenModal(false);
        }}
        handleConfirm={function () {
          throw new Error('Function not implemented.');
        }}
        // handleConfirm:(accordionItem:AccordionItem) => any;
      />
    </div>
  );
};

export default AccompanyBasicInfo;
