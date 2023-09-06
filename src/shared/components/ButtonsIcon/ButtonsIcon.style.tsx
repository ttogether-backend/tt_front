import { ButtonStyleType } from "./ButtonsIcon.types";
import styled from '@emotion/styled';

export const StyledButton = styled.button<ButtonStyleType>`
  width: ${({ buttonWidth }) => buttonWidth};
  height: ${({ buttonHeight }) => buttonHeight};
  border: none;
  border-radius: 50%;
  display: "flex"; // flex 컨테이너로 설정
  justify-content: "center"; // 가로 정렬 중앙
  align-items: "center"; // 세로 정렬 중앙
  background-color: ${({ buttonBackgroundColor }) => {
    switch (buttonBackgroundColor) {
      case "trans":
        return "transparent";
      case "black":
        return "#000000";
      case "white":
        return "#ffffff";
      case "mainGreen":
        return "#64C243";
      // ... Add more cases for other types
      default:
        return "transparent";
    }
  }};
  cursor: pointer;
  `;

  export const StyledIcon = styled.svg<ButtonStyleType>`
    width: ${({ buttonWidth }) => buttonWidth};
    height: ${({ buttonHeight }) => buttonHeight};
    width: ${({ buttonWidth }) => buttonWidth};
    height: ${({ buttonHeight }) => buttonHeight};
  `