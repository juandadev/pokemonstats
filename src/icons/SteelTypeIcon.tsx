import * as React from 'react';
import { IconProps } from '@/types';

const SteelTypeIcon = ({ size, ...props }: IconProps) => (
  <svg
    height={size}
    viewBox="0 0 77 74"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M46.5 67L38.5 73.5L6.5 50L38 40.5L46.5 67Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M77 45L54 62C49.5 49.5 41.75 24 42.5 21C43.125 18.5 59 14.5 66.5 13L77 45ZM56.5 21.5C53.1863 21.5 50.5 24.1863 50.5 27.5C50.5 30.8137 53.1863 33.5 56.5 33.5C59.8137 33.5 62.5 30.8137 62.5 27.5C62.5 24.1863 59.8137 21.5 56.5 21.5Z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M63.5 4.5C59.5 5.66667 51.5 8.36364 47 10C41.5 12 33.5 14 33 16C32.5 18 37.5 33.5 37 34.5C36.5 35.5 0 45.5 0 45.5L14.5 0H62.5L63.5 4.5ZM22 3.5C19.5147 3.5 17.5 5.51472 17.5 8C17.5 10.4853 19.5147 12.5 22 12.5C24.4853 12.5 26.5 10.4853 26.5 8C26.5 5.51472 24.4853 3.5 22 3.5Z"
    />
  </svg>
);

export default SteelTypeIcon;
