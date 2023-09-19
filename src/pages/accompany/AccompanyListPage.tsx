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
              <Style.Radio>
                <label>
                  <input type="radio" id="" name="radio" value="1" />
                  <div className="radioImg"></div>모집완료 보기
                </label>
              </Style.Radio>
              {/* <input type="radio" name="" id="filter_complete" />
              <label htmlFor="filter_complete">모집완료 보기</label> */}
            </div>
          </div>
        </Style.AccompanyFilter>
        <Style.AccompanyList>
          <Style.AccompanyCard>
            <Link to="">
              <div className="user-box">
                <div className="profile">
                  <div className="img">
                    <img src="/images/tmp/img_user_profile01.png" alt="" />
                  </div>
                  <div className="username">김행성</div>
                  <div className="age">20대</div>
                </div>
                <Style.Auth authNum={1}>1차 인증</Style.Auth>
              </div>
              <div className="card-box">
                <div className="img-box">
                  <Style.AccompanyState name="eat">
                    <div className="category">맛집</div>
                    <div className="state">모집중</div>
                  </Style.AccompanyState>
                  <div className="img-wrap">
                    <img src="/images/tmp/img_tmp_acc_card.png" alt="" />
                  </div>
                  <div className="accompany-info">
                    <div className="date">
                      동행일자
                      <span>2023.04</span>
                    </div>
                    <div className="personnel-wrap">
                      <span className="cnt">2명</span> / <span className="personnel">5명</span>
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="tit">파리 에펠탑 투어 같이 가실 분</div>
                  <div className="location">프랑스 파리</div>
                  <div className="tags">
                    <div className="tag">느긋한 여행</div>
                    <div className="tag">인증샷 남기기</div>
                  </div>
                </div>
              </div>
            </Link>
          </Style.AccompanyCard>
          <Style.AccompanyCard>
            <Link to="">
              <div className="user-box">
                <div className="profile">
                  <div className="img">
                    <img src="/images/tmp/img_user_profile01.png" alt="" />
                  </div>
                  <div className="username">김행성</div>
                  <div className="age">20대</div>
                </div>
                <Style.Auth authNum={1}>1차 인증</Style.Auth>
              </div>
              <div className="card-box">
                <div className="img-box">
                  <Style.AccompanyState name="eat">
                    <div className="category">맛집</div>
                    <div className="state">모집중</div>
                  </Style.AccompanyState>
                  <div className="img-wrap">
                    <img src="/images/tmp/img_tmp_acc_card.png" alt="" />
                  </div>
                  <div className="accompany-info">
                    <div className="date">
                      동행일자
                      <span>2023.04</span>
                    </div>
                    <div className="personnel-wrap">
                      <span className="cnt">2명</span> / <span className="personnel">5명</span>
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="tit">파리 에펠탑 투어 같이 가실 분</div>
                  <div className="location">프랑스 파리</div>
                  <div className="tags">
                    <div className="tag">느긋한 여행</div>
                    <div className="tag">인증샷 남기기</div>
                  </div>
                </div>
              </div>
            </Link>
          </Style.AccompanyCard>
          <Style.AccompanyCard>
            <Link to="">
              <div className="user-box">
                <div className="profile">
                  <div className="img">
                    <img src="/images/tmp/img_user_profile01.png" alt="" />
                  </div>
                  <div className="username">김행성</div>
                  <div className="age">20대</div>
                </div>
                <Style.Auth authNum={1}>1차 인증</Style.Auth>
              </div>
              <div className="card-box">
                <div className="img-box">
                  <Style.AccompanyState name="eat">
                    <div className="category">맛집</div>
                    <div className="state">모집중</div>
                  </Style.AccompanyState>
                  <div className="img-wrap">
                    <img src="/images/tmp/img_tmp_acc_card.png" alt="" />
                  </div>
                  <div className="accompany-info">
                    <div className="date">
                      동행일자
                      <span>2023.04</span>
                    </div>
                    <div className="personnel-wrap">
                      <span className="cnt">2명</span> / <span className="personnel">5명</span>
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="tit">파리 에펠탑 투어 같이 가실 분</div>
                  <div className="location">프랑스 파리</div>
                  <div className="tags">
                    <div className="tag">느긋한 여행</div>
                    <div className="tag">인증샷 남기기</div>
                  </div>
                </div>
              </div>
            </Link>
          </Style.AccompanyCard>
          <Style.AccompanyCard>
            <Link to="">
              <div className="user-box">
                <div className="profile">
                  <div className="img">
                    <img src="/images/tmp/img_user_profile01.png" alt="" />
                  </div>
                  <div className="username">김행성</div>
                  <div className="age">20대</div>
                </div>
                <Style.Auth authNum={1}>1차 인증</Style.Auth>
              </div>
              <div className="card-box">
                <div className="img-box">
                  <Style.AccompanyState name="eat">
                    <div className="category">맛집</div>
                    <div className="state">모집중</div>
                  </Style.AccompanyState>
                  <div className="img-wrap">
                    <img src="/images/tmp/img_tmp_acc_card.png" alt="" />
                  </div>
                  <div className="accompany-info">
                    <div className="date">
                      동행일자
                      <span>2023.04</span>
                    </div>
                    <div className="personnel-wrap">
                      <span className="cnt">2명</span> / <span className="personnel">5명</span>
                    </div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="tit">파리 에펠탑 투어 같이 가실 분</div>
                  <div className="location">프랑스 파리</div>
                  <div className="tags">
                    <div className="tag">느긋한 여행</div>
                    <div className="tag">인증샷 남기기</div>
                  </div>
                </div>
              </div>
            </Link>
          </Style.AccompanyCard>
        </Style.AccompanyList>
      </Style.Container>
    </Page>
  );
};

export default AccompanyListPage;
