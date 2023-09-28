import React from 'react'
import * as Style from './ProfileCameraIcon.styles';
import { ProfileCameraIconPropsType } from './ProfileCameraIcon.types';

const ProfileCameraIcon: React.FC<ProfileCameraIconPropsType> = (
  props: React.PropsWithChildren<ProfileCameraIconPropsType>
) => {
  return (
    <>
      <Style.ProfilePhoto 
        imgSrc={props.imgSrc}
      />
      {props.state === 'modify' && <Style.ProfileCameraBtn />}
    </>
  );
};

export default ProfileCameraIcon