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
  RadialGradient,
  Stop,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    data-name="Group 59649"
    xmlns="http://www.w3.org/2000/svg"
    width={55}
    height={47.173}
    viewBox="0 0 55 47.173"
    {...props}
  >
    <Defs>
      <ClipPath id="a">
        <Path data-name="Rectangle 7868" fill="none" d="M0 0h55v47.173H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path
          data-name="Path 66048"
          d="M9.46 2.972a19.1 19.1 0 0 0-4.7 2.979 15 15 0 0 0-1.087 1.047H3.67a17 17 0 0 0-.681.925A19.1 19.1 0 0 0 0 18.898a28.07 28.07 0 0 0 28.07 28.068q.61-.001 1.208-.028c.7-.028 1.395-.087 2.082-.162A27.506 27.506 0 0 0 54.189 19.67c0-6.231-2.071-10.66-5.569-13.719a19 19 0 0 0-4.709-2.979C39.199.828 33.207-.002 26.685-.002S14.171.825 9.46 2.972"
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
    <G data-name="Group 59644">
      <G data-name="Group 59643" clipPath="url(#a)">
        <Path
          data-name="Path 66047"
          d="M55 19.671a27.47 27.47 0 0 1-26.315 27.476q-.59.026-1.187.026A27.5 27.5 0 0 1 0 19.671 18.7 18.7 0 0 1 2.932 8.927a15 15 0 0 1 1.549-1.928v-.006C9.393 1.799 17.867-.001 27.5-.001 42.689-.001 55 4.484 55 19.671"
          fill="#2d2d2d"
        />
      </G>
    </G>
    <G data-name="Group 59646">
      <G
        data-name="Group 59645"
        clipPath="url(#b)"
        transform="translate(.811 .001)"
      >
        <Path
          data-name="Rectangle 7869"
          transform="rotate(-37.687 14.356 42.066)"
          fill="url(#c)"
          d="M0 0h71.596v70.295H0z"
        />
      </G>
    </G>
    <G data-name="Group 59648">
      <G data-name="Group 59647" clipPath="url(#a)">
        <Path
          data-name="Path 66049"
          d="M29.266 17.404c.346 2.591 2.655 4.749 2.669 5.6.019 1.126-1.332 1.6-3.492 1.6"
          fill="none"
          stroke="#2d2d2d"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
        />
        <Path
          data-name="Path 66050"
          d="M44.077 34.508q-.17.392-.373.77a5 5 0 0 0-1.188-.145H12.484a5 5 0 0 0-1.188.145 11 11 0 0 1-.373-.77 5 5 0 0 0 1.561.252h30.033a5 5 0 0 0 1.56-.252"
          fill="#2d2d2d"
        />
        <Path
          data-name="Path 66051"
          d="M44.923 30.553a9.8 9.8 0 0 1-.846 3.956 5 5 0 0 1-1.56.252H12.485a5 5 0 0 1-1.56-.252 9.8 9.8 0 0 1-.846-3.956c0-2.554 1.011-3.76 2.755-4.253a7 7 0 0 1 .69-.155c3.176-.539 8.254.635 13.974.635s10.8-1.174 13.978-.635a7 7 0 0 1 .691.155c1.743.494 2.758 1.7 2.758 4.253"
          fill="#fff"
        />
        <Path
          data-name="Path 66052"
          d="M43.705 35.278a13.8 13.8 0 0 1-4.736 4.94q-.214.141-.439.276a19.7 19.7 0 0 1-4.684 2.02 23.3 23.3 0 0 1-12.69 0 19.5 19.5 0 0 1-4.684-2.023 9 9 0 0 1-.445-.273 13.74 13.74 0 0 1-4.736-4.94 5 5 0 0 1 1.188-.145h30.038a5 5 0 0 1 1.188.145"
          fill="#fff"
        />
        <Path
          data-name="Path 66053"
          d="m13.441 6.636 2.555 2.692a1.7 1.7 0 0 0 1.5.509l3.666-.579a1.7 1.7 0 0 1 1.758 2.49l-1.772 3.262a1.7 1.7 0 0 0-.021 1.582l1.684 3.308a1.7 1.7 0 0 1-1.825 2.441l-3.65-.676a1.7 1.7 0 0 0-1.511.469l-2.626 2.623a1.7 1.7 0 0 1-2.886-.98l-.485-3.68a1.7 1.7 0 0 0-.913-1.292l-3.306-1.687a1.7 1.7 0 0 1 .041-3.048L9 12.47a1.7 1.7 0 0 0 .947-1.267l.582-3.665a1.7 1.7 0 0 1 2.911-.9"
          fill="#2d2d2d"
        />
        <Path
          data-name="Path 66054"
          d="m42.89 6.636-2.555 2.692a1.7 1.7 0 0 1-1.5.509l-3.666-.579a1.7 1.7 0 0 0-1.758 2.49l1.77 3.262a1.7 1.7 0 0 1 .021 1.582l-1.678 3.307a1.7 1.7 0 0 0 1.824 2.442l3.65-.676a1.7 1.7 0 0 1 1.511.469l2.626 2.623a1.7 1.7 0 0 0 2.886-.98l.485-3.68a1.7 1.7 0 0 1 .913-1.292l3.305-1.687a1.7 1.7 0 0 0-.041-3.048l-3.35-1.6a1.7 1.7 0 0 1-.947-1.267l-.582-3.665a1.7 1.7 0 0 0-2.911-.9"
          fill="#2d2d2d"
        />
        <Path
          data-name="Path 66055"
          d="m13.787 6.29 2.555 2.692a1.7 1.7 0 0 0 1.5.509l3.666-.579a1.7 1.7 0 0 1 1.758 2.49l-1.77 3.262a1.7 1.7 0 0 0-.021 1.582l1.684 3.308a1.7 1.7 0 0 1-1.824 2.442l-3.65-.676a1.7 1.7 0 0 0-1.511.469l-2.628 2.623a1.7 1.7 0 0 1-2.886-.98l-.485-3.68a1.7 1.7 0 0 0-.913-1.292l-3.306-1.687a1.7 1.7 0 0 1 .041-3.048l3.35-1.6a1.7 1.7 0 0 0 .947-1.267l.582-3.665a1.7 1.7 0 0 1 2.911-.9"
          fill="#ee048b"
        />
        <Path
          data-name="Path 66056"
          d="M43.235 6.29 40.68 8.982a1.7 1.7 0 0 1-1.5.509l-3.666-.579a1.7 1.7 0 0 0-1.759 2.49l1.771 3.262a1.7 1.7 0 0 1 .021 1.582l-1.684 3.308a1.7 1.7 0 0 0 1.824 2.442l3.657-.676a1.7 1.7 0 0 1 1.511.469l2.626 2.623a1.7 1.7 0 0 0 2.887-.98l.484-3.68a1.7 1.7 0 0 1 .913-1.292l3.306-1.687a1.7 1.7 0 0 0-.041-3.048l-3.349-1.6a1.7 1.7 0 0 1-.947-1.267l-.59-3.668a1.7 1.7 0 0 0-2.911-.9"
          fill="#ee048b"
        />
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'EmojiRating4';

export const EmojiRating4 = memo<IconProps>(themed(Icon));
