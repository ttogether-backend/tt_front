import { CSSProperties } from 'react';

export interface IconProps {
  style?: CSSProperties;
}

export const LeftChevronIcon = ({ ...args }: IconProps) => {
  return (
    <svg
      width="8"
      height="12"
      viewBox="0 0 8 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...args}
    >
      <path d="M7 1L2 6L7 11" stroke="#BFC1BC" stroke-width="2" stroke-linecap="round" />
    </svg>
  );
};
