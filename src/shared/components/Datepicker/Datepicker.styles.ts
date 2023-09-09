import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';

export const StyledDatePicker = styled(DatePicker)`
  display: block;
`;
export const BoxStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 24px',
  width: '216px',
  lineHeight: '50px',
  borderRadius: '10px',
  border: '1px solid #D4D5D2',
  paddingInline: '20px',
  backgroundColor: '#F7F7F7',
};

export const InputStyle = {
  border: 'none',
  width: '151px',
  fontFamily: 'pretender',
  backgroundColor: '#F7F7F7'
};