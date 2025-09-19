import * as React from 'react';
import { IconProps } from '@/types';

const IceTypeIcon = ({ size, ...props }: IconProps) => (
  <svg
    height={size}
    viewBox="0 0 72 90"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M45.3838 80.0977L36.2861 89.3838L27 80.2861L36 71.5L45.3838 80.0977Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M59 32V58L36 71.5L13 58V32L36 18.5L59 32ZM34 27C33.5 27 23.2 31.8 20 35C19.3333 36.6667 18.5 52 19 52.5C19.5002 53 25 53 25.5 52.5C25.9999 51.9996 25.2 44.1999 26 39C28.1667 37.1666 37 33 37 32.5C37 32 34.5002 27.0005 34 27Z"
    />
    <path d="M13 71H0V58H13V71Z" />
    <path d="M72 71H59V58H72V71Z" />
    <path d="M13 32H0V19H13V32Z" />
    <path d="M72 32H59V19H72V32Z" />
    <path d="M45.3838 9.09766L36 18.5L27 9.28613L36.0977 0L45.3838 9.09766Z" />
  </svg>
);

export default IceTypeIcon;
