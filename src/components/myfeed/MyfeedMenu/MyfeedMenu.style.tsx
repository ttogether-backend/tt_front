import styled from '@emotion/styled';

export const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  width: 68px;
  padding: 8px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid var(--grey-grey-50, #F1F2F1);
  background: var(--bw-white, #FFF);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
`

export const MenuItem = styled.li`
  width: 100%;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  color: #52564E;
  height: 16px;
  :hover {
    cursor : pointer;
    font-style: underline;
    background-color: #F1F2F1;
  }
`