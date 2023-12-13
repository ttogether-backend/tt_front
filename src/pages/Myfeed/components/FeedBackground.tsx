import styled from '@emotion/styled';

interface FeedBackgroundProps {
    src?: string;
}

export const FeedBackground = styled.div<FeedBackgroundProps>`
    width: 0;
    height: 0;
    padding: 0;
    margin: 0;

  &:before {
    z-index: -1;
    position: absolute;
    top: 76px;
    left: 0;
    width: 100%;
    height: 400px;

    content: '';
    background-repeat: no-repeat;
    background-position-x: center;
    background-position-y: center;
    background-size: cover;
    background-image: url('${(props) => props?.src}');
  }
`;
