import styled from '@emotion/styled';
import { CardPropsType } from './CardsSmall.types';
import colors from '../../../styles/colors';

export const CardContainer = styled.div<CardPropsType>`
  max-width: ${(props) => props.width}px;
  max-height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
  margin-left: ${(props) => props.marginLeft}px;
`;

export const Tag = styled.div<CardPropsType>`
  background: ${(props) => props.tagColor};
  width: 92px;
  height: 20px;
  display: flex;
  align-items: center;
  position: absolute;
  margin-top: 24px;
  margin-left: 24px;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  color: ${colors.white};
`;

export const Card = styled.img`
  max-width: 100%;
  height: auto;
`;

export const CardText = styled.div`
  width: 85%;
  margin: 0 auto;
  font-family: pretendard;
  color: ${colors.white};
  font-size: 24px;
  position: relative;
  margin-top: -100px;
  line-height: 32px;
  font-weight: 600;
`;
