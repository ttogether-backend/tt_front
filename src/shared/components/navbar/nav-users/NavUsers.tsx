import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NavUsers.module.scss';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavUsers: React.FC<{ login?: boolean }> = ({ login }) => {
  const isLogin = login;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

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
              <Link to="/chat" className={styles.chat}>
                채팅
              </Link>
            </li>
            <li>
              <button
                className={styles.user}
                aria-controls={open ? 'user-menu' : undefined}
                aria-haspopup="true"
                aira-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              />
              <Menu
                id="user-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem
                  onClick={() => {
                    navigate('/feed/my');
                  }}
                >
                  마이페이지
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate('/users/personal');
                  }}
                >
                  개인정보수정
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate('/logout');
                  }}
                >
                  로그아웃
                </MenuItem>
              </Menu>
            </li>
          </ul>
          <Link to="/accompany/create" className="btn btn-primary btn-m btn-round">
            동행 글 올리기
          </Link>
        </div>
      ) : (
        <div className={styles.btn_group}>
          <Link to="/login" className="btn btn-transparent btn-m btn-round">
            로그인
          </Link>
          <Link to="/signup" className="btn btn-primary btn-m btn-round">
            회원가입
          </Link>
        </div>
      )}
    </div>
  );
};

export default NavUsers;
