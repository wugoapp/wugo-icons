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
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    id="download"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 33.628 42.94"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_8314"
          data-name="Rectangle 8314"
          width={33.628}
          height={42.94}
          fill={color}
        />
      </ClipPath>
    </Defs>
    <G id="Group_61032" data-name="Group 61032" clipPath="url(#clip-path)">
      <Path
        id="Path_67134"
        data-name="Path 67134"
        d="M122.707,224.343c-.16,0-.349.014-.707.042v3.653c.286.01.4.015.65.015A1.462,1.462,0,0,0,124,227.4a2.446,2.446,0,0,0,.324-1.311c0-1.192-.511-1.747-1.618-1.747"
        transform="translate(-113.271 -208.292)"
        fill={color}
      />
      <Path
        id="Path_67135"
        data-name="Path 67135"
        d="M57.434,224.343c-.15,0-.362,0-.434.012v1.526a2.238,2.238,0,0,0,.369.027c1.076,0,1.2-.437,1.2-.817,0-.224.007-.749-1.139-.749"
        transform="translate(-52.922 -208.292)"
        fill={color}
      />
      <Path
        id="Path_67136"
        data-name="Path 67136"
        d="M19.533,179.023a1.993,1.993,0,0,0-1.993-1.993H1.993A1.993,1.993,0,0,0,0,179.023v6.532a1.993,1.993,0,0,0,1.993,1.993H17.54a1.993,1.993,0,0,0,1.993-1.993Zm-13.323,3.6a2.977,2.977,0,0,1-1.845.541c-.09,0-.286,0-.286-.009V185.4H2.79v-5.987l.242-.04a9.225,9.225,0,0,1,1.488-.14,2.755,2.755,0,0,1,1.744.509,1.7,1.7,0,0,1,.68,1.386,1.791,1.791,0,0,1-.736,1.49m5.5,1.682a2.951,2.951,0,0,1-2.44,1c-.322,0-.787-.038-1.508-.115l-.177-.027v-5.75l.175-.029c.882-.1,1.393-.149,1.708-.149a2.767,2.767,0,0,1,2.276.934,3.08,3.08,0,0,1,.611,1.994,3.336,3.336,0,0,1-.645,2.14m5.034-3.838H14.167v1.145h2.361V182.9H14.167v2.5H12.807V179.32h3.935Z"
        transform="translate(0 -164.364)"
        fill={color}
      />
      <Path
        id="Path_67137"
        data-name="Path 67137"
        d="M76.313,0V.074H62.02A1.976,1.976,0,0,0,60,2.027v9.637h1.646V2.982a1.333,1.333,0,0,1,1.329-1.334H76.313v9.391A2.054,2.054,0,0,0,78.308,13.1h9.382V36.147a1.336,1.336,0,0,1-1.319,1.346H80.344a1,1,0,0,1-.116.184l-1.113,1.462h8.21a2.039,2.039,0,0,0,2.01-2.037V13.039Z"
        transform="translate(-55.707)"
        fill={color}
      />
      <Path
        id="Path_67138"
        data-name="Path 67138"
        d="M68.995,350.41H62.974a1.344,1.344,0,0,1-1.329-1.346V337.03H60v12.988a2.047,2.047,0,0,0,2.02,2.037h8.206L69.112,350.6a1.035,1.035,0,0,1-.117-.187"
        transform="translate(-55.707 -312.916)"
        fill={color}
      />
      <Path
        id="Path_67139"
        data-name="Path 67139"
        d="M206.014,399.33h-2.147v-7.384a.907.907,0,0,0-.883-.915H200.32a.912.912,0,0,0-.889.915v7.384H197.29a.5.5,0,0,0-.421.792l4.362,5.668a.537.537,0,0,0,.841,0l4.362-5.668a.5.5,0,0,0-.421-.792"
        transform="translate(-182.689 -363.052)"
        fill={color}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'PdfDownload';

export const PdfDownload = memo<IconProps>(themed(Icon));
