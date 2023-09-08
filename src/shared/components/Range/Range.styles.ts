import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const RangeBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Step = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: #d9d9d9;
  cursor: pointer;
`;

export const SelectedStep = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  background: #000;
  position: relative;
  cursor: pointer;

  &:after {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    position: absolute;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const StepValue = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-family: Pretendard;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: #8f948b;
  position: absolute;
  top: 24px;
  width: max-content;
`;

interface LinePropsType {
  isSelected: boolean;
  length: number;
}

export const Line = styled.div<LinePropsType>`
  ${({ isSelected, length }) => `
  background: ${isSelected ? '#000' : '#d9d9d9'};
  width: calc(100% / ${length});
`};
  height: 6px;
  border-radius: 3px;
  margin: 0 -2px;
  transform: translate(0px, 10px);
  z-index: -1;
`;
