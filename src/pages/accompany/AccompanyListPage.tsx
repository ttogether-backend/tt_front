import { AccompanyCard } from 'src/shared/components/AccompanyCard';
import React, { useEffect, useState } from 'react';
import { AccompanyCardProps } from 'src/shared/components/AccompanyCard/AccompanyCard.types';
import Page from '../layout';
import * as Style from './AccompanyListPage.styles';
import { Link } from 'react-router-dom';
import Dropdown from 'src/shared/components/Dropdown';
import { Range } from 'src/shared/components/Range/Range';
import DropdownItem from 'src/components/accompany/DropdownItem';
import DateRangePicker from 'src/components/accompany/DropdownItem/Datepicker';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import createAxios from 'src/Utils/axiosInstance';

const getAccompanyList = async () => {
  const cookies = new Cookies();
  const axiosInstance = createAxios();

  axiosInstance
    .post('/api/v1/accompany/posts/init')
    .then((res) => {
      console.log('res', res);
      var postId = res.data.result.data.creating_accompany_post.accompanyPostId.value;
      console.log(postId);
      axiosInstance
        .post(
          '/api/v1/accompany/posts/' + postId,
          {
            category: 'TRAVEL',
            title: '뚜기와 함께하는 여행',
            content: '제주도로 가기',
            expected_start_at: '2024-01-20',
            expected_end_at: '2024-09-20',
            thumbnail_url:
              'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbK77rj%2FbtrDyF4hWX8%2FlPMPnDbvxPv4sWpdGZ3bhK%2Fimg.jpg',
            recruit_number: 1,
            is_age_free: false,
            min_recruit_age: 20,
            max_recruit_age: 30,
            location_info: [
              {
                location_id: 3,
                country: 'korea',
                city: 'seoul',
                latitude: '12354',
                longitude: '4897',
                name: '오뚜기',
                address: '서울시양천구',
              },
            ],
            add_content: '밥 먹고싶어요',
          },
          {
            headers: {
              memberId: cookies.get('memberId'),
              post_id: postId,
            },
          }
        )
        .then((res) => {
          console.log('postId res', res);
        });
    })
    .catch((Error) => {
      console.log(Error);
    });
};

const AccompanyListPage = () => {
  const [accompanyCardList, setAccompanyCardList] = useState(null);
  const [filteredAccompanyCardList, setFilteredAccompanyCardList] = useState([]);
  const [choicedCategory, setChoicedCategory] = useState<string[]>([]);
  const [choicedAge, setChoicedAge] = useState<number[]>([]);
  const [choicedPersonnel, setChoicedPersonnel] = useState<number[]>([]);
  const [choicedPeriod, setChoicedPeriod] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [categoryText, setCategoryText] = useState<string>('카테고리');
  const [ageText, setAgeText] = useState<string>('동행연령');
  const [personnelText, setPersonnelText] = useState<string>('동행인원');
  const [periodText, setPeriodText] = useState<string>('여행기간');

  const cookies = new Cookies();
  //getAccompanyList();
  useEffect(() => {
    const axiosInstance = createAxios();

    axiosInstance
      .get('/api/v1/accompany/posts')
      .then((res) => {
        console.log(res);
        console.log(res.data.result.data.accompany_summary);
        setAccompanyCardList(res.data.result.data.accompany_summary);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  const categoryDataList = [
    { name: 'TRAVEL', isSelected: false },
    { name: 'CULTURE', isSelected: false },
    { name: 'FOOD', isSelected: false },
  ];

  const ageDataList = [
    { value: 10, unit: '대', isSelected: false },
    { value: 20, unit: '대', isSelected: false },
    { value: 30, unit: '대', isSelected: false },
    { value: 40, unit: '대', isSelected: false },
    { value: 50, unit: '대', isSelected: false },
    { value: 60, unit: '대', isSelected: false },
    { value: 70, unit: '대 이상', isSelected: false },
  ];

  const personnelDataList = [
    { value: 1, unit: '명', isSelected: false },
    { value: 2, unit: '명', isSelected: false },
    { value: 3, unit: '명', isSelected: false },
    { value: 4, unit: '명', isSelected: false },
    { value: 5, unit: '명', isSelected: false },
    { value: 6, unit: '명', isSelected: false },
  ];

  const getCategoryValue = (value: string[]) => {
    setChoicedCategory(value);
    if (value.length === 0) setCategoryText('카테고리');
    else if (value.length === 1) setCategoryText(value[0]);
    else setCategoryText(value.join(', '));
  };

  const getPersonnelValue = (value: number[]) => {
    setChoicedPersonnel(value);
    if (value.length === 0) setPersonnelText('동행인원');
    else if (value.length === 1) setPersonnelText(`${value[0]}명`);
    else setPersonnelText(`${value[0]}명 ~ ${value[1]}명`);
  };

  const getAgeValue = (value: number[]) => {
    setChoicedAge(value);
    if (value.length === 0) setAgeText('동행연령');
    else if (value.length === 1) setAgeText(`${value[0]}대`);
    else setAgeText(`${value[0]}대 ~ ${value[1]}대`);
  };

  const handleDatesChange = ({ startDate, endDate }) => {
    setChoicedPeriod([startDate, endDate]);
    if (startDate === null && endDate === null) setPeriodText('여행기간');
    else setPeriodText(`${startDate} ~ ${endDate}`);
    console.log(`${startDate} ~ ${endDate}`);
  };

  const handleComplete = () => {
    setIsComplete(!isComplete);
  };

  useEffect(() => {
    const filterAccompanyList = () => {
      let filteredList = accompanyCardList;

      // Category 필터
      if (choicedCategory.length > 0) {
        filteredList = filteredList.filter((data) => choicedCategory.includes(data.category));
      }

      // Age 필터
      if (choicedAge.length > 0) {
        filteredList = filteredList.filter((data) => {
          const { minRecruitAge, maxRecruitAge } = data.recruit_age_range;
          if (choicedAge.length === 1)
            return choicedAge[0] === minRecruitAge || choicedAge[0] === maxRecruitAge;
          else return choicedAge[0] <= maxRecruitAge && choicedAge[1] >= minRecruitAge;
        });
      }

      // Personnel 필터
      if (choicedPersonnel.length > 0) {
        filteredList = filteredList.filter((data) => {
          if (choicedPersonnel.length === 1) return choicedPersonnel[0] === data.recruit_number;
          else
            return (
              choicedPersonnel[0] <= data.recruit_number &&
              choicedPersonnel[1] >= data.recruit_number
            );
        });
      }

      // Period 필터
      if (choicedPeriod.length === 2) {
        const [startPeriod, endPeriod] = choicedPeriod;
        filteredList = filteredList.filter(
          (data) =>
            new Date(data.period.startAt) >= new Date(startPeriod) &&
            new Date(data.period.endAt) <= new Date(endPeriod)
        );
      }

      if (isComplete) {
        filteredList = filteredList.filter((data) => data.status === 'COMPLETE');
      }

      setFilteredAccompanyCardList(filteredList);
    };

    filterAccompanyList();
  }, [choicedCategory, choicedAge, choicedPersonnel, choicedPeriod, accompanyCardList, isComplete]);

  useEffect(() => {
    console.log('fil', filteredAccompanyCardList);
  }, [filteredAccompanyCardList]);

  return (
    <Page activeNav="accompany">
      <Style.Container>
        <Style.AccompanyBanner>
          <div className="banner">
            <Link to="">
              <div className="txt-wrap">
                <div className="desc">아직 원하는 동행 글이 없다면?</div>
                <div className="tit">
                  원하는 여행지의
                  <br />
                  동행을 구해보세요
                </div>
              </div>
              <div className="img-wrap">
                <img src="/images/accompanyBanner/img_acc_banner01.png" alt="" />
              </div>
            </Link>
          </div>
        </Style.AccompanyBanner>
        <Style.AccompanyFilter>
          <div className="left">
            <Dropdown dropdownText={ageText} dropdownTitle="동행 연령" choicedItem={choicedAge}>
              <Range dataList={ageDataList} getRangeValue={getAgeValue} rangeValue={choicedAge} />
            </Dropdown>
            <Dropdown
              dropdownText={personnelText}
              dropdownTitle="동행 인원"
              choicedItem={choicedPersonnel}
            >
              <Range
                dataList={personnelDataList}
                getRangeValue={getPersonnelValue}
                rangeValue={choicedPersonnel}
              />
            </Dropdown>
            <Dropdown
              dropdownText={categoryText}
              dropdownTitle="카테고리"
              choicedItem={choicedCategory}
            >
              <DropdownItem
                itemList={categoryDataList}
                selectedItem={choicedCategory}
                getSelectedItem={getCategoryValue}
              />
            </Dropdown>
            <Dropdown
              dropdownText={periodText}
              dropdownTitle="여행기간"
              choicedItem={choicedPeriod}
            >
              <DateRangePicker onDatesChange={handleDatesChange} />
            </Dropdown>
          </div>
          <div className="right">
            <div className="filter-item">
              <Style.Checkbox>
                <label>
                  <input
                    type="checkbox"
                    id=""
                    name="checkbox"
                    value="1"
                    onChange={handleComplete}
                  />
                  <div className="checkImg"></div>모집완료 보기
                </label>
              </Style.Checkbox>
              {/* <input type="radio" name="" id="filter_complete" />
              <label htmlFor="filter_complete">모집완료 보기</label> */}
            </div>
          </div>
        </Style.AccompanyFilter>
        <Style.AccompanyList>
          {filteredAccompanyCardList &&
            filteredAccompanyCardList.map((data, index) => (
              <AccompanyCard
                key={index}
                isAccomList={true}
                accomId={data.accompany_id}
                accomPostId={data.accompany_post_id}
                memberId={data.host.member_id}
                authNum={1}
                auth="1차 인증"
                profileImgSrc={data.host.profile_image_path}
                username={data.host.nickname}
                age={`${data.recruit_age_range.minRecruitAge}대 ~ ${data.recruit_age_range.maxRecruitAge}대`}
                thumbSrc={data.thumbnail_url}
                category={data.category}
                status={data.status}
                date={`${data.period.startAt} ~ ${data.period.endAt}`}
                cnt={data.joining_member_count}
                personnel={data.recruit_number}
                title={data.title}
                location={data.location_info_list[0].name}
                tags={[]}
              />
            ))}
        </Style.AccompanyList>
      </Style.Container>
    </Page>
  );
};

export default AccompanyListPage;
