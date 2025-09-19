import * as React from 'react';
import { IconProps } from '@/types';

const PoisonTypeIcon = ({ size, ...props }: IconProps) => (
  <svg
    height={size}
    viewBox="0 0 80 77"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M39.5 48C46.0357 48 51.399 53.0159 51.9521 59.4082C68.2053 60.5517 80 63.9662 80 68C80 72.9706 62.0914 77 40 77C17.9086 77 0 72.9706 0 68C0 64.05 11.3095 60.6968 27.04 59.4854C27.5565 53.0563 32.938 48 39.5 48Z" />
    <path d="M56.5 25C61.7467 25 66 29.0294 66 34C66 38.9706 61.7467 43 56.5 43C51.2533 43 47 38.9706 47 34C47 29.0294 51.2533 25 56.5 25Z" />
    <path d="M26 0C34.2843 0 41 6.71573 41 15C41 23.2843 34.2843 30 26 30C17.7157 30 11 23.2843 11 15C11 6.71573 17.7157 0 26 0Z" />
  </svg>
);

export default PoisonTypeIcon;
