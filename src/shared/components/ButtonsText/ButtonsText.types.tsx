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
};

export type ButtonProps = {
  label: string; //버튼 안에 들어갈 텍스트
  styleType: ButtonStyleType; //버튼 스타일
};

