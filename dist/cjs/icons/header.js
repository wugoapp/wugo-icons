import React, { memo } from 'react';
import { Svg, G, Path, Circle, Ellipse, Defs, ClipPath, LinearGradient, Stop, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 414.329 272.822" {...otherProps}>
    <Defs>
      <ClipPath id="a">
        <Path data-name="Rectangle 26" fill="#fff" stroke="#707070" strokeWidth={1} d="M0 0H375V179H0z"/>
      </ClipPath>
      <LinearGradient id="b" x1={0.716} y1={1.254} x2={0} y2={0.411} gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#fff"/>
        <Stop offset={1} stopColor="#fff" stopOpacity={0}/>
      </LinearGradient>
    </Defs>
    <G data-name="Mask Group 1" transform="translate(0 93.822)" clipPath="url(#a)">
      <G data-name="Group 57546" fill="#ec008b">
        <Ellipse data-name="Ellipse 3431" cx={449.5} cy={239.5} rx={449.5} ry={239.5} transform="rotate(-23 -477.368 330.863)" opacity={0.1}/>
        <Ellipse data-name="Ellipse 3430" cx={449.5} cy={239.5} rx={449.5} ry={239.5} transform="rotate(-23 -492.103 327.864)"/>
      </G>
    </G>
    <G data-name="Group 1731" transform="matrix(.999 .052 -.052 .999 175.768 0)" opacity={0.5}>
      <Circle data-name="Ellipse 182" cx={96.298} cy={96.298} r={96.298} opacity={0.1} fill="url(#b)"/>
      <Circle data-name="Ellipse 183" cx={69.432} cy={69.432} r={69.432} transform="translate(103.974 75.364)" fill="rgba(255,255,255,0.1)"/>
    </G>
    <Path data-name="Rectangle 7768" transform="translate(0 102.822)" fill="none" d="M0 0H375V167H0z"/>
  </Svg>);
};
Icon.displayName = 'Header';
export const Header = memo(themed(Icon));
