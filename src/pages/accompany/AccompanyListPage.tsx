import { AccompanyCard } from "src/shared/components/AccompanyCard";
import React, { useState } from "react";
import { AccompanyCardProps } from "src/shared/components/AccompanyCard/AccompanyCard.types";
import Page from "../layout";
import * as Style from "./AccompanyListPage.styles";
import { Link } from 'react-router-dom';
import Dropdown from "src/shared/components/Dropdown";
import { Range } from "src/shared/components/Range/Range";
import DropdownItem from "src/components/accompany/DropdownItem";
import DateRangePicker from "src/components/accompany/DropdownItem/Datepicker";
import { set } from "date-fns";


const AccompanyListPage = () => {
  const [accompanyCardList, setAccompanyCardList] = useState<AccompanyCardProps[]>([]);
  const [choicedCategory, setChoicedCategory] = useState<string[]>([]);
  const [choicedAge, setChoicedAge] = useState<number[]>([]);
  const [choicedPersonnel, setChoicedPersonnel] = useState<number[]>([]);
  const [choicedPeriod, setChoicedPeriod] = useState<string[]>([]);
  const [categoryText, setCategoryText] = useState<string>("카테고리");
  const [ageText, setAgeText] = useState<string>("동행연령");
  const [personnelText, setPersonnelText] = useState<string>("동행인원");
  const [periodText, setPeriodText] = useState<string>("여행기간");

  const categoryDataList = [
    {name: "여행", isSelected: false},
    {name: "문화", isSelected: false},
    {name: "맛집", isSelected: false},
  ]

  const ageDataList = [
    {value: 10, unit: "대", isSelected: false},
    {value: 20, unit: "대", isSelected: false},
    {value: 30, unit: "대", isSelected: false},
    {value: 40, unit: "대", isSelected: false},
    {value: 50, unit: "대", isSelected: false},
    {value: 60, unit: "대", isSelected: false},
    {value: 70, unit: "대 이상", isSelected: false},
  ]

  const personnelDataList = [
    {value: 1, unit: "명", isSelected: false},
    {value: 2, unit: "명", isSelected: false},
    {value: 3, unit: "명", isSelected: false},
    {value: 4, unit: "명", isSelected: false},
    {value: 5, unit: "명", isSelected: false},
    {value: 6, unit: "명", isSelected: false},
  ];

  const getCategoryValue = (value: string[]) => {
    setChoicedCategory(value);
    if(value.length === 0) setCategoryText("카테고리");
    else if(value.length === 1) setCategoryText(value[0]);
    else setCategoryText(value.join(", "));
  }

  const getPersonnelValue = (value: number[]) => {
    setChoicedPersonnel(value);
    if(value.length === 0) setPersonnelText("동행인원");
    else if(value.length === 1) setPersonnelText(`${value[0]}명`);
    else setPersonnelText(`${value[0]}명 ~ ${value[1]}명`);
  }

  const getAgeValue = (value: number[]) => {
    setChoicedAge(value);
    if(value.length === 0) setAgeText("동행연령");
    else if(value.length === 1) setAgeText(`${value[0]}대`);
    else setAgeText(`${value[0]}대 ~ ${value[1]}대`);
  };
  console.log(choicedCategory);

    const handleDatesChange = ({ startDate, endDate }) => {
      setChoicedPeriod([startDate, endDate]);
      if(startDate === null && endDate === null) setPeriodText("여행기간");
      else setPeriodText(`${startDate} ~ ${endDate}`);
    };

  return (
    <Page activeNav='accompany'>
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
              <Range dataList={ageDataList} getRangeValue={getAgeValue} rangeValue={choicedAge}/>
            </Dropdown>
            <Dropdown dropdownText={personnelText} dropdownTitle="동행 인원" choicedItem={choicedPersonnel}>
              <Range dataList={personnelDataList} getRangeValue={getPersonnelValue} rangeValue={choicedPersonnel}/>
            </Dropdown>
            <Dropdown dropdownText={categoryText} dropdownTitle="카테고리" choicedItem={choicedCategory}>
              <DropdownItem itemList={categoryDataList} selectedItem={choicedCategory} getSelectedItem={getCategoryValue}/>
            </Dropdown>
            <Dropdown dropdownText={periodText} dropdownTitle="여행기간" choicedItem={choicedPeriod}>
              <DateRangePicker onDatesChange={handleDatesChange}/>
            </Dropdown>
      
          </div>
          <div className="right">
            <div className="filter-item">
              <Style.Checkbox>
                <label>
                  <input type="checkbox" id="" name="checkbox" value="1" />
                  <div className="checkImg"></div>모집완료 보기
                </label>
              </Style.Checkbox>
              {/* <input type="radio" name="" id="filter_complete" />
              <label htmlFor="filter_complete">모집완료 보기</label> */}
            </div>
          </div>
        </Style.AccompanyFilter>
        <Style.AccompanyList>
          <AccompanyCard
            isAccomList={true}
            profileImgSrc="/images/tmp/img_user_profile01.png"
            username="거지"
            age="20대"
            auth="1차 인증"
            authNum={1}
            thumbSrc="/images/tmp/img_tmp_acc_card.png"
            category="restaurant"
            status="open"
            date="2023.04"
            cnt={2}
            personnel={5}
            title="파리 에펠탑 투어 같이 가실 분"
            location="프랑스 파리"
            tags={['test', 'test2']}
          />
        </Style.AccompanyList>
      </Style.Container>
    </Page>
  );
};

export default AccompanyListPage;
