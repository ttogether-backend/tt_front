import styled from '@emotion/styled';

const getTextWidth = (text: string, font: string): number => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('Canvas context is not available.');
  }
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};


export const Container = styled.div`
  width: 1408px;
  height: 273px;
  display: flex;
  padding: 24px;
  justify-content: space-between;
  align-items: flex-start;
  border : 1px solid #E1E1E1;
`;

export const ProfileContainer = styled.div`
  width: 724px;
  height: 100%;
  display: flex;
  padding: 0px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const IntroContainer = styled.div`
  width: 524px;
  height: 188px;
  display: flex;
  flex-direction: column;
  padding: 0px;
  align-items: flex-start;
  justify-content: flex-start;
`

export const NicknameContainer = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  padding: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 12px;
`

export const Nickname = styled.div<{nickName: string}>`
  width: ${({ nickName }) => `${getTextWidth(nickName, "40px Pretendard")}px`};
  height: 100%;
  font-size: 28px;
  font-weight: 700;
  margin-right: 12px;
  line-height: 36px;
`

export const UserIcon = styled.img`
  width : 36px;
  height : 36px;
`
export const Intro = styled.div`
  width: 100%;
  height : 100%;
  max-height : 60px;
  margin: 12px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`

export const ButtonContainer = styled.div`
  width: 300px;
  height: 44px;
  display: flex;
  padding: 0px;
  justify-content: flex-end;
`
export const FollowContainer = styled.div`
  width : 100%;
  height : 20px;
  display : flex;
  padding : 0px;
  justify-content : flex-start;
`
export const CountText = styled.div<{follower : string}>`
  width : ${({ follower }) => `${getTextWidth(follower, "14px Pretendard")}px`};
  height : 100%;
  font-size : 14px;
  font-weight : 700;
  margin-right : 8px;
`

export const FollowText = styled.div`
  width: 37px;
  height: 100%;
  font-size: 14px;
  font-weight: 400;
  margin-right: 16px;
  :hover {
    cursor : pointer;
    font-style: underline;
  }
` 

export const FollowerContainer = styled.div`
  width: 100%;
  height: 27px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
`

export const FollowerListText = styled.div`
  width: 100%;
  height: 16px;
  font-size: 14px;
  font-weight: 400;
  margin-right: 16px;
  color: #696E64;
`

export const chatButtonStyle = {
  fontType: "600 14px",
  buttonWidth: "108px",
  buttonHeight: "44px",
  colorType: "deepGrey",
  borderRadiusType: "little",
  backgroundColorType: "white",
  borderType: "border",
  buttonTextDecorationType: "none",
  borderColorType: "grey",
};

export const isChatButtonStyle = {
  fontType: "600 14px",
  buttonWidth: "96px",
  buttonHeight: "44px",
  colorType: "deepGrey",
  borderRadiusType: "little",
  backgroundColorType: "lightGrey",
  borderType: "none",
  buttonTextDecorationType: "none",
  borderColorType: "none",
};

export const followButtonStyle = {
  fontType: "600 14px",
  buttonWidth: "93px",
  buttonHeight: "44px",
  colorType: "white",
  borderRadiusType: "little",
  backgroundColorType: "mainGreen",
  borderType: "none",
  buttonTextDecorationType: "none",
  borderColorType: "none",
};

export const isFollowButtonStyle = {
  fontType: "600 14px",
  buttonWidth: "84px",
  buttonHeight: "44px",
  colorType: "white",
  borderRadiusType: "little",
  backgroundColorType: "deepGreen",
  borderType: "none",
  buttonTextDecorationType: "none",
  borderColorType: "none",
};

export const moreIconButtonStyle = {
  buttonWidth: "24px",
  buttonHeight: "24px",
  buttonBackgroundColor: "trans"
};

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