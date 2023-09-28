import styled from '@emotion/styled';

export const Checkbox = styled.input`
  display: none;
`;

export const CustomCheckbox = styled.label<{ isChecked: boolean }>`
  ${({ isChecked }) => `
    background: ${isChecked ? '#8a9684' : 'none'};
  `}

  display: inline-block;
  width: 18px;
  height: 18px;
  margin-right: 8px;
  border-radius: 100%;
  border: 2px solid #d4d5d2;
  outline: none;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;
