import styled from "@emotion/styled";

export const DropdownItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: auto;
  max-width: 300px;
  height: auto;
  flex-wrap: wrap;
  padding: 0;
  gap: 12px;
`

export const DropdownItemText = styled.div<{isSelected: boolean, type: string}>`
  width: 64px;
  height: 34px;
  border-radius: 10px;
  background-color: ${({isSelected, type}) => {
    if(isSelected) {
      if(type === '여행') {
        return '#51A134';
      } else if(type === '맛집') {
        return '#D97736';
      }else if(type === '문화') {
        return '#79A3A5'
      } else {
        return '#51A134'
      }
    } else {
      return '#F1F2F1';
    }
  }};
  font-size: 18px;
  color: ${({isSelected}) => {
    if(isSelected) {
      return '#ffffff';
    } else {
      return '#979797';
    }
  }};
  font-weight: ${({isSelected}) => isSelected ? '600' : '400'};
  padding : 8px 16px;
`

