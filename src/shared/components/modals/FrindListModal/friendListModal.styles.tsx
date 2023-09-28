import { Tab, Tabs, styled } from '@mui/material';

const buttonStyle = {
  display: 'flex',
  padding: '8px 16px',
  justifyContent: 'center',
  alignItems: 'center',
  flex: '1 0 0',
  borderRadius: '20px',
  textAlign: 'right',
  width: '100px',
  height: '36px',

  /* materia-theme/label/large */
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '20px' /* 142.857% */,
};

export const CustomTabs = styled(Tabs)({
  borderBottom: '1px solid white',
  '& .MuiTabs-indicator': {
    backgroundColor: 'white',
  },
});

export const CustomTab = styled((props: any) => <Tab {...props} />)(({ theme }) => ({
  color: 'var(--grey-grey-400, #8F948B)',
  fontFamily: 'Pretendard',
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '24px',
  marginRight: theme.spacing(1),
  '&:hover': {
    color: 'black',
    opacity: 1,
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px',
  },
  '&.Mui-selected': {
    color: 'black',
    fontFamily: 'Pretendard',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px',
  },
}));

export const friendListModalStyles = {
  tab: {
    color: 'var(--grey-grey-400, #8F948B)',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px' /* 150% */,
  },
  selectTab: {
    color: 'black',
    fontFamily: 'Roboto',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '24px' /* 150% */,
  },
  followButton: {
    ...buttonStyle,
    background: 'black',
    color: 'white',
    '&:hover': {
      background: 'black',
      color: 'white',
    },
  },
  unFollowButton: {
    ...buttonStyle,
    background: 'var(--grey-grey-100, #D4D5D2)',
    color: 'var(--grey-grey-900, #30332E)',
    '&:hover': {
      background: 'var(--grey-grey-100, #D4D5D2)',
      color: 'var(--grey-grey-900, #30332E)',
    },
  },
};
