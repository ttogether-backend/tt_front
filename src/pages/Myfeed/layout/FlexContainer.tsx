import styled from '@emotion/styled';

interface FlexContainerProps {
  direction?: string;
  width?: string;
  height?: string;
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
  border?: boolean;
}

export const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  ${(props) => `flex-direction: ${props.direction};`}
  ${(props) => `width: ${props.width};`}
  ${(props) => `height: ${props.height};`}
  ${(props) => `gap: ${props.gap}px;`}
  ${(props) => `justify-content: ${props.justifyContent};`}
  ${(props) => `align-items: ${props.alignItems};`}

  border-radius: 10px;
  ${(props) => (props.border ? `border: 1px solid #ebebeb;` : ``)}
`;
