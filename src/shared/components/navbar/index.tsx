import Search from './search/Search';
import NavUsers from './nav-users/NavUsers';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import Nav from './nav/Nav';
import React from 'react';

const Navbar:React.FC<{activeNav?:string; login?:boolean;}> = ({activeNav, login}) => {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.hd_top}>
          <div className={styles.hd_left}>
            <Link to="/" className={styles.logo}>
              <div className={styles.img}>트래블투게더</div>
            </Link>
            <Search />
          </div>
          <NavUsers login={login}/>
        </div>
        <Nav activeNav={activeNav}/>
      </div>
    </header>
  );
};

export default Navbar;

export const NonNavbar:React.FC<{login?:boolean;}> = ({login}) => {
  return (
    <header className={styles.header} style={{height: "72px", display: "flex", alignItems: "center", paddingBottom: "14px"}}>
      <div className="container">
        <div className={styles.hd_top}>
          <div className={styles.hd_left}>
            <Link to="/" className={styles.logo}>
              <div className={styles.img}>트래블투게더</div>
            </Link>
            <Search />
          </div>
          <NavUsers login={login}/>
        </div>
      </div>
    </header>
  );
}

