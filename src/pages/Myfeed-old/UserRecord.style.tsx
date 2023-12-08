import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1166px;
  height: auto;
  display: flex;
  margin : 102px auto 200px auto;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const RecordContainer = styled.div`
  width: 866px;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-left: 83px;
  justify-content: flex-start;
  align-items: flex-start; 
`

export const Title = styled.div`
  width: 100%;
  height: auto;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  margin-bottom: 10px;
`;

export const Explan = styled.div`
  width: 100%;
  height: auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin-bottom: 21px;
  color: #30332E;
`;

export const RecordListContainer = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
  border : 1px solid #D4D5D2;
  border-radius : 10px;
`;

export const TabContainer = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
`;

export const NonSelectTab = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-bottom : 2px solid #BFC1BC;
  color: #BFC1BC;
  font-size: 16px;
  font-weight: 400;
  :hover {
    cursor: pointer;
    background-color: #F1F2F1;
  }
`;

export const SelectTab = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 24px;
  border-bottom : 2px solid #2A511C;
  color: #2A511C;
  font-size: 16px;
  font-weight: 700;
`;