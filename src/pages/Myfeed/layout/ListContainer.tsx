import styled from '@emotion/styled';

export const ListContainer = styled.div`
  border-radius: 10px;
  border: 1px solid #ebebeb;
  background: #fff;
  padding: 32px;
  width: 808px;
`;

export const ListContainerItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 24px;
  width: 100%;

  &:not(:last-child) {
    border-bottom: 1px solid #ebebeb;
    padding-bottom: 12px;
  }

  &:not(:first-child) {
    padding-top: 12px;
  }
`;