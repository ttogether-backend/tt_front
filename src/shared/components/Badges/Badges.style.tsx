import styled from '@emotion/styled';
import colors from '../../../styles/colors';
import { StyleType} from './Badges.types';

const getTextWidth = (text: string, font: string): number => {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('Canvas context is not available.');
  }
  context.font = font;
  const metrics = context.measureText(text);
  return metrics.width;
};


export const TypeBadge = styled.div<StyleType>`
  width : 57px;
  height : 36px;
  display : flex;
  justify-content : center;
  align-items : center;
  white-space: nowrap;
  color : white;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  border : none;
  background-color : ${({ subType }) => {
    switch (subType) {
      case "restaurant":
        return "#D97736";
      case "trad":
        return "#79A3A5";
      case "trip":
        return "#5BB13D";
      default:
        return "#D97736";
    }}};
`;

export const StatusBadge = styled.div<StyleType>`
  height : 36px;
  border : none;
  justify-content : center;
  align-items : center;
  white-space: nowrap;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  color : ${({ subType }) => {
    switch (subType) {
      case "open":
        return "#376B25";
      case "close":
        return "#ffffff";
      default:
        return "#376B25";
    }}
  };
  background-color : ${({ subType }) => {
    switch (subType) {
      case "open":
        return "#F0F9EC";
      case "close":
        return "#3F433D";
      default:
        return "#EAF7E6";
    }}
  };
  width: ${({ text }) => `${getTextWidth(text, "14px Pretendard")+32}px`};
`;

export const PlaceBadge = styled.div<StyleType>`
  background-color : black;
  border : none;
  border-radius : 10px;
  color : white;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  padding: 12px 16px;
  height : 44px;
  display : flex;
  justify-content : center;
  align-items : center;
  white-space: nowrap;
  width: ${({ text }) => `${getTextWidth(text, "14px Pretendard")+32}px`};
`;

export const ThemaBadge = styled.div<StyleType>`
  background-color : white;
  border : none;
  border-radius : 10px;
  color : #495056;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  padding: 8px 12px;
  height : 36px;
  display : flex;
  justify-content : center;
  align-items : center;
  white-space: nowrap;
  width: ${({ text }) => `${getTextWidth(text, "14px Pretendard")+24}px`};
`;

export const ChatStateBadge = styled.div<StyleType>`
  width : 55px;
  height : 24px;
  color : white;
  border : none;
  border-radius : 5px;
  font-size: 11px;
  font-style: normal;
  font-weight: 700;
  display : flex;
  justify-content : center;
  align-items : center;
  white-space: nowrap;
  background-color : ${({ subType }) => {
    switch (subType) {
      case "fix":
        return "#5BB13D";
      case "inquiry":
        return "#C56C31";
      case "end":
        return "#8F948B";
      default:
        return "#C56C31";
    }}};
`;

export const ChatCountBadge = styled.div<StyleType>`
  height: 16px;
  border-radius: 10px;
  border: none;
  background-color: #BA1A1A;
  color: white;
  color: #FFF;
  font-family: Pretendard;
  font-size: 9px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 6px;
  white-space: nowrap;
  width: ${({ text }) => `${getTextWidth(text, "9px Pretendard")+12}px`};
`;

export const AcomCountBadge = styled.div<StyleType>`
  padding: 8px 12px;
  border-radius : 10px;
  background-color : #478A30;
  border : none;
  color : white;
  height : 36px;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  width: ${({ text }) => `${getTextWidth(text, "14px Pretendard")+24}px`};
`;