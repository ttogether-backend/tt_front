import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  padding: 12px 24px;
  margin: 0px;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const UserInfoContainer = styled.div`
  width: 700px;
  height: auto;
  display: flex;
  padding: 0px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const UserTextContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 8px;
`;

export const UserNickname = styled.div`
  width: auto;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const UserIntro = styled.div`
  width: auto;
  height: 20px;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #696e64;
`;

export const BlockCancelButtonStyle = {
  fontType: "600 14px",
  buttonWidth: "72px",
  buttonHeight: "36px",
  colorType: "deeperGrey",
  borderRadiusType: "round",
  backgroundColorType: "grey",
  borderType: "none",
  buttonTextDecorationType: "none",
  borderColorType: "none",
  buttonMargin: "0",
};