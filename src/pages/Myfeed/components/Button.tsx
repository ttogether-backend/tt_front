import styled from '@emotion/styled';

export const Button = styled.button`
  display: flex;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: #f1f2f1;

  /* TT Font/title/small */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */

  &.green {
    color: #C56C31
  }

  &.red {
    color: #478A30
  }

  &.background-black {
    background: black;
    color: white;
  }

  &:disabled {
    color: #8F948B
  }
`;
