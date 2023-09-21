import React from "react";
import { StyledButton, StyledIcon } from "./ButtonsIcon.style";
import { ButtonProps } from "./ButtonsIcon.types";

const PUBLIC_URL = import.meta.env.VITE_PUBLIC_URL;

const ButtonsIcon: React.FC<ButtonProps> = ({ icon, styleType, onClick }) => {

  return (
    <StyledButton {...styleType} onClick={onClick}>
      <StyledIcon className="icon"  {...styleType}>
        <use xlinkHref={`http://localhost:5173/iconSprite.svg#${icon}`}/>
      </StyledIcon>
    </StyledButton>
  );
};

export default ButtonsIcon;