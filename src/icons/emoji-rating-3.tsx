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
  Stop,
  RadialGradient,
  LinearGradient,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    data-name="Group 59663"
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={47.173}
    viewBox="0 0 55 47.173"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path data-name="Rectangle 7874" fill="none" d="M0 0h55v47.173H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path
          data-name="Path 66068"
          d="M9.459 2.972a19.1 19.1 0 0 0-4.7 2.98 15 15 0 0 0-1.086 1.046v.007q-.356.45-.68.925A19.1 19.1 0 0 0 0 18.898a28.07 28.07 0 0 0 28.069 28.069q.609-.001 1.209-.028c.7-.027 1.394-.086 2.081-.162A27.506 27.506 0 0 0 54.191 19.67c0-6.231-2.072-10.661-5.568-13.719a19.1 19.1 0 0 0-4.709-2.98C39.199.828 33.206-.002 26.685-.002S14.171.825 9.459 2.972"
          fill="none"
        />
      </ClipPath>
      <RadialGradient
        id="c"
        cx={0.748}
        cy={0.515}
        r={0.757}
        gradientTransform="matrix(-.982 0 0 1 .218 0)"
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#fcd428" />
        <Stop offset={0.38} stopColor="#fad127" />
        <Stop offset={0.552} stopColor="#f7ca24" />
        <Stop offset={0.682} stopColor="#f1bd1f" />
        <Stop offset={0.79} stopColor="#e8ab18" />
        <Stop offset={0.826} stopColor="#e5a415" />
        <Stop offset={1} stopColor="#e5a415" />
      </RadialGradient>
    </Defs>
    <G data-name="Group 59658">
      <G data-name="Group 59657" clipPath="url(#a)">
        <Path
          data-name="Path 66067"
          d="M55 19.671a27.5 27.5 0 0 1-22.828 27.1 27 27 0 0 1-3.486.371q-.59.026-1.187.026A27.5 27.5 0 0 1 0 19.671 18.7 18.7 0 0 1 2.932 8.928a15 15 0 0 1 1.549-1.929v-.006C9.393 1.799 17.867-.001 27.5-.001 42.689-.001 55 4.484 55 19.671"
          fill="#2d2d2d"
        />
      </G>
    </G>
    <G data-name="Group 59660">
      <G
        data-name="Group 59659"
        clipPath="url(#b)"
        transform="translate(.812 .001)"
      >
        <Path
          data-name="Rectangle 7875"
          transform="rotate(-37.687 14.356 42.066)"
          fill="url(#c)"
          d="M0 0h71.595v70.295H0z"
        />
      </G>
    </G>
    <G data-name="Group 59662">
      <G data-name="Group 59661" clipPath="url(#a)">
        <Path
          data-name="Path 66069"
          d="M29.266 17.404c.346 2.591 2.655 4.748 2.669 5.6.019 1.126-1.332 1.6-3.492 1.6"
          fill="none"
          stroke="#2d2d2d"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
        />
        <Path
          data-name="Path 66070"
          d="M44.077 34.503q-.17.392-.373.77a5 5 0 0 0-1.188-.145H12.483a5 5 0 0 0-1.188.145 10 10 0 0 1-.373-.77 5 5 0 0 0 1.56.252h30.035a5 5 0 0 0 1.56-.252"
          fill="#2d2d2d"
        />
        <Path
          data-name="Path 66071"
          d="M44.923 30.549a9.8 9.8 0 0 1-.846 3.956 5 5 0 0 1-1.56.252H12.484a5 5 0 0 1-1.561-.252 9.8 9.8 0 0 1-.846-3.956c0-2.554 1.012-3.759 2.755-4.253a7 7 0 0 1 .691-.155c3.176-.539 8.254.635 13.974.635s10.8-1.174 13.978-.635a7 7 0 0 1 .69.155c1.743.494 2.758 1.7 2.758 4.253"
          fill="#fff"
        />
        <Path
          data-name="Path 66072"
          d="M43.705 35.282a13.8 13.8 0 0 1-4.736 4.94q-.215.141-.438.276a19.7 19.7 0 0 1-4.685 2.019 23.3 23.3 0 0 1-12.69 0 19.5 19.5 0 0 1-4.685-2.023 9 9 0 0 1-.445-.273 13.74 13.74 0 0 1-4.729-4.94 5 5 0 0 1 1.188-.145h30.032a5 5 0 0 1 1.188.145"
          fill="#fff"
        />
        <Path
          data-name="Path 66073"
          d="M13.881 15.797a5.72 5.72 0 0 1 4.167-2.123 5.87 5.87 0 0 1 4.361 2.341"
          fill="none"
          stroke="#2d2d2d"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
        />
        <Path
          data-name="Path 66074"
          d="M35.553 15.797a5.72 5.72 0 0 1 4.167-2.123 5.87 5.87 0 0 1 4.361 2.341"
          fill="none"
          stroke="#2d2d2d"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
        />
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'EmojiRating3';

export const EmojiRating3 = memo<IconProps>(themed(Icon));
