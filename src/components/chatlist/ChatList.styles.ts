import styled from '@emotion/styled';

export const ChatListContainer = styled.div`
  padding: 16px 4.53px;
  height: 752px;
  overflow: scroll;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  width: 336px;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  //TODO: 가장 마지막 룸은 margin-bottom 0로 변경
`