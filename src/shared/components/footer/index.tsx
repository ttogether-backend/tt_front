import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';


const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.f_top}>
          <div className={styles.ft_left}>
            <div className={styles.ft_logo}>
              <img src="/images/common/logo-b.svg" alt="" />
            </div>
            <p>여자끼리 안전한 동행</p>
            <p>우리끼리 나누는 여행맛집 커뮤니티</p>
            <ul className={styles.sns_list}>
              <li>
                <Link to="" className={styles.blog}>
                  블로그
                </Link>
              </li>
              <li>
                <Link to="" className={styles.instagram}>
                  인스타그램
                </Link>
              </li>
              <li>
                <Link to="" className={styles.youtube}>
                  유튜브
                </Link>
              </li>
              <li>
                <Link to="" className={styles.facebook}>
                  페이스북
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.ft_right}>
            <div className={styles.item}>
              <div className={styles.tit}>COMPANY</div>
              <ul>
                <li>
                  <Link to="">회사소개</Link>
                </li>
                <li>
                  <Link to="">이용안내</Link>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className={styles.tit}>SERVICE</div>
              <ul>
                <li>
                  <Link to="">이용약관</Link>
                </li>
                <li>
                  <Link to="" className={styles.term}>
                    개인정보처리방침
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className={styles.tit}>고객센터</div>
              <ul>
                <li>
                  <Link to="">공지사항</Link>
                </li>
                <li>
                  <Link to="">자주 묻는 질문</Link>
                </li>
              </ul>
            </div>
            <div className={styles.item}>
              <div className={styles.tit}>
                고객문의<i className={styles.contact}></i>
              </div>
              <Link to="" className={styles.btn_contact}>
                문의하기
              </Link>
              <p>평일 오전 9시 ~ 오후 6시</p>
            </div>
          </div>
        </div>
        <div className={styles.f_bottom}>
          <div className={styles.fb_info}>
            <p>서울특별시청 04524 서울특별시 중구 세종대로 110, 3층 트레블투개더</p>
            <p>
              <span>대표 : 김한강</span>
              <span>대표전화: 02-120</span>
              <span>사업자 등록번호 : 111-81-4456</span>
              <span>대표전화 : 02-1234-5678</span>
              <span>팩스 : 02-1234-5679</span>
            </p>
            <p className={styles.copy}>© 2023 Together Travel, Inc. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
