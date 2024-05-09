import React, { memo } from 'react';
import PropTypes from 'prop-types';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 286.54 286.54"
      {...otherProps}
    >
      <Path
        d="M143.27 0A143.27 143.27 0 110 143.27 143.27 143.27 0 01143.27 0z"
        fill="rgba(245,45,86,0.05)"
      />
    </Svg>
  )
}

Icon.displayName = 'OnboardingEvents';

export const OnboardingEvents = memo<IconProps>(themed(Icon));
