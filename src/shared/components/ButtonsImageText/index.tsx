import React from "react";
import { ButtonProps } from "./ButtonsImageText.type";
import { LoginBtn, ImageButton } from "./ButtonsImageText.styles";

const ButtonsImageText: React.FC<ButtonProps> = ({type, styleProps, text}) => {
  if(type === "login"){
  return (
    
    <LoginBtn {...styleProps}>
      {text}
    </LoginBtn>
  );}
  else{
    return (
      <ImageButton {...styleProps}/>
    );
  };
};

export default ButtonsImageText;
