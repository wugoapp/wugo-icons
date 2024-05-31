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
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 13.985 13.986"
    {...otherProps}
  >
    <G id="Takvim_Profil" transform="translate(-146.347 -169.046)">
      <Rect
        id="Rectangle"
        width={12.585}
        height={11.327}
        rx={1}
        transform="translate(147.047 171.005)"
        fill="transparent"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.4}
      />
      <Path
        id="Path"
        d="M.389,0V2.517"
        transform="translate(155.747 169.746)"
        fill="transparent"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.4}
      />
      <Path
        id="Path-2"
        data-name="Path"
        d="M.389,0V2.517"
        transform="translate(150.154 169.746)"
        fill="transparent"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.4}
      />
      <Path
        id="Path-3"
        data-name="Path"
        d="M0,.35H12.585"
        transform="translate(147.047 174.43)"
        fill="transparent"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.4}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'Calendar';

export const Calendar = memo<IconProps>(themed(Icon));
