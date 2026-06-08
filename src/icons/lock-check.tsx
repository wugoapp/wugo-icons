import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Text as _Text,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    width={size}
    height={size}
    viewBox="0 0 17 17"
    fill="none"
    {...otherProps}
  >
    <Path
      d="M8.14579 14.875H4.95829C4.58257 14.875 4.22223 14.7257 3.95656 14.46C3.69088 14.1944 3.54163 13.834 3.54163 13.4583V9.20829C3.54163 8.83257 3.69088 8.47223 3.95656 8.20656C4.22223 7.94088 4.58257 7.79163 4.95829 7.79163H12.0416C12.4173 7.79163 12.7777 7.94088 13.0434 8.20656C13.309 8.47223 13.4583 8.83257 13.4583 9.20829V9.56246"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.66663 7.79167V4.95833C5.66663 4.20689 5.96514 3.48622 6.49649 2.95486C7.02784 2.42351 7.74851 2.125 8.49996 2.125C9.25141 2.125 9.97208 2.42351 10.5034 2.95486C11.0348 3.48622 11.3333 4.20689 11.3333 4.95833V7.79167M10.625 13.4583L12.0416 14.875L14.875 12.0417M7.79163 11.3333C7.79163 11.5212 7.86625 11.7014 7.99909 11.8342C8.13193 11.967 8.3121 12.0417 8.49996 12.0417C8.68782 12.0417 8.86799 11.967 9.00083 11.8342C9.13366 11.7014 9.20829 11.5212 9.20829 11.3333C9.20829 11.1455 9.13366 10.9653 9.00083 10.8325C8.86799 10.6996 8.68782 10.625 8.49996 10.625C8.3121 10.625 8.13193 10.6996 7.99909 10.8325C7.86625 10.9653 7.79163 11.1455 7.79163 11.3333Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}

Icon.displayName = 'LockCheck';

export const LockCheck = memo<IconProps>(themed(Icon));
