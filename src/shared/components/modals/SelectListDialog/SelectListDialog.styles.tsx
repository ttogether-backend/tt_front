import { styled } from '@mui/material';

export const BpIcon = styled('span')({
  borderRadius: '50%',
  width: 16,
  height: 16,
  borderStyle: 'solid',
  borderWidth: '0.1rem',
  borderColor: '#B4B4B4',
});

export const BpCheckedIcon = styled(BpIcon)({
  borderColor: 'black',
  backgroundColor: 'black',
  background: 'radial-gradient(black 0%, black 40%, transparent 50%, transparent)',
});

export const Label = styled('div')({
  color: '#000',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '24px' /* 150% */,
  letterSpacing: '0.5px',
  display: 'flex',
  flexDirection: 'column',
});

export const selectListDialogStyles = {
  radioGroup: {
    gap: '20px',
  },
  radioForm: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    paddingLeft: '10px',
  },
  radio: {
    marginRight: '-15px',
  },
  textField: {
    "& fieldset": { border: 'none' },
  },
  textFieldInput: {
    width: '542px',
    height: '50px',
    flexShrink: 0,
    borderRadius: '10px',
    border: '1px solid var(--grey-grey-100, #D4D5D2)',
    background: 'var(--grey-grey-light, #F7F7F7)',
    marginTop:'20px',
    color: '#000',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '24px' /* 150% */,
    letterSpacing: '0.5px',
  }
};
