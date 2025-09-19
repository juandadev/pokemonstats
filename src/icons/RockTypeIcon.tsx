import * as React from 'react';
import { IconProps } from '@/types';

const RockTypeIcon = ({ size, ...props }: IconProps) => (
  <svg
    height={size}
    viewBox="0 0 76 76"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M76 22V54.5L54.5 76H21.5L0 54V22L22 0H54.5L76 22ZM40.5 70.5C46.1667 71 59.4 70.6 65 65C70.6 59.4 70.8333 46.3333 70.5 40.5L40.5 70.5ZM5.5 40C5.16667 45.8333 5.3 59.3 10.5 64.5C15.7 69.7 29.8333 70.5 36 70.5L5.5 40ZM65 11C61.4 7.40001 53.3333 7.33333 50 7.5L68.5 26C68.6667 22.6667 68.6 14.6 65 11Z"
    />
  </svg>
);

export default RockTypeIcon;
