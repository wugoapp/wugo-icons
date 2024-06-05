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
    id="Filtere_Disover"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 20.523 16.406"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_151"
          data-name="Rectangle 151"
          width={20.523}
          height={16.406}
          fill={color}
        />
      </ClipPath>
    </Defs>
    <G id="Group_58050" data-name="Group 58050" clipPath="url(#clip-path)">
      <Path
        id="Path_64803"
        data-name="Path 64803"
        d="M124.016,10.682q0-2.484,0-4.969c0-.136-.02-.211-.172-.262a2.8,2.8,0,1,1,1.87-.024.306.306,0,0,0-.238.356q.009,4.854,0,9.709a1.683,1.683,0,0,1-.015.319.731.731,0,0,1-1.448-.16q0-2.484,0-4.969m2.069-7.865a1.336,1.336,0,1,0-1.341,1.335,1.331,1.331,0,0,0,1.341-1.335"
        transform="translate(-114.487 0.001)"
        fill={color}
      />
      <Path
        id="Path_64804"
        data-name="Path 64804"
        d="M246.44,4.459c0-1.168,0-2.335,0-3.5a.728.728,0,0,1,1-.7A.756.756,0,0,1,247.9,1q0,1.808,0,3.617c0,1.122,0,2.244,0,3.365a.239.239,0,0,0,.2.271,2.785,2.785,0,0,1,.011,5.259.251.251,0,0,0-.207.284q.015,1.03,0,2.06a.735.735,0,0,1-.633.731.746.746,0,0,1-.784-.468.881.881,0,0,1-.047-.337c0-.664,0-1.328,0-1.992a.224.224,0,0,0-.175-.262,2.783,2.783,0,0,1-.016-5.27.238.238,0,0,0,.191-.275c-.007-1.175,0-2.35,0-3.525m-.606,6.417a1.337,1.337,0,1,0,1.345-1.331,1.331,1.331,0,0,0-1.345,1.331"
        transform="translate(-229.447 -0.191)"
        fill={color}
      />
      <Path
        id="Path_64805"
        data-name="Path 64805"
        d="M3.531,3.224c0,.763,0,1.527,0,2.29a.211.211,0,0,0,.169.244,2.787,2.787,0,0,1,0,5.283c-.154.053-.171.131-.171.265q0,2.256,0,4.512a.727.727,0,0,1-1.015.715.751.751,0,0,1-.451-.755c0-1.473,0-2.947,0-4.42a.3.3,0,0,0-.229-.342,2.78,2.78,0,0,1,.019-5.238.267.267,0,0,0,.211-.308q-.01-2.233,0-4.466A.735.735,0,0,1,3.046.25.727.727,0,0,1,3.53.957c0,.756,0,1.512,0,2.267m-.709,3.84a1.336,1.336,0,1,0,1.326,1.35,1.334,1.334,0,0,0-1.326-1.35"
        transform="translate(0 -0.192)"
        fill={color}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'Filter';

export const Filter = memo<IconProps>(themed(Icon));
