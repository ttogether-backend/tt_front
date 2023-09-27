import React from "react";
import { BackImageProps } from "./MyfeedBackImage.type";
// import { ChangeImageButtonStyle, Container } from "./MyfeedBackImage.style";
import styled from "@emotion/styled";
import ButtonsText from "src/shared/components/ButtonsText";

const Container = styled.img`
  width: 100%;
  height: 400px;
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
`;

const MyfeedBackImage:React.FC<BackImageProps> = ({alt, src}) => {
  return (
    <Container src={src} alt={alt}/>
  );
};

export default MyfeedBackImage;