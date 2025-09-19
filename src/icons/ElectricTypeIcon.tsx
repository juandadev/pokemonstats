import * as React from 'react';
import { IconProps } from '@/types';

const ElectricTypeIcon = ({ size, ...props }: IconProps) => (
  <svg
    height={size}
    viewBox="0 0 54 85"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 40.0126C0 42.5126 25 59.0126 25 59.0126C25 59.0126 16 84.0126 17.5 84.5126C19 85.0126 50.5 55.0126 50.5 53.5126C50.5 52.0126 34.5 39.0126 34.5 39.0126C34.5 39.0126 53.5 19.0126 53.5 16.5126C53.5 14.0126 27.5 -0.487372 25 0.0126279C22.5 0.512628 0 37.5126 0 40.0126Z" />
  </svg>
);

export default ElectricTypeIcon;
