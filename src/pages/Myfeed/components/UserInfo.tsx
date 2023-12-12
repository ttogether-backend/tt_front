import { Link } from 'react-router-dom';
import ProfileImage from './ProfileImage';
import { Text } from './Text';
import { FlexContainer } from '../layout/FlexContainer';

interface UserInfoProps {
  id: string;
  nickname: string;
  profileImagePath: string;
}

const UserInfo = ({ id, nickname, profileImagePath }: UserInfoProps) => {
  return (
    <FlexContainer gap={5}>
      <ProfileImage src={profileImagePath} size={20} />

      <Link to={`/myfeed/${id}`}>
        <Text fontType={Text.FontType.description} color={Text.FontColor.gray}>
          {`${nickname}님 >`}
        </Text>
      </Link>
    </FlexContainer>
  );
};

export default UserInfo;
