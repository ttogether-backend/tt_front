import styled from '@emotion/styled';
import { FormTextPropsType } from 'src/shared/components/FormText/FormText.types.ts';
import { FormTextBtnPropsType } from 'src/shared/components/FormTextBtn/FormTextBtn.types.ts';
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
  type: ${(props) => props.type};
  autocomplete: ${(props) => props.autoComplete};
  padding: ${(props) => props.padding};
  padding-right: 32px;
  background: ${(props) => props.background};
  color: ${colors.grey300};
  border-radius: 10px;
  font-family: 'pretendard';
`;
export const FormBtn = styled.button<FormTextPropsType>`
  display: none;
  width: 48px;
  height: 48px;
  background: transparent url('/images/icon/icon_input_close.svg') center center no-repeat !important;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export const LoadingIcon = styled.div<FormTextBtnPropsType>`
  position: absolute;
  top: 11.75px;
  right: 11.75px;
  border: 7px solid lightgray;
  border-top: 7px solid gray;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
