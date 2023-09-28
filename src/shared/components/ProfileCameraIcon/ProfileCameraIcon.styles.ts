import styled from '@emotion/styled';
import { ProfileCameraIconPropsType } from './ProfileCameraIcon.types';

// img wrap
export const ProfilePhoto = styled.div<ProfileCameraIconPropsType>`
  width: 216px;
  height: 216px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  background: url(${(props) => props.imgSrc}) center center no-repeat;
  &::after {
    content: '';
    background: #c1c1c1;
    mix-blend-mode: multiply;
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProfileCameraBtn = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  position: absolute;
  border: 4px solid #fff;
  background: #acacb3 url('/images/icon/icon_camera.svg') center center no-repeat;
  bottom: 0px;
  right: 11px;
  z-index: 3;
`;
