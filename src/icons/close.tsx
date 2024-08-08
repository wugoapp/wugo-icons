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
    viewBox="0 0 11.358 11.358"
    {...otherProps}
  >
    <G
      id="Icons_Plus"
      data-name="Icons/Plus"
      transform="translate(17.232 5.679) rotate(135)"
    >
      <Path
        id="Shape"
        d="M3.307,7.322v-2.6H.709a.709.709,0,1,1,0-1.417h2.6V.709a.709.709,0,1,1,1.417,0v2.6h2.6a.709.709,0,1,1,0,1.417h-2.6v2.6a.709.709,0,1,1-1.417,0Z"
        transform="translate(4.154 4.154)"
        fill={color}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'Close';

export const Close = memo<IconProps>(themed(Icon));
