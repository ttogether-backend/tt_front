import { IconProps } from './types/Icon.types';

export const BentArrowIcon = ({ ...args }: IconProps) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...args}
    >
      <g id="Subdirectory arrow right" clipPath="url(#clip0_726_31910)">
        <path
          id="Vector"
          d="M19 15L13 21L11.58 19.58L15.17 16H4V4H6V14H15.17L11.58 10.42L13 9L19 15Z"
          fill="#696E64"
        />
      </g>
      <defs>
        <clipPath id="clip0_726_31910">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
