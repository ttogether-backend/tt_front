import { ProfileImagePropsType } from './ProfileImage.types.ts';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const profileImageSizeCss = {
  '17.03': css({
    width: '17.03px',
    height: '17.03px'
  }),
  '21.28': css({
    width: '21.28px',
    height: '21.28px'
  }),
  '24': css({
    width: '24px',
    height: '24px'
  }),
  '27': css({
    width: '27px',
    height: '27px'
  }),
  '32': css({
    width: '32px',
    height: '32px'
  }),
  '34.06': css({
    width: '34.06px',
    height: '34.06px'
  }),
  '36': css({
    width: '36px',
    height: '36px'
  }),
  '40': css({
    width: '40px',
    height: '40px'
  }),
  '46': css({
    width: '46px',
    height: '46px'
  }),
  '64': css({
    width: '64px',
    height: '64px'
  }),
  '160': css({
    width: '160px',
    height: '160px'
  })
}
export const ProfileImageStyle = styled.div<ProfileImagePropsType>`
  border-radius: 50%;
  background-size: cover;
  ${(props) => props.css}
  ${(props) => profileImageSizeCss[props.imageSize]};
  background-image: ${(props) => `url(${props.src})`};
`