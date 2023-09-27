import { ProfileImage } from 'src/shared/components/ProfileImage/ProfileImage';
import {
  AccompanyOwner,
  ChatButton,
  ParticipantBox,
  ParticipantListTitle,
  ParticipatedStatus,
  UserAuthLevel,
} from './AccompanyDetail.styles';
import AuthBadgeIcon from 'src/assets/icon/AuthBadgeIcon';

const Participant = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ParticipantBox>
        {/* 아래 프로필 정보 컴포넌트화 필요 */}
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
            <ProfileImage imageSize="40" src={'/src/assets/cardDummy.png'} />
            <AccompanyOwner>김행성</AccompanyOwner>
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

        <ChatButton>1:1 채팅</ChatButton>
        <ParticipatedStatus type="apply">동행 신청</ParticipatedStatus>
      </ParticipantBox>

      <ParticipantBox>
        <ParticipantListTitle>참여자 목록</ParticipantListTitle>
        {/* <ChatButton>채팅방 재입장</ChatButton> */}
        <ParticipatedStatus type="owner">참여자 관리</ParticipatedStatus>
      </ParticipantBox>
    </div>
  );
};

export default Participant;
