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
  const { color = '#302e2e', size = 24, ...otherProps } = props
  return (
    <Svg
    width={size}
    height={size}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
  >
    <Path
      d="M11.362 0.61C11.292 0.554 11.208 0.54 11.124 0.554L4.40404 1.954C4.27804 1.982 4.18004 2.094 4.18004 2.234V7.946C3.80204 7.526 3.25604 7.274 2.64004 7.274C1.47804 7.274 0.540039 8.212 0.540039 9.374C0.540039 10.536 1.47804 11.474 2.64004 11.474C3.80204 11.474 4.74004 10.536 4.74004 9.374V4.404L10.9 3.116V6.532C10.522 6.112 9.96204 5.86 9.36004 5.86C8.19804 5.86 7.26004 6.798 7.26004 7.96C7.26004 9.122 8.19804 10.06 9.36004 10.06C10.522 10.06 11.46 9.122 11.46 7.96V0.82C11.46 0.736 11.418 0.652 11.362 0.61ZM2.64004 10.9C1.78604 10.9 1.10004 10.214 1.10004 9.36C1.10004 8.506 1.78604 7.82 2.64004 7.82C3.49404 7.82 4.18004 8.506 4.18004 9.36C4.18004 10.214 3.49404 10.9 2.64004 10.9ZM9.36004 9.5C8.50604 9.5 7.82004 8.814 7.82004 7.96C7.82004 7.106 8.50604 6.42 9.36004 6.42C10.214 6.42 10.9 7.106 10.9 7.96C10.9 8.814 10.214 9.5 9.36004 9.5ZM10.9 2.556L4.74004 3.844V2.458L10.9 1.17V2.556Z"
      fill="white"
      stroke="white"
      strokeWidth={0.5}
    />
  </Svg>
  )
}

Icon.displayName = 'CategoryConcert';

export const CategoryConcert = memo<IconProps>(themed(Icon));
