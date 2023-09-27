import React from 'react';
import styles from './Nav.module.scss';
import { Link } from 'react-router-dom';
// 어떻게 쓰는지 모르겠음
// import colors from '../../../../styles/colors';
// import { css } from '@emotion/react';

const Nav:React.FC<{activeNav?:string;}> = ({activeNav}) => {
  const activeNavName = activeNav || "none";
  // const myStyle = css`
  //   font-size: 16px;
  //   color: #333;
  // `;

  return (
    <div className={styles.nav}>
      <Link to="/" className={activeNavName === "home" && styles.active}>
        홈
      </Link>
      <Link to="/accompany/" className={activeNavName === "accompany" && styles.active}>동행</Link>
    </div>
  );
}

export default Nav