import { ProfileImage } from 'src/shared/components/ProfileImage/ProfileImage';
import { AccompanyOwner, UserAuthLevel } from './AccompanyDetail.styles';
import AuthBadgeIcon from 'src/assets/icon/AuthBadgeIcon';
import styled from '@emotion/styled';

interface UserPropsType {
  url: string;
  name: string;
  showBadge?: boolean;
}

const User = (props: UserPropsType) => {
  const { url, name, showBadge } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            position: 'relative',
          }}
        >
          <ProfileImage imageSize="40" src={url} />
          {showBadge && <Badge>나</Badge>}
        </div>
        <AccompanyOwner>{name}</AccompanyOwner>
      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <AuthBadgeIcon.Primary style={{ marginRight: '8px' }} />{' '}
        <UserAuthLevel>1차 인증</UserAuthLevel>
      </div>
    </div>
  );
};

export default User;

const Badge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #64c243;
  color: #fff;

  position: absolute;
  top: -4px;
  right: 0;

  font-size: 10px;
  font-weight: 700;
  line-height: 100%;
`;
