import React from 'react';
import * as Style from './FormTextBtn.styles';
import { FormTextBtnPropsType } from './FormTextBtn.types';
import colors from '../../../styles/colors';

export const FormTextBtn: React.FC<FormTextBtnPropsType> = (
  props: React.PropsWithChildren<FormTextBtnPropsType>
) => {
  return (
    <Style.FormTextContainer
      {...props}
        width={props.width}
    >
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
      <Style.FormBtn
        {...props}
        onClick={props.onclick}
      />
      {
        props.useLoading && props.isLoading ?
          <Style.LoadingIcon
            isLoading={props.isLoading}
          />
          : 
          null
      }
    </Style.FormTextContainer>
  );
    

};


FormTextBtn.defaultProps = {
  width: '100%',
  height: 'auto',
  fontSize: 16,
  fontWeight: 300,
  background: '#fafafa',
  padding: '16px',
  border: '1px solid',
  borderColor: `${colors.grey200}`,
  placeholder: '',
};