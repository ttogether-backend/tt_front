import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const MyfeedContainer = styled.div`
  width: 1408px;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`

export const ChangeImageButtonStyle = {
  fontType: "600 14px",
  buttonWidth: "84px",
  buttonHeight: "44px",
  colorType: "black",
  borderRadiusType: "little",
  backgroundColorType: "lightGrey",
  borderType: "none",
  buttonTextDecorationType: "none",
  borderColorType: "none",
  buttonMargin: "71px 24px 21px auto",
};

export const AccomRecordTitle = styled.div`
  width: 100%;
  height: auto;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
  margin-top: 50px;
  margin-bottom: 24px;
`;

export const AcoomRecordCardContainer = styled.div`
  width: 100%;
  height: 413px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
  margin-bottom: 90px;
  gap: 32px;
  row-gap: 40px;
`;

export const BackImageChangeDiv = styled.div`
  width: 250px;
  height: auto;
  position: absolute;
  top: 75px;
  right: 120px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #E0E0E0;
  background-color: white;
`;
