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
  const { color = '#fff', size = 24, ...otherProps } = props
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 14.655 14.655"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_9422"
          data-name="Rectangle 9422"
          width={14.655}
          height={14.655}
          fill={color}
        />
      </ClipPath>
    </Defs>
    <G id="Copy_Link" data-name="Copy Link" transform="translate(0 0)">
      <G
        id="Group_63157"
        data-name="Group 63157"
        transform="translate(0 0)"
        clipPath="url(#clip-path)"
      >
        <Path
          id="Path_70099"
          data-name="Path 70099"
          d="M6.784,1.351l-.542.542L7.326,2.98l.546-.542a3.073,3.073,0,0,1,4.346,4.346l-.544.544L12.76,8.414,13.3,7.87A4.61,4.61,0,0,0,6.784,1.351M1.349,6.783l.546-.542L2.98,7.327l-.542.542a3.074,3.074,0,0,0,4.346,4.348l.542-.544L8.413,12.76l-.541.544A4.611,4.611,0,0,1,1.349,6.783m8.7-1.087L5.7,10.043,4.611,8.956,8.957,4.61Z"
          transform="translate(0 0.001)"
          fill={color}
          fillRule="evenodd"
        />
      </G>
    </G>
  </Svg>
  
  )
}

Icon.displayName = 'Link';

export const Link = memo<IconProps>(themed(Icon));
