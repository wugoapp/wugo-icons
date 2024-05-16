import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Text as _Text,
  Circle,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 14 18.667"
    {...otherProps}
  >
    <G data-name="user (6)" fill="none">
      <G
        data-name="Ellipse 3451"
        transform="translate(-64) translate(66.333)"
        stroke={color}
        strokeWidth={1.2}
      >
        <Circle cx={4.667} cy={4.667} r={4.667} stroke="none" />
        <Circle cx={4.667} cy={4.667} r={4.067} />
      </G>
      <G data-name="Path 65216">
        <Path
          d="M71 298.667a7.008 7.008 0 00-7 7 .778.778 0 00.778.778h12.444a.778.778 0 00.778-.778 7.008 7.008 0 00-7-7z"
          transform="translate(-64) translate(0 -287.778)"
        />
        <Path
          d="M71 299.867a5.818 5.818 0 00-5.784 5.378h11.568A5.818 5.818 0 0071 299.867m0-1.2a7.008 7.008 0 017 7c0 .43-.348.778-.778.778H64.778a.778.778 0 01-.778-.778 7.008 7.008 0 017-7z"
          fill={color}
          transform="translate(-64) translate(0 -287.778)"
        />
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'PersonOutline';

export const PersonOutline = memo<IconProps>(themed(Icon));
