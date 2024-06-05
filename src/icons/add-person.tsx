import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Text as _Text,
  Circle,
  ClipPath,
  Defs,
  Rect,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    id="Group_63156"
    data-name="Group 63156"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 24 13"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_9421"
          data-name="Rectangle 9421"
          width={24}
          height={13}
          fill={color}
        />
      </ClipPath>
    </Defs>
    <G id="Group_63155" data-name="Group 63155" clipPath="url(#clip-path)">
      <Path
        id="Path_70098"
        data-name="Path 70098"
        d="M7,5H5V3A1,1,0,0,0,3,3V5H1A1,1,0,0,0,1,7H3V9A1,1,0,0,0,5,9V7H7A1,1,0,0,0,7,5M18,6A3,3,0,1,0,17.09.14,4.934,4.934,0,0,1,17.99,3a5.031,5.031,0,0,1-.9,2.86A2.99,2.99,0,0,0,18,6M13,6a3,3,0,1,0-3-3,2.987,2.987,0,0,0,3,3m0,2c-2,0-6,1-6,3v1a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V11c0-2-4-3-6-3m6.62.16A3.7,3.7,0,0,1,21,11v1.5a2.734,2.734,0,0,1-.05.5H23.5a.5.5,0,0,0,.5-.5V11c0-1.54-2.37-2.49-4.38-2.84"
        fill={color}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'AddPerson';

export const AddPerson = memo<IconProps>(themed(Icon));
