import { AccompanyCard } from "src/shared/components/AccompanyCard";
import Page from "../layout";
import * as Style from "./AccompanyListPage.styles";
import { Link } from 'react-router-dom';

const AccompanyListPage = () => {
  return (
    <Page>
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
            <div className="filter-item">대륙</div>
            <div className="filter-item">동행 연령</div>
            <div className="filter-item">동행 인원</div>
            <div className="filter-item">카테고리</div>
            <div className="filter-item">여행기간</div>
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
            profileImgSrc="/images/tmp/img_user_profile01.png"
            username="거지"
            age="20대"
            auth="1차 인증"
            authNum={1}
            thumbSrc="/images/tmp/img_tmp_acc_card.png"
            category="맛집"
            status="모집중"
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
