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
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={13.4}
    height={13.4}
    viewBox="0 0 13.4 13.4"
    {...props}
  >
    <G
      id="Saat_Profil"
      data-name="Saat Profil"
      transform="translate(-135.8 -645.8)"
    >
      <Circle
        id="Oval"
        cx={6}
        cy={6}
        r={6}
        transform="translate(136.5 646.5)"
        fill="#fff"
        stroke="#b4b4b4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.4}
      />
      <Path
        id="Path"
        d="M0,0V3.776L2.517,5.034"
        transform="translate(141.5 649.5)"
        fill="none"
        stroke="#b4b4b4"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.4}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'Clock';

export const Clock = memo<IconProps>(themed(Icon));
