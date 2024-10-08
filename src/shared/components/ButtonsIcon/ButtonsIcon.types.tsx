import { SerializedStyles } from '@emotion/react';

export type ButtonStyleType = {
  buttonWidth: string;
  buttonHeight: string;
  buttonBackgroundColor: string;
};

export type ButtonProps = {
  icon: string;
  styleType: ButtonStyleType;
  onClick?: () => void;
  css?: SerializedStyles;
  ref?: any;
};