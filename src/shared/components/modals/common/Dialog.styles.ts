const dialogButtonDefaultStyle: any = {
  //font - styleName: TT Font/label/large;
  fontFamily: 'Pretendard',
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '20px',
  letterSpacing: '0em',
  textAlign: 'left',
  //layout
  width: '81px',
  height: '44px',
  borderRadius: '10px',
  gap: '10px',
};

export const dialogStyles: any = {
  layout: {
    width: '600px',
    maxWidth: '700px',
    borderRadius: '20px',
    background: '#FFF',
    boxShadow: 'none',
  },
  layoutSmall: {
    width: '480px',
    maxWidth: '700px',
    borderRadius: '20px',
    background: '#FFF',
    boxShadow: 'none',
  },
  layoutBig: {
    width: '700px',
    maxWidth: '700px',
    borderRadius: '20px',
    background: '#FFF',
    boxShadow: 'none',
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: 'var(--m-3-sys-light-on-surface, #1D1B20)',
    fontFamily: 'Pretendard',
    fontSize: '24px',
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: '48px' /* 133.333% */,
    paddingBottom: '5px',
  },
  subTitle: {
    color: 'var(--bw-black, #000)',
    fontFamily: 'Pretendard',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: '150%',
  },
  closeIconButton: {
    color: 'black',
  },
  messageContainer: {
    padding: 0,
  },
  message: {
    color: 'var(--grey-grey-800, #3F433D)',
    fontFamily: 'Pretendard',
    fontSize: '14px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '20px' /* 142.857% */,
    letterSpacing: '0.25px',
  },
  buttonContainer: {
    margin: '10px',
  },
  button: {
    black: {
      ...dialogButtonDefaultStyle,
      background: 'black',
      color: 'white',
    },
    white: {
      ...dialogButtonDefaultStyle,
      background: 'white',
      color: 'black',
      border: '1px solid rgba(0, 0, 0, 1)',
    },
    red: {
      ...dialogButtonDefaultStyle,
      background: '#BA1A1A',
      color: 'white',
    },
    green: {},
    gray: {
      ...dialogButtonDefaultStyle,
      background: 'rgba(0, 0, 0, 1)',
      color: 'white',
    },
  },
};
