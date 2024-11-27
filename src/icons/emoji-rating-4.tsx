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
    id="Group_59649"
    data-name="Group 59649"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 55 47.173"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_7868"
          data-name="Rectangle 7868"
          width={55}
          height={47.173}
          fill="none"
        />
      </ClipPath>
      <ClipPath id="clip-path-2">
        <Path
          id="Path_66048"
          data-name="Path 66048"
          d="M11.4,2.974A19.107,19.107,0,0,0,6.7,5.953,14.861,14.861,0,0,0,5.613,7,.012.012,0,0,1,5.61,7c-.238.3-.463.608-.681.925A19.092,19.092,0,0,0,1.94,18.9,28.071,28.071,0,0,0,30.01,46.968c.407,0,.808-.011,1.208-.028.7-.028,1.395-.087,2.082-.162A27.506,27.506,0,0,0,56.129,19.672c0-6.231-2.071-10.66-5.569-13.719a19.091,19.091,0,0,0-4.709-2.979C41.139.83,35.147,0,28.625,0S16.111.827,11.4,2.974"
          transform="translate(-1.94 -0.002)"
          fill="none"
        />
      </ClipPath>
      <RadialGradient id="radial-gradient">
        <Stop offset={0} stopColor="#fcd428" />
        <Stop offset={0.38} stopColor="#fad127" />
        <Stop offset={0.552} stopColor="#f7ca24" />
        <Stop offset={0.682} stopColor="#f1bd1f" />
        <Stop offset={0.79} stopColor="#e8ab18" />
        <Stop offset={0.826} stopColor="#e5a415" />
        <Stop offset={1} stopColor="#e5a415" />
      </RadialGradient>
    </Defs>
    <G id="Group_59644" data-name="Group 59644" transform="translate(0 0)">
      <G
        id="Group_59643"
        data-name="Group 59643"
        transform="translate(0 0)"
        clipPath="url(#clip-path)"
      >
        <Path
          id="Path_66047"
          data-name="Path 66047"
          d="M55,19.672A27.472,27.472,0,0,1,28.685,47.148c-.394.017-.788.026-1.187.026A27.5,27.5,0,0,1,0,19.672,18.676,18.676,0,0,1,2.932,8.928,15.009,15.009,0,0,1,4.481,7a.01.01,0,0,0,0-.006C9.393,1.8,17.867,0,27.5,0,42.689,0,55,4.485,55,19.672"
          transform="translate(0 -0.001)"
          fill="#2d2d2d"
        />
      </G>
    </G>
    <G
      id="Group_59646"
      data-name="Group 59646"
      transform="translate(0.811 0.001)"
    >
      <G id="Group_59645" data-name="Group 59645" clipPath="url(#clip-path-2)">
        <Rect
          id="Rectangle_7869"
          data-name="Rectangle 7869"
          width={71.596}
          height={70.295}
          transform="translate(-22.722 17.553) rotate(-37.687)"
          fill="url(#radial-gradient)"
        />
      </G>
    </G>
    <G id="Group_59648" data-name="Group 59648" transform="translate(0 0)">
      <G
        id="Group_59647"
        data-name="Group 59647"
        transform="translate(0 0)"
        clipPath="url(#clip-path)"
      >
        <Path
          id="Path_66049"
          data-name="Path 66049"
          d="M68.822,41.609c.346,2.591,2.655,4.749,2.669,5.6.019,1.126-1.332,1.6-3.492,1.6"
          transform="translate(-39.556 -24.205)"
          fill="none"
          stroke="#2d2d2d"
          strokeLinecap="round"
          strokeMiterlimit={10}
          strokeWidth={3}
        />
        <Path
          id="Path_66050"
          data-name="Path 66050"
          d="M59.268,82.5c-.114.262-.238.518-.373.77a4.884,4.884,0,0,0-1.188-.145H27.675a4.89,4.89,0,0,0-1.188.145c-.134-.252-.259-.507-.373-.77a4.959,4.959,0,0,0,1.561.252H57.708a4.956,4.956,0,0,0,1.56-.252"
          transform="translate(-15.191 -47.992)"
          fill="#2d2d2d"
        />
        <Path
          id="Path_66051"
          data-name="Path 66051"
          d="M58.938,66.715a9.764,9.764,0,0,1-.846,3.956,4.958,4.958,0,0,1-1.56.252H26.5a4.956,4.956,0,0,1-1.56-.252,9.764,9.764,0,0,1-.846-3.956c0-2.554,1.011-3.76,2.755-4.253a6.614,6.614,0,0,1,.69-.155c3.176-.539,8.254.635,13.974.635s10.8-1.174,13.978-.635a6.6,6.6,0,0,1,.691.155c1.743.494,2.758,1.7,2.758,4.253"
          transform="translate(-14.015 -36.162)"
          fill="#fff"
        />
        <Path
          id="Path_66052"
          data-name="Path 66052"
          d="M59.414,84.138a13.791,13.791,0,0,1-4.736,4.94c-.142.093-.29.187-.439.276a19.655,19.655,0,0,1-4.684,2.02,23.314,23.314,0,0,1-12.69,0,19.469,19.469,0,0,1-4.684-2.023c-.152-.086-.3-.179-.445-.273A13.739,13.739,0,0,1,27,84.138a4.891,4.891,0,0,1,1.188-.145H58.226a4.885,4.885,0,0,1,1.188.145"
          transform="translate(-15.709 -48.86)"
          fill="#fff"
        />
        <Path
          id="Path_66053"
          data-name="Path 66053"
          d="M19.955,15.126l2.555,2.692a1.7,1.7,0,0,0,1.5.509l3.666-.579a1.7,1.7,0,0,1,1.758,2.49L27.662,23.5a1.7,1.7,0,0,0-.021,1.582l1.684,3.308A1.7,1.7,0,0,1,27.5,30.831l-3.65-.676a1.7,1.7,0,0,0-1.511.469l-2.626,2.623a1.7,1.7,0,0,1-2.886-.98l-.485-3.68a1.7,1.7,0,0,0-.913-1.292l-3.306-1.687a1.7,1.7,0,0,1,.041-3.048l3.35-1.6a1.7,1.7,0,0,0,.947-1.267l.582-3.665a1.7,1.7,0,0,1,2.911-.9"
          transform="translate(-6.514 -8.49)"
          fill="#2d2d2d"
        />
        <Path
          id="Path_66054"
          data-name="Path 66054"
          d="M89.066,15.126l-2.555,2.692a1.7,1.7,0,0,1-1.5.509l-3.666-.579a1.7,1.7,0,0,0-1.758,2.49l1.77,3.262a1.7,1.7,0,0,1,.021,1.582L79.7,28.389a1.7,1.7,0,0,0,1.824,2.442l3.65-.676a1.7,1.7,0,0,1,1.511.469l2.626,2.623a1.7,1.7,0,0,0,2.886-.98l.485-3.68a1.7,1.7,0,0,1,.913-1.292L96.9,25.608a1.7,1.7,0,0,0-.041-3.048l-3.35-1.6a1.7,1.7,0,0,1-.947-1.267l-.582-3.665a1.7,1.7,0,0,0-2.911-.9"
          transform="translate(-46.176 -8.49)"
          fill="#2d2d2d"
        />
        <Path
          id="Path_66055"
          data-name="Path 66055"
          d="M20.781,14.3l2.555,2.692a1.7,1.7,0,0,0,1.5.509l3.666-.579a1.7,1.7,0,0,1,1.758,2.49l-1.77,3.262a1.7,1.7,0,0,0-.021,1.582l1.684,3.308a1.7,1.7,0,0,1-1.824,2.442l-3.65-.676a1.7,1.7,0,0,0-1.511.469L20.54,32.422a1.7,1.7,0,0,1-2.886-.98l-.485-3.68a1.7,1.7,0,0,0-.913-1.292L12.95,24.783a1.7,1.7,0,0,1,.041-3.048l3.35-1.6a1.7,1.7,0,0,0,.947-1.267l.582-3.665a1.7,1.7,0,0,1,2.911-.9"
          transform="translate(-6.994 -8.01)"
          fill="#ee048b"
        />
        <Path
          id="Path_66056"
          data-name="Path 66056"
          d="M89.891,14.3l-2.555,2.692a1.7,1.7,0,0,1-1.5.509l-3.666-.579a1.7,1.7,0,0,0-1.759,2.49l1.771,3.262a1.7,1.7,0,0,1,.021,1.582l-1.684,3.308a1.7,1.7,0,0,0,1.824,2.442L86,29.33a1.7,1.7,0,0,1,1.511.469l2.626,2.623a1.7,1.7,0,0,0,2.887-.98l.484-3.68a1.7,1.7,0,0,1,.913-1.292l3.306-1.687a1.7,1.7,0,0,0-.041-3.048l-3.349-1.6a1.7,1.7,0,0,1-.947-1.267L92.8,15.2a1.7,1.7,0,0,0-2.911-.9"
          transform="translate(-46.656 -8.01)"
          fill="#ee048b"
        />
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'EmojiRating4';

export const EmojiRating4 = memo<IconProps>(themed(Icon));
