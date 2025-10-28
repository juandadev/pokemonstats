import * as React from 'react';
import { IconProps } from '@/types';

const StatusEffectIcon = ({ size, ...props }: IconProps) => (
  <svg
    height={size}
    viewBox="0 0 102 78"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M51 0C64.568 0 77.0922 4.0248 86.3682 10.8271C95.6405 17.6269 102 27.5167 102 39C102 50.4833 95.6405 60.3731 86.3682 67.1729C77.0922 73.9752 64.568 78 51 78C37.432 78 24.9078 73.9752 15.6318 67.1729C6.35955 60.3731 0 50.4833 0 39C0 27.5167 6.35955 17.6269 15.6318 10.8271C24.9078 4.0248 37.432 0 51 0ZM62 14C52.917 14.0898 46 17.6793 46 24.5C46 36 58.5 37 58.5 53C58.5 59.5623 53.9426 63.5198 49.3447 65.9727C49.8932 65.9887 50.445 66 51 66C62.2847 66 72.2606 62.6374 79.2715 57.4961C86.2859 52.3522 89 45.7421 89 39C89 25.2064 75.2779 13.8687 62 14Z"
    />
  </svg>
);

export default StatusEffectIcon;
