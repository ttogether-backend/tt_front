import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavUsers.module.scss';

const NavUsers:React.FC<{login?: boolean}> = ({login}) => {

  const isLogin = login;

  return (
    <div className={styles.nav_user_wrap}>
      {isLogin ? (
        <div className={styles.nav_user}>
          <ul>
            <li>
              <Link to="" className={styles.calendar}>
                캘린더
              </Link>
            </li>
            <li>
              <Link to="" className={styles.notification}>
                알림
              </Link>
            </li>
            <li>
              <Link to="" className={styles.chat}>
                채팅
              </Link>
            </li>
            <li>
              <Link to="" className={styles.user}>
                마이페이지
              </Link>
            </li>
          </ul>
          <Link to="" className="btn btn-primary btn-m btn-round">
            동행 글 올리기
          </Link>
        </div>
      ) : (
        <div className={styles.btn_group}>
          <Link to="" className="btn btn-transparent btn-m btn-round">
            로그인
          </Link>
          <Link to="" className="btn btn-primary btn-m btn-round">
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
}

export default NavUsers