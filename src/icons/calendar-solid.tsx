import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
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
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
  >
    <Path
      d="M5.49431 1.5C5.82353 1.5 6.09042 1.74316 6.09042 2.0431V3.13865C6.61918 3.12931 7.21187 3.12931 7.87874 3.12931H11.058C11.7249 3.12931 12.3175 3.12931 12.8463 3.13865V2.0431C12.8463 1.74316 13.1132 1.5 13.4424 1.5C13.7716 1.5 14.0385 1.74316 14.0385 2.0431V3.1867C15.1825 3.27016 15.9335 3.475 16.4853 3.97769C17.037 4.48039 17.2619 5.16462 17.3535 6.2069L17.4166 6.75H2.31519H1.58325V6.2069C1.67486 5.16462 1.89968 4.48039 2.45144 3.97769C3.00319 3.475 3.75421 3.27016 4.8982 3.1867V2.0431C4.8982 1.74316 5.16509 1.5 5.49431 1.5Z"
      fill={color}
    />
    <Path
      opacity={0.5}
      d="M17.4167 10.5001V9.00006C17.4167 8.37079 17.4142 7.24895 17.4039 6.75H1.59104C1.58082 7.24895 1.58341 8.37079 1.58341 9.00006V10.5001C1.58341 13.3285 1.58341 14.7427 2.5109 15.6214C3.4384 16.5001 4.93118 16.5001 7.91674 16.5001H11.0834C14.069 16.5001 15.5617 16.5001 16.4892 15.6214C17.4167 14.7427 17.4167 13.3285 17.4167 10.5001Z"
      fill={color}
    />
  </Svg>
  )
}

Icon.displayName = 'CalendarSolid';

export const CalendarSolid = memo<IconProps>(themed(Icon));
