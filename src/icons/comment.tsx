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
  Line,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 17 18"
    {...otherProps}
  >
    <G
      id="Group_64316"
      data-name="Group 64316"
      transform="translate(-329 -390)"
    >
      <G
        id="_Message_Icon_Profile"
        data-name=" Message_Icon_Profile"
        transform="translate(298 330)"
      >
        <Path
          id="Path_64910"
          data-name="Path 64910"
          d="M8.761,16.553h-1a4.863,4.863,0,0,0-.59-.073,8.261,8.261,0,0,1-2.891-.961.29.29,0,0,0-.257-.022c-.392.131-.788.254-1.181.382l-2.064.675H.517A.787.787,0,0,1,0,16.035v-.259c.007-.007.018-.014.021-.022.341-1.064.679-2.13,1.024-3.193a.361.361,0,0,0-.026-.316,7.89,7.89,0,0,1-.9-2.608C.075,9.357.039,9.075,0,8.794v-1a1.1,1.1,0,0,0,.027-.139,7.8,7.8,0,0,1,.944-3.26A8.181,8.181,0,0,1,6.834.127c.317-.062.64-.07.958-.127h.97a.878.878,0,0,0,.125.027,7.792,7.792,0,0,1,3.276.945,8.18,8.18,0,0,1,4.263,5.864c.061.317.072.639.127.956v.97a1.1,1.1,0,0,0-.027.139,7.8,7.8,0,0,1-.944,3.26,8.181,8.181,0,0,1-5.863,4.265c-.317.062-.64.07-.958.127M1.65,14.9c.7-.225,1.375-.414,2.028-.66a1.311,1.311,0,0,1,1.214.128,6.718,6.718,0,0,0,4.806.739,6.776,6.776,0,0,0,4.22-2.741A6.744,6.744,0,0,0,15.1,6.839a6.756,6.756,0,0,0-2.7-4.177A6.726,6.726,0,0,0,7.253,1.374,6.749,6.749,0,0,0,2.674,4.131,6.8,6.8,0,0,0,1.443,9.7a6.548,6.548,0,0,0,.864,2.2.8.8,0,0,1,.078.738c-.076.207-.139.419-.206.628-.173.537-.344,1.073-.527,1.644"
          transform="translate(31 60)"
          fill={color}
        />
        <Path
          id="Path_64911"
          data-name="Path 64911"
          d="M131.847,232.651a.807.807,0,1,1,.8-.8.814.814,0,0,1-.8.8"
          transform="translate(-95.799 -163.567)"
          fill={color}
        />
        <Path
          id="Path_64912"
          data-name="Path 64912"
          d="M232.651,231.841a.807.807,0,1,1-.8-.806.814.814,0,0,1,.8.806"
          transform="translate(-192.568 -163.565)"
          fill={color}
        />
        <Path
          id="Path_64913"
          data-name="Path 64913"
          d="M332.651,231.838a.807.807,0,1,1-.8-.8.814.814,0,0,1,.8.8"
          transform="translate(-289.334 -163.566)"
          fill={color}
        />
      </G>
      <G
        id="Ellipse_3795"
        data-name="Ellipse 3795"
        transform="translate(338 400)"
        fill="#ec008b"
        stroke={color}
        strokeWidth={0.9}
      >
        <Circle cx={4} cy={4} r={4} stroke="none" />
        <Circle cx={4} cy={4} r={3.55} fill="none" />
      </G>
      <Line
        id="Line_414"
        data-name="Line 414"
        y2={2}
        transform="translate(342 403)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth={0.5}
      />
      <Line
        id="Line_415"
        data-name="Line 415"
        x1={2}
        transform="translate(341 404)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth={0.5}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'Comment';

export const Comment = memo<IconProps>(themed(Icon));
