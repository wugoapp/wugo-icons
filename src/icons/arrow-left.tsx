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
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 11.756 12.378"
    {...otherProps}
  >
    <G
      data-name="Arrow Icon"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path
        d="M10.256 5.128H0M5.129 0L.001 5.128l5.128 5.128"
        transform="translate(.75 1.061)"
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'ArrowLeft';

export const ArrowLeft = memo<IconProps>(themed(Icon));
