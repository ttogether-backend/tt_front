import React from "react";
import { StyledButton, MoreStyledText, InquiryStyledText } from "./ButtonsIconText.style";
import { ButtonProps } from "./ButtonsIconText.types";

const ButtonsIconText: React.FC<ButtonProps> = ({label, icon, styleType }) => {
  return (
    <StyledButton>
      {styleType === "more" && <MoreStyledText>{label}</MoreStyledText> }
      {styleType === "inquiry" && <InquiryStyledText>{label}</InquiryStyledText>}
      <svg className="icon">
        <use xlinkHref={`iconSprite.svg#${icon}`} />
      </svg>
    </StyledButton>
  );
}

export default ButtonsIconText;