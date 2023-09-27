import styled from '@emotion/styled';
import { FormTextPropsType } from 'src/shared/components/FormText/FormText.types.ts';
import colors from '../../../styles/colors';

export const FormTextContainer = styled.div<FormTextPropsType>`
  width: ${(props) => props.width};
  position: relative;
  margin-bottom: 10px;
`;
export const FormTextInput = styled.input<FormTextPropsType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.border};
  border-color: ${(props) => props.borderColor};
  font-size: ${(props) => props.fontSize}px;
  font-weight: ${(props) => props.fontWeight};
  padding: ${(props) => props.padding};
  padding-right: 32px;
  background: ${(props) => props.background};
  color: ${colors.grey300};
  border-radius: 10px;
  font-family: 'pretendard'
`;
export const FormBtn = styled.button<FormTextPropsType>`
  width: 48px;
  height: 48px;
  background: transparent url('/images/icon/icon_input_close.png') center center no-repeat !important;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
