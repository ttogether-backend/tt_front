import React from 'react';
import { ProfileHorizontalPropsType } from './ProfileHorizontal.type.ts';
import { ProfileImage } from '../ProfileImage/ProfileImage.tsx';
import { ProfileImageStyle } from '../ProfileImage/ProfileImage.styles.ts';
import * as Style from './ProfileHorizontal.style.tsx';

const ProfileHorizontal: React.FC<ProfileHorizontalPropsType> = (props) => {
  if(props.src) console.log(props.src[0]);
  switch (props.profileCount) {
    case 1: {
      return <ProfileImage src={props.src ? props.src[0] : null } imageSize={'27'} />
    }
    case 2: {
      return (
        <Style.ProfileContainer profileCount={2}>
          <ProfileImageStyle css={Style.doubleProfileCss.first} src={props.src ? props.src[0] : null } imageSize={'27'}/>
          <ProfileImageStyle css={Style.doubleProfileCss.second} src={props.src ? props.src[1] : null } imageSize={'27'}/>
        </Style.ProfileContainer>
      );
    }
    case 3: {
      return (
        <Style.ProfileContainer profileCount={3}>
          <ProfileImageStyle css={Style.tripleProfileCss.first} src={props.src ? props.src[0] : null } imageSize={'27'}/>
          <ProfileImageStyle css={Style.tripleProfileCss.second} src={props.src ? props.src[1] : null } imageSize={'27'}/>
          <ProfileImageStyle css={Style.tripleProfileCss.third} src={props.src ? props.src[2] : null } imageSize={'27'}/>
        </Style.ProfileContainer>
      );
    }
  }
  return <></>
}

export default ProfileHorizontal;