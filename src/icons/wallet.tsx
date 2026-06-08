import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  Path,
  Text as _Text,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
   <Svg
    width={size}
    height={size}
    viewBox="0 0 24 22"
    fill="none"
    {...otherProps}
  >
    <Path
      d="M18.7778 5.44444V2.11111C18.7778 1.81643 18.6607 1.53381 18.4523 1.32544C18.244 1.11706 17.9613 1 17.6667 1H3.22222C2.63285 1 2.06762 1.23413 1.65087 1.65087C1.23413 2.06762 1 2.63285 1 3.22222C1 3.81159 1.23413 4.37682 1.65087 4.79357C2.06762 5.21032 2.63285 5.44444 3.22222 5.44444H19.8889C20.1836 5.44444 20.4662 5.56151 20.6746 5.76988C20.8829 5.97825 21 6.26087 21 6.55555V11M21 11H17.6667C17.0773 11 16.5121 11.2341 16.0953 11.6509C15.6786 12.0676 15.4444 12.6329 15.4444 13.2222C15.4444 13.8116 15.6786 14.3768 16.0953 14.7936C16.5121 15.2103 17.0773 15.4444 17.6667 15.4444H21C21.2947 15.4444 21.5773 15.3274 21.7857 15.119C21.994 14.9106 22.1111 14.628 22.1111 14.3333V12.1111C22.1111 11.8164 21.994 11.5338 21.7857 11.3254C21.5773 11.1171 21.2947 11 21 11Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1 3.22217V18.7777C1 19.3671 1.23413 19.9323 1.65087 20.3491C2.06762 20.7658 2.63285 20.9999 3.22222 20.9999H19.8889C20.1836 20.9999 20.4662 20.8829 20.6746 20.6745C20.8829 20.4661 21 20.1835 21 19.8888V15.4444"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
  )
}

Icon.displayName = 'Wallet';

export const Wallet = memo<IconProps>(themed(Icon));
