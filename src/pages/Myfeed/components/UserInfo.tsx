import { Link } from 'react-router-dom';
import Profile from './Profile';
import { RowContainer } from '../layout/RowContainer';

interface UserInfoProps {
  id: string;
  nickname: string;
  profileImagePath: string;
}

const nicknameStyle = {
  color: '#52564e',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '20px',
};

const UserInfo = ({ id, nickname, profileImagePath }: UserInfoProps) => {
  return (
    <RowContainer style={{gap: '5px'}}>
      <Profile src={profileImagePath} size={20} />
      <div style={nicknameStyle}>
        <Link style={nicknameStyle} to={`/myfeed/${id}`}>{`${nickname}님 >`}</Link>
      </div>
    </RowContainer>
  );
};

export default UserInfo;
