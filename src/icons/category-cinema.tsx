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
  const { color = '#302e2e', size = 24, ...otherProps } = props

  return (
    <Svg
    width={size}
    height={size}
    viewBox="0 0 12 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...otherProps}
  >
    <Path
      d="M11.2773 4.20898H0.722656V11.8379H11.2773V4.20898Z"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.7606 0.69843L0.449707 2.95392L0.724339 4.20939L11.0352 1.9539L10.7606 0.69843Z"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M0.529785 2.93597L2.58068 3.8031"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.22607 2.56512L4.27696 3.43225"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.9624 2.18549L6.01329 3.05261"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M5.73877 1.79712L7.78966 2.66424"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.43506 1.42624L9.48595 2.29336"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.0064 1.8224L9.17139 1.04663"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.2773 4.20898H0.722656V5.49414H11.2773V4.20898Z"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M0.804688 4.20898L2.62305 5.49414"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.54102 4.20898L4.35938 5.49414"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M4.31836 4.20898L6.13672 5.49414"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6.13672 4.20898L7.95508 5.49414"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.87305 4.20898L9.69141 5.49414"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.2773 5.35879L9.65039 4.20898"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 10.9082V6.42383"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.92529 7.36719H4.68707"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.92529 8.67969H4.68707"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.92529 9.99219H4.68707"
      stroke="white"
      strokeWidth={0.551562}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}

Icon.displayName = 'CategoryCinema';

export const CategoryCinema = memo<IconProps>(themed(Icon));
