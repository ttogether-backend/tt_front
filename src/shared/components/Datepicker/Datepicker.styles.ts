import styled from '@emotion/styled';
import ReactDatePicker, { CalendarContainer } from 'react-datepicker';

export const CustomDatePicker = styled(ReactDatePicker)`
  display: block;

  .react-datepicker-wrapper {
    width: 50%;
  }
`;

export const CustomCalendarContainer = styled(CalendarContainer)`
  border: none;

  .sunday {
    color: #ed6666 !important;
  }

  .react-datepicker__header {
    background: none;
    border: none;
  }

  .react-datepicker__navigation--previous {
    right: 24px;
    left: auto;
  }
`;

export const Box = styled.div`
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

export const Input = styled.input`
  width: 151px;
  background: #f7f7f7;
  border: none;
  outline: none;
`;
