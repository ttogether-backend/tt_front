import styled from '@emotion/styled';
import colors from '../../../styles/colors';

export const StyledButton = styled.button`
  width: 74px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const MoreStyledText = styled.span`
  color: ${colors.grey500};
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

export const InquiryStyledText = styled.span`
  color: #1B1C21;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
`;
