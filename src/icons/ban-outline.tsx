import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Text as _Text,
  ClipPath,
  Defs,
  Rect,
  Line,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16.968 16.968"
    {...otherProps}
  >
    <G
      id="Group_63289"
      data-name="Group 63289"
      transform="translate(-23.361 -675.776)"
    >
      <Path
        id="Vector-9"
        d="M2997.8,1377.951a7.484,7.484,0,1,1-7.484-7.484A7.484,7.484,0,0,1,2997.8,1377.951Z"
        transform="translate(-2958.468 -693.691)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
      <Line
        id="Line_353"
        data-name="Line 353"
        x2={10}
        y2={12}
        transform="translate(26.845 678.26)"
        fill="none"
        stroke={color}
        strokeWidth={2}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'BanOutline';

export const BanOutline = memo<IconProps>(themed(Icon));
