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
    viewBox="0 0 10 20"
    {...otherProps}
  >
    <Path
      d="M10 3.75H7.5A1.181 1.181 0 006.25 5v2.5H10v3.75H6.25V20H2.5v-8.75H0V7.5h2.5V4.375A4.429 4.429 0 016.875 0H10z"
      fill={color}
    />
  </Svg>
  )
}

Icon.displayName = 'Facebook';

export const Facebook = memo<IconProps>(themed(Icon));
