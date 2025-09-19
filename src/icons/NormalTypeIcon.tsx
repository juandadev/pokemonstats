import * as React from 'react';
import { IconProps } from '@/types';

const NormaTypeIcon = ({ size, ...props }: IconProps) => (
  <svg
    height={size}
    viewBox="0 0 78 78"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M62.5 0C69.9558 0 76 5.8203 76 13C76 15.858 75.0403 18.4989 73.417 20.6445C76.3407 26.1152 78 32.3636 78 39C78 60.5391 60.5391 78 39 78C17.4609 78 0 60.5391 0 39C0 32.3641 1.65867 26.1159 4.58203 20.6455C2.95854 18.4999 2 15.8581 2 13C2 5.8203 8.04416 0 15.5 0C18.7561 0 21.7417 1.11131 24.0732 2.95996C28.6712 1.05346 33.7125 0 39 0C44.2869 0 49.3272 1.0539 53.9248 2.95996C56.2567 1.1109 59.2434 0 62.5 0ZM39 11C24.0883 11 12 23.3122 12 38.5C12 53.6878 24.0883 66 39 66C53.9117 66 66 53.6878 66 38.5C66 23.3122 53.9117 11 39 11Z"
    />
  </svg>
);

export default NormaTypeIcon;
