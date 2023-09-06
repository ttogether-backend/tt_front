import React from "react";
import { StyledButton, StyledIcon } from "./ButtonsIcon.style";
import { ButtonProps } from "./ButtonsIcon.types";


const ButtonsIcon: React.FC<ButtonProps> = ({ icon, styleType }) => {
  return (
    <StyledButton {...styleType}>
      <StyledIcon className="icon"  {...styleType}>
        <use xlinkHref={`iconSprite.svg#${icon}`}/>
      </StyledIcon>
    </StyledButton>
  );
};

export default ButtonsIcon;