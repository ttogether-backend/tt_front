import React from 'react';

import {
    ProfilePhotoBox as StyledProfilePhotoBox,
    ProfileBox
  } from './UserPersonal.styles';
import ProfileCameraIcon from '../../../shared/components/ProfileCameraIcon/ProfileCameraIcon';

const ProfilePhotoBox = () => {
    return (
        <StyledProfilePhotoBox>
            <ProfileCameraIcon 
            imgSrc="/images/common/img_user_profile_tmp.png" 
            state="modify" 
            />
        </StyledProfilePhotoBox>
    );
};

export default ProfilePhotoBox;