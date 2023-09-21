import { IconProps } from './types/Icon.types';

export const MoreIcon = ({ size, ...args }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || '56'}
      height={size || '56'}
      viewBox="0 0 56 56"
      fill="none"
      {...args}
    >
      <circle cx="42" cy="28" r="3" transform="rotate(-180 42 28)" fill="#A1A59E" />
      <circle cx="28" cy="28" r="3" transform="rotate(-180 28 28)" fill="#A1A59E" />
      <circle cx="14" cy="28" r="3" transform="rotate(-180 14 28)" fill="#A1A59E" />
    </svg>
  );
};
