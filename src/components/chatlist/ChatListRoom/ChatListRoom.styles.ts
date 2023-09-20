import styled from '@emotion/styled';

export const ChatListRoomContainer = styled.div`
  display: grid;
  width: 326.93px;
  height: 107.24px;
  padding: 13.62px;
  grid-template-areas:
    'profile chat-room-header'
    'profile chat-room-body'
    'profile accompany-post';
  grid-template-columns: fit-content(100%) 1fr;
  column-gap: 6.81px;
  row-gap: 8px;
`;
export const ChatProfileContainer = styled.div`
  grid-area: profile;
  width: 34.1px;
`;
export const ChatHeader = styled.div`
  display: grid;
  grid-area: chat-room-header;
  grid-template-areas: 'title member-count time';
`;
export const ChatRoomTile = styled.div`
  grid-area: title;
  color: var(--bw-bk, #000);
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
  width: 177px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const ChatRoomMemberCount = styled.div`
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  grid-area: member-count;
  color: var(--grey-grey-500, #73796e);
`;
export const ChatTime = styled.div`
  color: var(--grey-grey-500, #73796e);
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  grid-area: time;
`;
