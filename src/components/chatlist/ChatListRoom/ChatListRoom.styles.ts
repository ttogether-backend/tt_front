import styled from '@emotion/styled';

export const ChatListRoomContainer = styled.div`
  display: grid;
  width: 326.93px;
  height: 107.24px;
  padding: 13.62px;
  grid-template-areas:'profile chat-room';
  grid-template-columns: fit-content(100%) 1fr;
  column-gap: 6.81px;
`;
export const ChatProfileContainer = styled.div`
  grid-area: profile;
  width: 34.1px;
`;
export const ChatRoom = styled.div`
  display: grid;
  grid-area: chat-room;
  grid-template-areas:
          'header'
          'body'
          'accompany';
`
export const ChatHeader = styled.div`
  display: grid;
  height: fit-content(100%);
  grid-area: header;
  grid-template-areas: 'title member-count time';
  grid-template-columns: fit-content(100%) 1fr fit-content(100%);
`;
export const ChatRoomTitle = styled.div`
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
  margin-left: auto;
`;
export const ChatBody = styled.div`
  display: grid;
  grid-area: body;
  grid-template-areas: 'message alarm';
  grid-template-columns: fit-content(100%) 1fr;
`
export const ChatMessage = styled.div`
  grid-area: message;
  width: calc(100% - 42px);
  font-size: 10px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: left;
  color: #52564E;
  height: 32px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const ChatAlarm = styled.div`
  grid-area: alarm;
  margin-left: auto;
`
export const AccompanyPost = styled.div`
  display: grid;
  grid-template-areas: 'accompany-status accompany-title';
  column-gap: 8px;
  grid-template-columns: fit-content(100%) 1fr;
  margin-top: auto;
`
export const AccompanyStatus = styled.div`
  grid-area: accompany-status;
`
export const AccompanyTitle = styled.div`
  grid-area: accompany-title;
  font-size: 11px;
  font-weight: 600;
  line-height: 24px;
  text-align: left;
  vertical-align: middle;
`