import colors from '../../../styles/colors';
import styled from '@emotion/styled';
import { ButtonStyleType} from './ButtonsText.types';

export const StyledButton = styled.button<ButtonStyleType>`
  width: ${({ buttonWidth }) => buttonWidth};
  height: ${({ buttonHeight }) => buttonHeight};
  font-weight: ${({ fontType }) => fontType.split(' ')[0]};
  font-size: ${({ fontType }) => fontType.split(' ')[1]};
  color: ${({ colorType }) => {
    switch (colorType) {
      case 'white':
        return colors.white;
      case 'black':
        return colors.black;
      case 'mainGreen':
        return colors.green500;
      case 'grey':
        return colors.grey700;
      // ... Add more cases for other types
      default:
        return colors.white;
    }
  }};
  border-radius: ${({ borderRadiusType }) => {
    switch (borderRadiusType) {
      case 'little':
        return '3px';
      case 'normal':
        return '10px';
      case 'round':
        return '20px';
      // ... Add more cases for other types
      default:
        return '10px';
    }
  }};
  background-color: ${({ backgroundColorType }) => {
    switch (backgroundColorType) {
      case 'mainGreen':
        return colors.green500;
      case 'black':
        return colors.black;
      case 'white':
        return colors.white;
      case 'error':
        return colors.error;
      case 'deepGreen':
        return colors.green700;
      case 'lightGrey':
        return colors.grey50;
      case 'grey':
        return colors.grey100;
      case 'trans':
        return 'transparent';
      // ... Add more cases for other types
      default:
        return colors.green500;
    }
  }};
  border: ${({ borderType }) => {
    switch (borderType) {
      case 'none':
        return 'none';
      case 'border':
        return '2px solid';
      case 'normal':
        return '1px solid';
      // ... Add more cases for other types
      default:
        return 'none';
    }
  }};
  border-color: ${({ borderColorType }) => {
    switch (borderColorType) {
      case 'black':
        return '#000000';
      case 'grey':
        return '#52564E';
      case 'mainGreen':
        return '#64C243';
      case 'white':
        return '#ffffff';
      // ... Add more cases for other types
      default:
        return '#ffffff';
    }
  }};
  text-decoration: ${({ buttonTextDecorationType }) => {
    switch (buttonTextDecorationType) {
      case 'underline':
        return 'underline';
      case 'none':
        return 'none';
      // ... Add more cases for other types
      default:
        return 'none';
    }
  }};
  cursor: pointer;
`;