import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const profileSquareContainer = styled.div`
  position: relative;
  width: 34.06px;
  height: 34.06px;
`

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
}

export const tripleProfileCss = {
  'first': css({
    position: 'absolute',
    margin: '0 auto',
    left: '0',
    right: '0',
    zIndex: '10'
  }),
  'second': css({
    position: 'absolute',
    right: '0',
    bottom: '0',
    zIndex: '5'
  }),
  'third': css({
    position: 'absolute',
    left: '0',
    bottom: '0'
  })
}
export const quadrupleProfileCss = {
  'first': css({
    position: 'absolute',
    left: '0',
    top: '0'
  }),
  'second': css({
    position: 'absolute',
    right: '0',
    top: '0'
  }),
  'third': css({
    position: 'absolute',
    left: '0',
    bottom: '0'
  }),
  'fourth': css({
    position: 'absolute',
    right: '0',
    bottom: '0'
  })
}