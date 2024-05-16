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
    viewBox="0 0 15.424 16.436"
    {...otherProps}
  >
    <G data-name="Group 57537" fill={color}>
      <Path
        data-name="Path 63872"
        d="M12.558 488.6H2.866A2.869 2.869 0 010 485.73v-6.864A2.869 2.869 0 012.866 476h9.692a2.869 2.869 0 012.866 2.866v6.864a2.869 2.869 0 01-2.866 2.866m-9.692-11.568a1.84 1.84 0 00-1.838 1.838v6.864a1.84 1.84 0 001.838 1.838h9.692a1.84 1.84 0 001.842-1.838v-6.864a1.84 1.84 0 00-1.838-1.838z"
        transform="translate(337 -6663.064) translate(-337 6190.904)"
      />
      <Path
        data-name="Path 63873"
        d="M23.228 465.916h-7.165v-2.848a2.006 2.006 0 012-2h3.158a2.006 2.006 0 012 2zm-6.17-1h5.174v-1.852a1.009 1.009 0 00-1.008-1.008h-3.157a1.009 1.009 0 00-1.008 1.008z"
        transform="translate(337 -6663.064) translate(-348.934 6202)"
      />
      <Path
        data-name="Path 63874"
        d="M23.314 495.627a2.314 2.314 0 112.314-2.314 2.316 2.316 0 01-2.314 2.314m0-3.6a1.285 1.285 0 101.285 1.285 1.287 1.287 0 00-1.285-1.285"
        transform="translate(337 -6663.064) translate(-352.602 6179.759)"
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'Lock';

export const Lock = memo<IconProps>(themed(Icon));
