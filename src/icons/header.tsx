import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Text as _Text,
  Circle,
  Ellipse,
  Defs,
  ClipPath,
  LinearGradient,
  Stop,
  Rect,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 414.329 272.822"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_26"
          data-name="Rectangle 26"
          width={375}
          height={179}
          fill="#fff"
          stroke="#707070"
          strokeWidth={1}
        />
      </ClipPath>
      <LinearGradient
        id="linear-gradient"
        x1={0.716}
        y1={1.254}
        x2={0}
        y2={0.411}
        gradientUnits="objectBoundingBox"
      >
        <Stop offset={0} stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
    <G
      id="Mask_Group_1"
      data-name="Mask Group 1"
      transform="translate(0 93.822)"
      clipPath="url(#clip-path)"
    >
      <G id="Group_57546" data-name="Group 57546">
        <Ellipse
          id="Ellipse_3431"
          data-name="Ellipse 3431"
          cx={449.5}
          cy={239.5}
          rx={449.5}
          ry={239.5}
          transform="matrix(0.921, -0.391, 0.391, 0.921, -167.347, -160.327)"
          fill="#ec008b"
          opacity={0.1}
        />
        <Ellipse
          id="Ellipse_3430"
          data-name="Ellipse 3430"
          cx={449.5}
          cy={239.5}
          rx={449.5}
          ry={239.5}
          transform="matrix(0.921, -0.391, 0.391, 0.921, -167.347, -166.327)"
          fill="#ec008b"
        />
      </G>
    </G>
    <G
      id="Group_1731"
      data-name="Group 1731"
      transform="matrix(0.999, 0.052, -0.052, 0.999, 175.768, 0)"
      opacity={0.5}
    >
      <Circle
        id="Ellipse_182"
        data-name="Ellipse 182"
        cx={96.298}
        cy={96.298}
        r={96.298}
        opacity={0.1}
        fill="url(#linear-gradient)"
      />
      <Circle
        id="Ellipse_183"
        data-name="Ellipse 183"
        cx={69.432}
        cy={69.432}
        r={69.432}
        transform="translate(103.974 75.364)"
        fill="rgba(255,255,255,0.1)"
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'Header';

export const Header = memo<IconProps>(themed(Icon));
