import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Text as _Text,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20.297 24.946"
    {...otherProps}
  >
    <G data-name="Group 63241" fill={color}>
      <Path
        data-name="Path 70282"
        d="M16.952 64.178a5.669 5.669 0 012.7-4.755 5.8 5.8 0 00-4.571-2.473c-1.925-.2-3.789 1.153-4.768 1.153-1 0-2.51-1.131-4.135-1.1a6.093 6.093 0 00-5.125 3.126C-1.164 63.965.489 69.6 2.611 72.7c1.061 1.517 2.3 3.216 3.926 3.154 1.589-.064 2.182-1.012 4.1-1.012 1.9 0 2.457 1.012 4.115.975 1.7-.027 2.777-1.525 3.8-3.058a12.559 12.559 0 001.74-3.542 5.483 5.483 0 01-3.345-5.042"
        transform="translate(-344.999 -4711.999) translate(345 4661.087)"
      />
      <Path
        data-name="Path 70283"
        d="M99.164 4a5.581 5.581 0 001.277-4 5.689 5.689 0 00-3.674 1.9 5.3 5.3 0 00-1.311 3.85A4.7 4.7 0 0099.164 4"
        transform="translate(-344.999 -4711.999) translate(259.659 4712)"
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'Apple';

export const Apple = memo<IconProps>(themed(Icon));
