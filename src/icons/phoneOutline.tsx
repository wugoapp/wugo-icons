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
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    id="Group_58482"
    data-name="Group 58482"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 12.071 14"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect width={12.071} height={14} fill="none" />
      </ClipPath>
      <ClipPath id="clip-path-2">
        <Rect
          id="Rectangle_7323"
          data-name="Rectangle 7323"
          width={12.071}
          height={14}
          rx={1}
          fill={color}
        />
      </ClipPath>
    </Defs>
    <G
      id="Scroll_Group_40"
      data-name="Scroll Group 40"
      clipPath="url(#clip-path)"
      style={{
        isolation: "isolate",
      }}
    >
      <G id="Group_58481" data-name="Group 58481" clipPath="url(#clip-path-2)">
        <Path
          id="Path_64914"
          data-name="Path 64914"
          d="M8.408,14a8.182,8.182,0,0,1-4.351-1.293,8.587,8.587,0,0,1-3.876-5.4A6.891,6.891,0,0,1,.563,3.05,16.1,16.1,0,0,1,1.591.922,1.73,1.73,0,0,1,4.565.777Q5.1,1.53,5.621,2.289a1.731,1.731,0,0,1-1.043,2.73q-.516.126-1.035.241a.184.184,0,0,0-.165.156,4.255,4.255,0,0,0,3.4,5.1.394.394,0,0,0,.488-.22c.15-.27.332-.523.5-.78a1.732,1.732,0,0,1,2.882-.044q.558.78,1.1,1.572A1.729,1.729,0,0,1,10.6,13.75c-.325.054-.651.106-.978.143-.382.043-.766.069-1.211.107m-.14-.965a16.438,16.438,0,0,0,2.143-.225.773.773,0,0,0,.518-1.271Q10.415,10.8,9.9,10.066a.774.774,0,0,0-1.358.026q-.387.588-.769,1.179a.509.509,0,0,1-.494.249,6.415,6.415,0,0,1-.758-.09A5.189,5.189,0,0,1,2.539,4.843a.6.6,0,0,1,.5-.454c.444-.092.886-.2,1.327-.308a.774.774,0,0,0,.468-1.25q-.515-.746-1.038-1.486a.773.773,0,0,0-1.377.07,15.18,15.18,0,0,0-.955,1.98,5.972,5.972,0,0,0-.345,3.642,7.585,7.585,0,0,0,3.9,5.11,6.977,6.977,0,0,0,3.252.888"
          transform="translate(0 0.001)"
          fill={color}
        />
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'PhoneOutline';

export const PhoneOutline = memo<IconProps>(themed(Icon));
