import React from 'react';
import * as Style from './FormText.styles';
import { FormTextPropsType } from './FormText.types';
import colors from '../../../styles/colors';

export const FormText: React.FC<FormTextPropsType> = (
  props: React.PropsWithChildren<FormTextPropsType>
) => {
  return (
    <Style.FormTextInput
      {...props}
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      fontWeight={props.fontWeight}
      background={props.background}
      padding={props.padding}
      border={props.border}
      borderColor={props.borderColor}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onchange}
    />
  );
    

};

const defaultProps = {
  width: '100%',
  height: 'auto',
  fontSize: 16,
  fontWeight: 300,
  background: '#fff',
  padding: '16px',
  border: '1px solid',
  borderColor: `${colors.grey200}`,
  placeholder: "",
};
FormText.defaultProps = defaultProps;