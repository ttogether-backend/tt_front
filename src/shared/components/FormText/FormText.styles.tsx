import styled from '@emotion/styled';
import { FormTextPropsType } from './FormText.types';
import colors from '../../../styles/colors';


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
  font-family: 'pretendard';
`;
