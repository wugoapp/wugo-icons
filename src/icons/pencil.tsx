import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle,
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
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 18 17.976"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_7327"
          data-name="Rectangle 7327"
          width={18}
          height={17.976}
          transform="translate(0 0)"
          fill={color}
        />
      </ClipPath>
    </Defs>
    <G id="Group_58504" data-name="Group 58504" transform="translate(0 -0.001)">
      <G
        id="Group_58503"
        data-name="Group 58503"
        transform="translate(0 0.001)"
        clipPath="url(#clip-path)"
      >
        <Path
          id="Path_64917"
          data-name="Path 64917"
          d="M132.995,119.52a3.5,3.5,0,0,1,3.116,2.2,3.536,3.536,0,0,1-.73,3.9c-.677.7-1.372,1.377-2.059,2.064-2.471,2.471-4.949,4.937-7.406,7.422a1.765,1.765,0,0,1-1,.528c-1.417.262-2.827.564-4.241.839a1.155,1.155,0,0,1-1.1-.365.7.7,0,0,1-.18-.654q.466-2.336.935-4.672a1.333,1.333,0,0,1,.388-.68q4.769-4.769,9.54-9.537a3.655,3.655,0,0,1,2.732-1.05m-11.374,14.608c-.06.235.063.194.172.173.876-.166,1.752-.334,2.629-.494a.541.541,0,0,0,.3-.161q3.672-3.675,7.348-7.345c.126-.125.138-.194,0-.325q-1.071-1.051-2.123-2.122c-.137-.139-.211-.134-.346,0q-3.657,3.669-7.322,7.329a.455.455,0,0,0-.161.238c-.168.915-.341,1.83-.5,2.705m11.171-12.72a2,2,0,0,0-1.538.8c-.13.136-.116.2.008.325.595.582,1.179,1.175,1.768,1.763s.586.583,1.1-.074a1.694,1.694,0,0,0,.2-1.878,1.614,1.614,0,0,0-1.539-.936"
          transform="translate(-119.381 -119.52)"
          fill={color}
        />
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'Pencil';

export const Pencil = memo<IconProps>(themed(Icon));
