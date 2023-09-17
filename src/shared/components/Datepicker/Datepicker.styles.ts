import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';

export const StyledDatePicker = styled(DatePicker)`
  display: block;
  &.react-datepicker__month-container {
    padding: 32px;
  }
`;

export const BoxStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 24px;
  width: 100%;
  line-height: 50px;
  border-radius: 10px;
  border: 1px solid #d4d5d2;
  padding-inline: 9px;
  background: #f7f7f7;
  cursor: pointer;
`;

export const InputStyle = styled.input`
  width: 151px;
  background: #f7f7f7;
  border: none;
  outline: none;
`;
