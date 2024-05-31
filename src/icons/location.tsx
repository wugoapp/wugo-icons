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
    width={10.953}
    height={13.939}
    viewBox="0 0 10.953 13.939"
    {...props}
  >
    <Path
      id="Path_3652"
      data-name="Path 3652"
      d="M5463.736,2373.073a5.458,5.458,0,0,0-.5,7.156s.149.2.175.226l4.2,4.953,4.2-4.956.171-.223h0a5.409,5.409,0,0,0,1.1-3.284,5.48,5.48,0,0,0-5.476-5.476h0A5.487,5.487,0,0,0,5463.736,2373.073Zm3.871,5.22-1.793,1.141.3-2.028-1.493-1.37,2.091-.252.9-1.825.952,1.826,2.035.253-1.494,1.37.3,2.029Z"
      transform="translate(-5462.13 -2371.469)"
      fill="#ec008b"
    />
  </Svg>
  )
}

Icon.displayName = 'Location';

export const Location = memo<IconProps>(themed(Icon));
