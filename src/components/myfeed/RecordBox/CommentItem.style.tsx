import styled from "@emotion/styled";

export const ItemContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 76px;
  display: flex;
  justify-content: space-between;
  padding: 12px 24px;
  margin: 0px;
  align-items: flex-start;
  position: relative;
`

export const CommentContainer = styled.div`
  width: 700px;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
`

export const Comment = styled.div`
  width: 100%;
  height: auto;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`
export const OtherText = styled.div`
  width: 100%;
  height: auto;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #696E64;
`

export const moreIconButtonStyle = {
  buttonWidth: "24px",
  buttonHeight: "24px",
  buttonBackgroundColor: "trans"
};



export const DeleteButton = styled.button`
  width:60px;
  height: 32px;
  background-color: white;
  border : 1px solid #F1F2F1;
  border-radius: 4px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.10);
  color: #BA1A1A;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  top: 38px;
  right: 40px;
  :hover {
    background-color: #F1F2F1;
  }
`;
