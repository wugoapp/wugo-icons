import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Text as _Text,
  Rect,
  ClipPath,
  Defs,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    data-name="Group 61001"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 22.666 15.036"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="a">
        <Path
          data-name="Rectangle 8299"
          fill={color}
          stroke={color}
          strokeWidth={0.3}
          d="M0 0h22.666v15.036H0z"
        />
      </ClipPath>
    </Defs>
    <G
      data-name="Group 61000"
      clipPath="url(#a)"
      fill={color}
      stroke={color}
      strokeWidth={0.3}
    >
      <Path
        data-name="Path 67090"
        d="M15.68 8.857a.26.26 0 0 1-.183-.076L14.426 7.71a.259.259 0 0 1 .366-.366l.888.888 1.423-1.423a.259.259 0 1 1 .366.366l-1.606 1.606a.26.26 0 0 1-.183.076"
      />
      <Path
        data-name="Path 67091"
        d="M20.794 8.927a.26.26 0 0 1-.183-.076l-1.743-1.745a.259.259 0 0 1 .366-.366l1.745 1.745a.259.259 0 0 1-.183.442"
      />
      <Path
        data-name="Path 67092"
        d="M19.049 8.927a.259.259 0 0 1-.183-.442l1.745-1.745a.259.259 0 1 1 .366.366l-1.745 1.745a.26.26 0 0 1-.183.076"
      />
      <Path
        data-name="Path 67093"
        d="M15.516 15.036H2.532A2.535 2.535 0 0 1 0 12.5V2.532A2.535 2.535 0 0 1 2.532 0h12.984a2.534 2.534 0 0 1 2.532 2.532V3.1a.345.345 0 1 1-.69 0v-.57A1.843 1.843 0 0 0 15.516.69H2.532A1.844 1.844 0 0 0 .69 2.532V12.5a1.844 1.844 0 0 0 1.842 1.841h12.984a1.843 1.843 0 0 0 1.841-1.841.345.345 0 0 1 .69 0 2.534 2.534 0 0 1-2.532 2.532"
      />
      <Path
        data-name="Path 67094"
        d="M17.7 2.877H.345a.345.345 0 0 1 0-.69H17.7a.345.345 0 0 1 0 .69"
      />
      <Path
        data-name="Path 67095"
        d="M3.142 1.456a.4.4 0 1 1-.4-.4.4.4 0 0 1 .4.4"
      />
      <Path
        data-name="Path 67096"
        d="M4.377 1.456a.4.4 0 1 1-.4-.4.4.4 0 0 1 .4.4"
      />
      <Path
        data-name="Path 67097"
        d="M5.613 1.456a.4.4 0 1 1-.4-.4.4.4 0 0 1 .4.4"
      />
      <Path
        data-name="Path 67098"
        d="M7.934 5.577H2.351a.259.259 0 1 1 0-.518h5.583a.259.259 0 1 1 0 .518"
      />
      <Path
        data-name="Path 67099"
        d="M10.24 7.115h-1.9a.259.259 0 0 1 0-.518h1.9a.259.259 0 0 1 0 .518"
      />
      <Path
        data-name="Path 67100"
        d="M6.891 7.115h-4.54a.259.259 0 1 1 0-.518h4.54a.259.259 0 1 1 0 .518"
      />
      <Path
        data-name="Path 67101"
        d="M7.934 9.875H2.351a.259.259 0 1 1 0-.518h5.583a.259.259 0 1 1 0 .518"
      />
      <Path
        data-name="Path 67102"
        d="M10.236 11.413h-2.8a.259.259 0 1 1 0-.518h2.8a.259.259 0 1 1 0 .518"
      />
      <Path
        data-name="Path 67103"
        d="M5.745 11.413H2.351a.259.259 0 1 1 0-.518h3.394a.259.259 0 1 1 0 .518"
      />
      <Path
        data-name="Path 67104"
        d="M12.153 12.139a.564.564 0 0 1-.475-.865l.63-1.008a3 3 0 0 0 .458-1.6V6.085a2.11 2.11 0 0 1 2.107-2.107h5.684a2.11 2.11 0 0 1 2.107 2.107v3.354a2.11 2.11 0 0 1-2.107 2.107H18.12c-.238 0-2.5.226-5.905.589h-.062m2.721-7.47a1.42 1.42 0 0 0-1.417 1.417v2.583a3.7 3.7 0 0 1-.564 1.964l-.493.789c2.1-.223 5.367-.565 5.719-.565h2.439a1.42 1.42 0 0 0 1.417-1.417V6.085a1.42 1.42 0 0 0-1.417-1.417Z"
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'VoteScreen';

export const VoteScreen = memo<IconProps>(themed(Icon));
