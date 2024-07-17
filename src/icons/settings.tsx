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
    viewBox="0 0 22.3 22.3"
    {...otherProps}
  >
    <G id="Settings_Profile" transform="translate(-0.85 -0.85)">
      <Path
        id="Path_66334"
        data-name="Path 66334"
        d="M19.227,16.364A2.864,2.864,0,1,1,16.364,13.5,2.864,2.864,0,0,1,19.227,16.364Z"
        transform="translate(-4.364 -4.364)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
      />
      <Path
        id="Path_66335"
        data-name="Path 66335"
        d="M19.064,14.864a1.575,1.575,0,0,0,.315,1.737l.057.057a1.91,1.91,0,1,1-2.7,2.7l-.057-.057a1.588,1.588,0,0,0-2.692,1.126v.162a1.909,1.909,0,0,1-3.818,0V20.5a1.575,1.575,0,0,0-1.031-1.441,1.575,1.575,0,0,0-1.737.315l-.057.057a1.91,1.91,0,1,1-2.7-2.7l.057-.057a1.588,1.588,0,0,0-1.126-2.692H3.409a1.909,1.909,0,1,1,0-3.818h.086A1.575,1.575,0,0,0,4.936,9.136,1.575,1.575,0,0,0,4.621,7.4l-.057-.057a1.91,1.91,0,1,1,2.7-2.7l.057.057a1.575,1.575,0,0,0,1.737.315h.076a1.575,1.575,0,0,0,.955-1.441V3.409a1.909,1.909,0,0,1,3.818,0v.086A1.588,1.588,0,0,0,16.6,4.621l.057-.057a1.91,1.91,0,1,1,2.7,2.7l-.057.057a1.575,1.575,0,0,0-.315,1.737v.076a1.575,1.575,0,0,0,1.441.955h.162a1.909,1.909,0,0,1,0,3.818H20.5a1.575,1.575,0,0,0-1.441.955Z"
        transform="translate(0 0)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.3}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'Settings';

export const Settings = memo<IconProps>(themed(Icon));
