import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const ProfileContainer = styled.div<{profileCount: number}>`
  position: relative;
  width : ${({ profileCount }) => {
    switch (profileCount) {
      case 1:
        return "27px";
      case 2:
        return "44px";
      case 3:
        return "61px";
      default:
        return "61px";
    }
  }};
  height: 27px;
`;

export const doubleProfileCss = {
  'first': css({
    left: '0',
    top: '0',
    position: 'absolute',
    zIndex: '10'
  }),
  'second': css({
    position: 'absolute',
    right: '0',
    bottom: '0'
  })
};

export const tripleProfileCss = {
  'first': css({
    left: '0',
    top: '0',
    position: 'absolute',
    zIndex: '10'
  }),
  'second': css({
    position: 'absolute',
    left: '17px',
    bottom: '0',
    zIndex: '5'
  }),
  'third': css({
    position: 'absolute',
    left: '34px',
    top: '0'
  })
};