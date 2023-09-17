import { FC } from 'react';
import { ProfileImagePropsType } from 'src/shared/components/ProfileImage/ProfileImage.types.ts';
import { ProfileImageStyle } from './ProfileImage.styles.ts';

export const ProfileImage:FC<ProfileImagePropsType> = (props: ProfileImagePropsType) => {
  return (
    <ProfileImageStyle {...props}/>
  );
}