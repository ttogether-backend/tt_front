import { FC } from 'react';
import { ProfileSquarePropsType } from 'src/shared/components/ProfileSqure/ProfileSquare.types.ts';
import { ProfileImage } from '../ProfileImage/ProfileImage.tsx';
import { ProfileImageStyle } from '../ProfileImage/ProfileImage.styles.ts';
import * as Style from 'src/shared/components/ProfileSqure/ProfileSquare.styles.ts';

export const ProfileSquare: FC<ProfileSquarePropsType> = (props) => {
  if(props.src) console.log(props.src[0]);
  switch (props.profileCount) {
    case 1: {
      return <ProfileImage src={props.src ? props.src[0] : null } imageSize={'34.06'} />
    }
    case 2: {
      return (
        <Style.profileSquareContainer>
          <ProfileImageStyle css={Style.doubleProfileCss.first} src={props.src ? props.src[0] : null } imageSize={'21.28'}/>
          <ProfileImageStyle css={Style.doubleProfileCss.second} src={props.src ? props.src[1] : null } imageSize={'21.28'}/>
        </Style.profileSquareContainer>
      );
    }
    case 3: {
      return (
        <Style.profileSquareContainer>
          <ProfileImageStyle css={Style.tripleProfileCss.first} src={props.src ? props.src[0] : null } imageSize={'21.28'}/>
          <ProfileImageStyle css={Style.tripleProfileCss.second} src={props.src ? props.src[1] : null } imageSize={'21.28'}/>
          <ProfileImageStyle css={Style.tripleProfileCss.third} src={props.src ? props.src[2] : null } imageSize={'21.28'}/>
        </Style.profileSquareContainer>
      );
    }
    default: {
      return (
        <Style.profileSquareContainer>
          <ProfileImageStyle css={Style.quadrupleProfileCss.first} src={props.src ? props.src[0] : null } imageSize={'17.03'}/>
          <ProfileImageStyle css={Style.quadrupleProfileCss.second} src={props.src ? props.src[1] : null } imageSize={'17.03'}/>
          <ProfileImageStyle css={Style.quadrupleProfileCss.third} src={props.src ? props.src[2] : null } imageSize={'17.03'}/>
          <ProfileImageStyle css={Style.quadrupleProfileCss.fourth} src={props.src ? props.src[3] : null } imageSize={'17.03'}/>
        </Style.profileSquareContainer>
      );
    }
  }
  return <></>
}