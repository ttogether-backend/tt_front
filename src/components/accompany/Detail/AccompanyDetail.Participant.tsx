import {
  ChatButton,
  ParticipantBox,
  ParticipantListTitle,
  ParticipatedStatus,
} from './AccompanyDetail.styles';
import User from './AccompanyDetail.User';

const Participant = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <ParticipantBox>
        <User url="/src/assets/cardDummy.png" name="김행성" />

        <ChatButton>1:1 채팅</ChatButton>
        <ParticipatedStatus type="apply">동행 신청</ParticipatedStatus>
      </ParticipantBox>

      <ParticipantBox>
        <ParticipantListTitle>참여자 목록</ParticipantListTitle>

        <User url="/src/assets/cardDummy.png" name="김행성" />
        <User url="/src/assets/cardDummy.png" name="김행성" showBadge />
        <User url="/src/assets/cardDummy.png" name="김행성" />
        <User url="/src/assets/cardDummy.png" name="김행성" />

        {/* <ChatButton>채팅방 재입장</ChatButton> */}
        <ParticipatedStatus type="owner">참여자 관리</ParticipatedStatus>
      </ParticipantBox>
    </div>
  );
};

export default Participant;
