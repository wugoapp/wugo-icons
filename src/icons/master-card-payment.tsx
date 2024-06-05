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
  Polygon,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    id="Group_63997"
    data-name="Group 63997"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 29.548 18.261"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_10552"
          data-name="Rectangle 10552"
          width={29.548}
          height={18.261}
          fill="none"
        />
      </ClipPath>
    </Defs>
    <Rect
      id="Rectangle_10551"
      data-name="Rectangle 10551"
      width={7.989}
      height={14.355}
      transform="translate(10.779 1.953)"
      fill="#ff5f00"
    />
    <G id="Group_63996" data-name="Group 63996" transform="translate(0 0)">
      <G id="Group_63995" data-name="Group 63995" clipPath="url(#clip-path)">
        <Path
          id="Path_70981"
          data-name="Path 70981"
          d="M11.286,9.131a9.155,9.155,0,0,1,3.475-7.178A9.127,9.127,0,1,0,9.131,18.261a9.075,9.075,0,0,0,5.631-1.953,9.117,9.117,0,0,1-3.475-7.178"
          fill="#eb001b"
        />
        <Path
          id="Path_70982"
          data-name="Path 70982"
          d="M566.334,9.131a9.121,9.121,0,0,1-14.761,7.178,9.151,9.151,0,0,0,0-14.355,9.121,9.121,0,0,1,14.761,7.178"
          transform="translate(-536.786)"
          fill="#f79e1b"
        />
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'MasterCardPayment';

export const MasterCardPayment = memo<IconProps>(themed(Icon));
