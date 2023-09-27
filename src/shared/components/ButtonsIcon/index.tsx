import React from "react";
import { StyledButton, StyledIcon } from "./ButtonsIcon.style";
import { ButtonProps } from "./ButtonsIcon.types";


const ButtonsIcon: React.FC<ButtonProps> = ({ icon, styleType, onClick }) => {
  const publicUrl = import.meta.env.VITE_PUBLIC;
  return (
    <StyledButton {...styleType} onClick={onClick}>
      <StyledIcon className="icon"  {...styleType}>
        <use xlinkHref={`${publicUrl}/iconSprite.svg#${icon}`}/>
      </StyledIcon>
    </StyledButton>
  );
};

export default ButtonsIcon;