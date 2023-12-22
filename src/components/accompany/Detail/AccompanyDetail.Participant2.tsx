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
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 1176,
        margin: '0 auto',
        height: '100%',
      }}
    >
      <ParticipantBox>
        <User url="/src/assets/cardDummy.png" name="김행성" showBadge />
      </ParticipantBox>

      <ParticipantBox style={{ width: 200 }}>
        <ChatButton>채팅 요청하기</ChatButton>
      </ParticipantBox>
    </div>
  );
};

export default Participant;
