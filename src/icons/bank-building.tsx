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
    width={size}
    height={size}
    viewBox="0 0 77.821 67.649"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="a">
        <Path
          data-name="Rectangle 8254"
          fill="none"
          d="M0 0h77.821v67.649H0z"
        />
      </ClipPath>
    </Defs>
    <G data-name="Group 60840">
      <G data-name="Group 60825">
        <G data-name="Group 60824" clipPath="url(#a)" fill={color}>
          <Path
            data-name="Path 67026"
            d="M10.866 54.818a1.477 1.477 0 1 0 0 2.954h5.007a1.477 1.477 0 1 0 0-2.954h-1.088v-23.3h1.088a1.477 1.477 0 0 0 0-2.954h-5.007a1.477 1.477 0 0 0 0 2.954h.966v23.3Z"
          />
          <Path
            data-name="Path 67027"
            d="M23.544 54.818a1.477 1.477 0 1 0 0 2.954h5.005a1.477 1.477 0 1 0 0-2.954h-.966v-23.3h.966a1.477 1.477 0 1 0 0-2.954h-5.007a1.477 1.477 0 1 0 0 2.954h1.088v23.3Z"
          />
          <Path
            data-name="Path 67028"
            d="M36.344 54.818a1.477 1.477 0 1 0 0 2.954h5.008a1.477 1.477 0 1 0 0-2.954h-.966v-23.3h.966a1.477 1.477 0 1 0 0-2.954h-5.008a1.477 1.477 0 1 0 0 2.954h1.088v23.3Z"
          />
          <Path
            data-name="Path 67029"
            d="M49.145 54.818a1.477 1.477 0 1 0 0 2.954h5.007a1.477 1.477 0 0 0 0-2.954h-.966v-23.3h.966a1.477 1.477 0 0 0 0-2.954h-5.007a1.477 1.477 0 1 0 0 2.954h1.088v23.3Z"
          />
          <Path
            data-name="Path 67030"
            d="M61.941 54.818a1.477 1.477 0 0 0 0 2.954h5.007a1.477 1.477 0 1 0 0-2.954h-.966v-23.3h.966a1.477 1.477 0 0 0 0-2.954h-5.007a1.477 1.477 0 0 0 0 2.954h1.088v23.3Z"
          />
          <Path
            data-name="Path 67031"
            d="M5.473 61.179a1.477 1.477 0 0 0 1.477 1.477h63.919a1.477 1.477 0 0 0 0-2.954H6.95a1.477 1.477 0 0 0-1.477 1.477"
          />
          <Path
            data-name="Path 67032"
            d="M70.868 23.676H6.949a1.477 1.477 0 0 0 0 2.954h63.92a1.477 1.477 0 1 0 0-2.954"
          />
          <Path
            data-name="Path 67033"
            d="M76.179 64.695H1.639a1.477 1.477 0 0 0 0 2.954h74.54a1.477 1.477 0 0 0 0-2.954"
          />
          <Path
            data-name="Path 67034"
            d="M1.477 21.767h74.867a1.477 1.477 0 0 0 .6-2.827L39.573.157a1.48 1.48 0 0 0-1.327 0L.814 18.971a1.477 1.477 0 0 0 .663 2.8M38.909 3.13l31.205 15.684H7.7Z"
          />
        </G>
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'BankBuilding';

export const BankBuilding = memo<IconProps>(themed(Icon));
