import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Text as _Text,
  Circle,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16.037 20.596"
    {...otherProps}
  >
    <Path
      id="Path_70984"
      data-name="Path 70984"
      d="M64.468,5.458,63.433,4.5,59.891,1.233,58.733.163A.616.616,0,0,0,58.314,0H50.128a1.5,1.5,0,0,0-1.5,1.5V17.2h1.233V1.5a.266.266,0,0,1,.266-.266H57.7V5.911a.617.617,0,0,0,.617.617h5.119V19.1a.266.266,0,0,1-.266.266H50.128a.266.266,0,0,1-.266-.266V17.072H48.629V19.1a1.5,1.5,0,0,0,1.5,1.5H63.167a1.5,1.5,0,0,0,1.5-1.5V5.911a.616.616,0,0,0-.2-.453"
      transform="translate(-48.629)"
      fill={color}
    />
  </Svg>
  )
}

Icon.displayName = 'Document';

export const Document = memo<IconProps>(themed(Icon));
