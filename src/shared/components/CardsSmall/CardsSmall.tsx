import React from 'react';
import * as Style from './CardsSmall.styles';
import { CardPropsType } from './CardsSmall.types';

export const CardsSmall: React.FC<CardPropsType> = (
  props: React.PropsWithChildren<CardPropsType>
) => {
  return (
    <Style.CardContainer
      width={props.width}
      height={props.height}
      borderRadius={props.borderRadius}
      marginLeft={props.marginLeft}
    >
      <Style.Tag tagColor={props.tagColor}>{props.tag}</Style.Tag>
      <Style.Card src={props.ImgSrc} />
      <Style.CardText>{props.children}</Style.CardText>
    </Style.CardContainer>
  );
};

CardsSmall.defaultProps = {
  width: 335,
  height: 362,
  borderRadius: 10,
  tagColor: '#000',
  marginLeft: 23,
};
