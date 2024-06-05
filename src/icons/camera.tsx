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
  const { color = '#afafb1', size = 24, ...otherProps } = props
  return (
    <Svg
    id="Group_58597"
    data-name="Group 58597"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 26.289 22.787"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_7388"
          data-name="Rectangle 7388"
          width={26.289}
          height={22.787}
          fill={color}
          stroke="rgba(0,0,0,0)"
          strokeWidth={1}
        />
      </ClipPath>
    </Defs>
    <G id="Group_58596" data-name="Group 58596" clipPath="url(#clip-path)">
      <Path
        id="Path_64932"
        data-name="Path 64932"
        d="M13.142,22.786h-9.8A3.206,3.206,0,0,1,0,19.44q0-6.3,0-12.6A3.206,3.206,0,0,1,3.348,3.508c1.123,0,2.245,0,3.368,0,.186,0,.274-.047.328-.231.119-.4.255-.8.4-1.192A3.16,3.16,0,0,1,10.409.006q2.738-.014,5.476,0a3.154,3.154,0,0,1,2.961,2.088c.14.376.27.756.382,1.14a.324.324,0,0,0,.378.28c1.132-.015,2.263-.008,3.4-.006a3.2,3.2,0,0,1,3.287,3.286q0,6.353,0,12.705A3.2,3.2,0,0,1,23,22.786q-4.929,0-9.858,0m-.011-1.753h9.8a1.462,1.462,0,0,0,1.6-1.591q0-6.3,0-12.593a1.458,1.458,0,0,0-1.578-1.589c-1.4,0-2.792,0-4.188,0a.872.872,0,0,1-.923-.662c-.2-.594-.4-1.193-.6-1.788a1.442,1.442,0,0,0-1.461-1.054q-2.642,0-5.284,0a1.44,1.44,0,0,0-1.46,1.055c-.2.578-.384,1.159-.579,1.737a.9.9,0,0,1-1,.711H3.358a1.464,1.464,0,0,0-1.6,1.617q0,6.255,0,12.511a1.475,1.475,0,0,0,1.66,1.645h9.718"
        transform="translate(0 0.001)"
        fill={color}
        stroke="rgba(0,0,0,0)"
        strokeWidth={1}
      />
      <Path
        id="Path_64933"
        data-name="Path 64933"
        d="M89.828,90.47a6.572,6.572,0,1,1,6.566,6.564,6.575,6.575,0,0,1-6.566-6.564m6.579,4.811a4.819,4.819,0,1,0-4.825-4.819,4.831,4.831,0,0,0,4.825,4.819"
        transform="translate(-83.256 -77.752)"
        fill={color}
        stroke="rgba(0,0,0,0)"
        strokeWidth={1}
      />
      <Path
        id="Path_64934"
        data-name="Path 64934"
        d="M288.324,95.876a.875.875,0,1,1-.87.873.882.882,0,0,1,.87-.873"
        transform="translate(-266.423 -88.861)"
        fill={color}
        stroke="rgba(0,0,0,0)"
        strokeWidth={1}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'Camera';

export const Camera = memo<IconProps>(themed(Icon));
