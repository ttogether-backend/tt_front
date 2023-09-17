import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const profileSquareContainer = styled.div`
  width: 34.06px;
  height: 34.06px;
`

export const doubleProfileCss = {
  'first': css({
    left: '0',
    top: '0'
  }),
  'second': css({
    right: '0',
    bottom: '0'
  })
}