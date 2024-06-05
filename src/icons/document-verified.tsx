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
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 59.455 67.58"
    {...otherProps}
  >
    <G
      id="Group_61048"
      data-name="Group 61048"
      transform="translate(-52 -367.772)"
      fill={color}
    >
      <G id="Group_61049" data-name="Group 61049">
        <G id="Group_61050" data-name="Group 61050">
          <Path
            id="Path_67022"
            data-name="Path 67022"
            d="M62.043,55.824v7.7l7.7-7.7Zm-37.8-40.164h46.68V4.305A1.44,1.44,0,0,0,69.492,2.87H25.682a1.44,1.44,0,0,0-1.435,1.435Zm46.68,2.756H24.247v3.6a17.675,17.675,0,0,0-2.871,1.764V4.305A4.312,4.312,0,0,1,25.682,0h43.81A4.312,4.312,0,0,1,73.8,4.305V55.824L62.043,67.579H25.682a4.312,4.312,0,0,1-4.306-4.306V51.983a17.7,17.7,0,0,0,2.871,1.763v9.527a1.44,1.44,0,0,0,1.435,1.435h33.49V54.388a1.44,1.44,0,0,1,1.436-1.435h10.32Z"
            transform="translate(37.657 367.773)"
            fillRule="evenodd"
          />
          <Path
            id="Path_67023"
            data-name="Path 67023"
            d="M101.715,75.344h17.342a.864.864,0,0,1,.861.861v1.12a.864.864,0,0,1-.861.861H103.693a20.593,20.593,0,0,0-1.978-2.842m3.338,20.5h14a.864.864,0,0,1,.861.861v1.12a.864.864,0,0,1-.861.861H103.692a20.445,20.445,0,0,0,1.36-2.842m6.856-6.833h7.148a.864.864,0,0,1,.861.861v1.12a.863.863,0,0,1-.861.861h-7.148a.864.864,0,0,1-.862-.861v-1.12a.864.864,0,0,1,.862-.861m-5.486,0h.835a.864.864,0,0,1,.861.861v1.12a.864.864,0,0,1-.861.861h-1.111a20.6,20.6,0,0,0,.276-2.842m7.954-6.833h4.68a.864.864,0,0,1,.861.861v1.12a.864.864,0,0,1-.861.861h-4.68a.864.864,0,0,1-.861-.861v-1.12a.864.864,0,0,1,.861-.861m-8.919,0h3.847a.864.864,0,0,1,.861.861v1.12a.864.864,0,0,1-.861.861h-3.158a20.437,20.437,0,0,0-.688-2.842"
            transform="translate(-16.249 317.217)"
            fillRule="evenodd"
          />
          <Path
            id="Path_67024"
            data-name="Path 67024"
            d="M17.656,61.468A17.656,17.656,0,1,1,0,79.124,17.656,17.656,0,0,1,17.656,61.468m0,2.871A14.785,14.785,0,1,0,32.44,79.124,14.785,14.785,0,0,0,17.656,64.339"
            transform="translate(52 326.527)"
            fillRule="evenodd"
          />
          <Path
            id="Path_67025"
            data-name="Path 67025"
            d="M39.9,88.313l2.478,2.478-15.17,15.17-6.534-6.534,2.477-2.477,4.057,4.057Z"
            transform="translate(38.125 308.516)"
            fillRule="evenodd"
          />
        </G>
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'DocumentVerified';

export const DocumentVerified = memo<IconProps>(themed(Icon));
