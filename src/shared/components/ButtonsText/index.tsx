import React from "react";
import { StyledButton } from "./ButtonsText.styles";
import { ButtonProps } from "./ButtonsText.types";


const ButtonsText: React.FC<ButtonProps> = ({ label, styleType }) => {
  return <StyledButton {...styleType}>{label}</StyledButton>;
};

export default ButtonsText;

//사용예시
// const userStyle1: ButtonStyleType = {
//   fontType: '700 18px',
//   borderRadiusType: 'type 2',
//   backgroundColorType: 'type 2',
//   borderType: 'type 2',
//    ...
// };
// ...
// <Button label="Styled Button 1" styleType={userStyle1} />
