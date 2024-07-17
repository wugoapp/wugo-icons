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
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 13 13"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_8196"
          data-name="Rectangle 8196"
          width={13}
          height={13}
          transform="translate(342 222)"
          stroke={color}
          strokeWidth={1}
        />
      </ClipPath>
      <ClipPath id="clip-path-2">
        <Rect
          id="Rectangle_8195"
          data-name="Rectangle 8195"
          width={12.196}
          height={6.947}
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G
      id="Mask_Group_99"
      data-name="Mask Group 99"
      transform="translate(235 -342) rotate(90)"
      opacity={0.3}
      clipPath="url(#clip-path)"
    >
      <G
        id="Group_60701"
        data-name="Group 60701"
        transform="translate(354.536 231.947) rotate(180)"
      >
        <G
          id="Group_60700"
          data-name="Group 60700"
          clipPath="url(#clip-path-2)"
        >
          <Path
            id="Path_66808"
            data-name="Path 66808"
            d="M12.2.973a1.275,1.275,0,0,1-.406.641Q9.269,4.128,6.754,6.648a.866.866,0,0,1-.932.252.882.882,0,0,1-.356-.231Q2.873,4.076.28,1.482A.827.827,0,0,1,.06.555.813.813,0,0,1,.786,0a.849.849,0,0,1,.706.276L2.629,1.417Q4.321,3.11,6.012,4.8c.07.07.1.071.174,0Q8.435,2.549,10.689.3A.852.852,0,0,1,11.6.043.811.811,0,0,1,12.153.6L12.2.734Z"
            transform="translate(0 0)"
          />
        </G>
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'ChevronRight';

export const ChevronRight = memo<IconProps>(themed(Icon));
