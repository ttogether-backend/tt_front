import styled from "@emotion/styled";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const DropdownButton = styled.div<{isOpen: boolean, choicedItem: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  max-width: 300px;
  height: auto;
  white-space: nowrap;
  overflow: hidden;   
  text-overflow: ellipsis; 
  border-radius: 10px;
  padding: 8px 24px;
  border: ${({isOpen}) => isOpen ? '1px solid #51A134' : 'none'};
  background-color: ${({isOpen, choicedItem}) => {
    if(!isOpen && choicedItem) {
      return '#51A134';
    } else {
      return '#ffffff';
    }}
  };
  font-size: 18px;
  color: ${({isOpen, choicedItem}) => {
    if(isOpen) {
      return '#51A134';
    } else if(choicedItem) {
      return '#ffffff';
    } else {
      return '#000000';
    }
  }};
  font-weight: ${({isOpen}) => isOpen ? '600' : '500'};
  cursor: pointer;
`;

export const DropdownContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  /* min-width: 400px; */
  z-index: 100;
  height: auto;
  border-radius: 10px;
  border: 1px solid #51A134;
  background-color: #ffffff;
  padding: 32px 24px;
  position: absolute;
  left: 0;
  top: 66px;
`
export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 20px;
`;
