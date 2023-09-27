import { SerializedStyles, css } from '@emotion/react';


export type ButtonStyleType = {
  fontType: string; 
  colorType: string; 
  borderRadiusType: string; 
  backgroundColorType: string; 
  borderColorType: string; 
  borderType: string; 
  buttonWidth : string; 
  buttonHeight : string; 
  buttonTextDecorationType : string;
  buttonMargin? : string | ButtonProps['margin'];
};

export type ButtonProps = {
  label: string; //버튼 안에 들어갈 텍스트
  styleType: ButtonStyleType; //버튼 스타일
  onClick?: () => void; //버튼 클릭시 실행할 함수
  margin?: string | "0px"; //버튼 margin
};

