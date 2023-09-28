import React, {useEffect, useState} from "react";
import Page from "../layout";
import * as Style from "./Home.style";
import ButtonsText from "src/shared/components/ButtonsText";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <Page activeNav="home">
      <Style.Container>
        <Style.IntroContainer>
          <Style.IntrosContainer>
            <Style.IntroLogo />
            <Style.IntroText>
              여자끼리 안전하게 <br />
              우리끼리 나누는 여행 맛집
            </Style.IntroText>
            <Link to="/accompany">
              <ButtonsText label="지금 모집 중인 동행 보러가기" styleType={Style.accomListButtonStyle} />
            </Link>
          </Style.IntrosContainer>
          
        </Style.IntroContainer>
        <Style.GuideContainer>
          <Style.GuidesContainer>
            <img src="/images/common/accompany_guide.png" alt="guide" style={{width: "732px", height:"auto"}}/>
            <Style.GuideContentContainer>
              <Style.GuideText>
                본인 인증된 회원들과 <br />더욱 안전하게 동행을 즐기세요
              </Style.GuideText>
              <ButtonsText label="1차 인증이란?" styleType={Style.authGuideButtonStyle} />
              <ButtonsText label="사용자 가이드 보러가기" styleType={Style.useGuideButtonStyle} />
            </Style.GuideContentContainer>
          </Style.GuidesContainer>
        </Style.GuideContainer>
        <Style.MoreContainer >
          <Style.GuidesContainer>
            <Style.MoreContentContainer>
              <Style.MoreText>
                투게더 트래블 서비스가 <br />더 궁금하다면?
              </Style.MoreText>
              <ButtonsText label="투게더 트래블 더 알아보기" styleType={Style.moreButtonStyle} />
              <ButtonsText label="바로 시작하기!" styleType={Style.authGuideButtonStyle} />
            </Style.MoreContentContainer>
            <img src="/images/common/page_guide.png" alt="more" style={{width: "583px", height:"auto"}}/>
            </Style.GuidesContainer>
        </Style.MoreContainer>
      </Style.Container>
    </Page>
  );
}

export default Home;