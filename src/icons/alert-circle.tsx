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
  Text,
  TSpan,
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
    viewBox="0 0 46 48"
    {...otherProps}
  >
    <Text
      id="_Title"
      data-name="\u21B3 Title"
      transform="translate(23 38)"
      fill={color}
      fontSize={42}
      fontFamily="Helvetica-Bold, Helvetica"
      fontWeight={700}
    >
      <TSpan x={-6.993} y={0}>
        {"!"}
      </TSpan>
    </Text>
    <G
      id="Ellipse_3611"
      data-name="Ellipse 3611"
      fill="none"
      stroke={color}
      strokeWidth={2}
    >
      <Circle cx={23} cy={23} r={23} stroke="none" />
      <Circle cx={23} cy={23} r={22} fill="none" />
    </G>
  </Svg>
  )
}

Icon.displayName = 'AlertCircle';

export const AlertCircle = memo<IconProps>(themed(Icon));
