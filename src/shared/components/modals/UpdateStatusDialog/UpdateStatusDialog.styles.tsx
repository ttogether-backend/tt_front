import { ToggleButton, ToggleButtonGroup, styled } from '@mui/material';

export const CustomToggleGroup = styled(ToggleButtonGroup)({
    display: "grid",
    gridTemplateColumns: "auto auto auto auto",
    gridGap: '20px'
});

export const CustomButton = styled(ToggleButton)({
  width: '199px',
  height: '50px',
  padding: '6px 12px',
  borderRadius: '10px  !important',
  border: '1px solid var(--grey-grey-100, #D4D5D2)  !important',
  background: 'var(--grey-grey-50, #F1F2F1)',
  color: 'var(--grey-grey-500, #73796E)',
  textAlign: 'center',
  fontFamily: 'Pretendard',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '14px' /* 77.778% */,
  letterSpacing: '0.159px',
  "&.Mui-selected, &.Mui-selected:hover": {
    background: 'var(--green-green-500, #64C243)',
    color: 'var(--bw-white, #FFF)',
  },
  '&:disabled': {
    color: 'var(--grey-grey-200, #BFC1BC)',
    border: '1px solid var(--grey-grey-50, #F1F2F1) !important',
    background: 'var(--grey-grey-50, #F1F2F1)',
  },
});