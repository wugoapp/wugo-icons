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
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 18 18"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="a">
        <Path
          data-name="Rectangle 55"
          transform="translate(.072 .072)"
          fill={color}
          d="M0 0H18V18H0z"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 57556">
      <G
        data-name="Group 3933"
        clipPath="url(#a)"
        fill={color}
        transform="translate(-.072 -.072)"
      >
        <Path
          data-name="Path 197"
          d="M9.043 18.306H3.789A3.759 3.759 0 010 14.523V3.944A3.757 3.757 0 013.779.176h6.032a.745.745 0 01.749.533.776.776 0 01-.3.875.865.865 0 01-.537.134c-1.932 0-3.864-.007-5.8 0a2.238 2.238 0 00-2.182 1.353 2.363 2.363 0 00-.2 1.01q-.006 5.16 0 10.32A2.239 2.239 0 003.3 16.694a2.945 2.945 0 00.63.068q5.136.006 10.273 0a2.251 2.251 0 002.321-1.751 3.175 3.175 0 00.071-.7v-5.8a.769.769 0 111.537-.047c.007.73 0 1.461 0 2.191v3.911a3.761 3.761 0 01-3.741 3.734H9.043"
          transform="translate(0 -.163)"
        />
        <Path
          data-name="Path 198"
          d="M95.752 10.2c0-.322.014-.645 0-.966a1.024 1.024 0 01.345-.836q2.134-2.08 4.255-4.174c1.2-1.184 2.4-2.375 3.612-3.552a2.186 2.186 0 012.283-.558 2.158 2.158 0 011.573 1.769 2.232 2.232 0 01-.663 2.066q-1.67 1.7-3.339 3.391-2.172 2.209-4.34 4.422a1.059 1.059 0 01-.833.353c-.683-.016-1.366 0-2.05-.005a.762.762 0 01-.838-.828v-1.084m2.211.371c.341.1.612-.107.882-.395.651-.692 1.325-1.362 1.992-2.039l5.127-5.2a1.726 1.726 0 00.2-.23.714.714 0 00-.473-1.122.819.819 0 00-.751.3q-3.623 3.573-7.257 7.136a1.142 1.142 0 00-.4.96c.033.59.009.591.678.591"
          transform="translate(-89.718)"
        />
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'EditBoard';

export const EditBoard = memo<IconProps>(themed(Icon));
