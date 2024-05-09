import React, { memo } from 'react';
import PropTypes from 'prop-types';
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
    {...otherProps}
  >
    <G
      fill="#ec008b"
      stroke="#fff"
      strokeMiterlimit={10}
      strokeWidth={5}
      transform="translate(5 5)"
    >
      <Circle cx={35.506} cy={35.506} r={35.506} stroke="none" />
      <Circle cx={35.506} cy={35.506} r={38.006} fill="none" />
    </G>
    <Path
      fill="#fff"
      d="M59.616 27.35 43.302 56.415a1.6 1.6 0 0 1-1.548.91 2.386 2.386 0 0 1-.407-.052 1.649 1.649 0 0 1-.964-.585 1.593 1.593 0 0 1-.367-1.027l.367-15.393-16.208-4.306a1.762 1.762 0 0 1-1.073-.351 1.563 1.563 0 0 1-.611-.923 1.628 1.628 0 0 1 .9-1.872l33.888-7.701a1.694 1.694 0 0 1 .788-.182 1.65 1.65 0 0 1 1.222.494 1.549 1.549 0 0 1 .326 1.924Z"
    />
  </Svg>
  )
}

Icon.displayName = 'OnboardingConnect';

export const OnboardingConnect = memo<IconProps>(themed(Icon));
