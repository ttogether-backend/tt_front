import Search from './search/Search';
import NavUsers from './nav-users/NavUsers';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.scss';
import Nav from './nav/Nav';

const Navbar = () => {
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
          <NavUsers />
        </div>
        <Nav />
      </div>
    </header>
  );
};

export default Navbar;

export const NonNavbar = () => {
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
          <NavUsers />
        </div>
      </div>
    </header>
  );
}

