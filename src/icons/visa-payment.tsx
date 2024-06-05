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
    id="Group_63999"
    data-name="Group 63999"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 43.788 14.188"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_10553"
          data-name="Rectangle 10553"
          width={43.788}
          height={14.188}
          fill="none"
        />
      </ClipPath>
    </Defs>
    <G
      id="Group_63998"
      data-name="Group 63998"
      transform="translate(0 0)"
      clipPath="url(#clip-path)"
    >
      <Path
        id="Path_70983"
        data-name="Path 70983"
        d="M28.521,0c-3.109,0-5.888,1.612-5.888,4.589,0,3.415,4.928,3.65,4.928,5.366,0,.722-.828,1.369-2.241,1.369a7.443,7.443,0,0,1-3.506-.9l-.642,3a10.943,10.943,0,0,0,4.021.763c3.4,0,6.074-1.691,6.074-4.719,0-3.608-4.948-3.837-4.948-5.429,0-.566.68-1.186,2.089-1.186A7.1,7.1,0,0,1,31.3,3.51l.628-2.9A9.4,9.4,0,0,0,28.521,0M.075.218,0,.656a14.625,14.625,0,0,1,2.486.717c1.517.548,1.625.866,1.88,1.856L7.15,13.961h3.732L16.631.218H12.908L9.214,9.562,7.706,1.642A1.63,1.63,0,0,0,6.011.218Zm18.053,0L15.207,13.961h3.55L21.668.218Zm19.8,0a1.675,1.675,0,0,0-1.643,1.259l-5.2,12.483h3.723l.72-2.081h4.536l.438,2.081h3.285L40.922.218Zm.484,3.713,1.1,5.157H36.561Z"
        transform="translate(0 0.001)"
        fill="#1a1f71"
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'VisaPayment';

export const VisaPayment = memo<IconProps>(themed(Icon));
