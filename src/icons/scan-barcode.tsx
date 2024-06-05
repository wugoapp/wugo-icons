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
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={size}
    height={size}
    viewBox="0 0 12.977 12.951"
    {...otherProps}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Rect
          id="Rectangle_7389"
          data-name="Rectangle 7389"
          width={12.977}
          height={12.951}
          fill={color}
        />
      </ClipPath>
    </Defs>
    <G id="Group_58614" data-name="Group 58614" transform="translate(-2)">
      <G
        id="Group_58613"
        data-name="Group 58613"
        transform="translate(2 0)"
        clipPath="url(#clip-path)"
      >
        <Path
          id="Path_64935"
          data-name="Path 64935"
          d="M63.963,67.787q0-1.26,0-2.519A1.3,1.3,0,0,1,65.325,63.9q2.532,0,5.063,0a1.3,1.3,0,0,1,1.361,1.366q0,2.519,0,5.038a1.3,1.3,0,0,1-1.361,1.366q-2.532,0-5.063,0a1.3,1.3,0,0,1-1.361-1.366q0-1.26,0-2.519m6.486.015c0-.809,0-1.618,0-2.427,0-.132-.025-.179-.171-.179q-2.425.009-4.849,0c-.127,0-.172.023-.171.163q.008,2.427,0,4.855c0,.121.024.163.156.163q2.44-.007,4.88,0c.133,0,.156-.043.155-.164-.005-.8,0-1.608,0-2.412"
          transform="translate(-61.369 -61.31)"
          fill={color}
        />
        <Path
          id="Path_64936"
          data-name="Path 64936"
          d="M194.057,196.789c-.461,0-.922.005-1.383,0a.63.63,0,0,1-.617-.543.645.645,0,0,1,.453-.717.9.9,0,0,1,.271-.026h2.4a.671.671,0,0,0,.761-.753c0-.829,0-1.659,0-2.488a.6.6,0,0,1,.382-.587.618.618,0,0,1,.683.1.57.57,0,0,1,.223.448c0,.941.021,1.882-.01,2.822a1.9,1.9,0,0,1-1.766,1.743c-.465.02-.932,0-1.4,0v0"
          transform="translate(-184.262 -183.84)"
          fill={color}
        />
        <Path
          id="Path_64937"
          data-name="Path 64937"
          d="M197.111,3.184c0,.46.005.921,0,1.381a.632.632,0,0,1-.492.6.655.655,0,0,1-.715-.312.735.735,0,0,1-.082-.38q0-1.206,0-2.412a.673.673,0,0,0-.763-.766c-.826,0-1.652,0-2.478,0a.638.638,0,0,1-.61-.874.592.592,0,0,1,.568-.409c.932-.006,1.865-.019,2.8.007A1.906,1.906,0,0,1,197.1,1.789c.019.464,0,.93,0,1.4h0"
          transform="translate(-184.14 0)"
          fill={color}
        />
        <Path
          id="Path_64938"
          data-name="Path 64938"
          d="M3.162,196.843c-.39,0-.78,0-1.171,0A1.931,1.931,0,0,1,0,194.862q0-1.282,0-2.564a.633.633,0,0,1,.493-.615.655.655,0,0,1,.715.312.76.76,0,0,1,.083.4q0,1.206,0,2.412a.669.669,0,0,0,.747.751c.831,0,1.662,0,2.493,0a.641.641,0,0,1,.612.875.634.634,0,0,1-.6.411c-.461,0-.922,0-1.383,0Z"
          transform="translate(0 -183.893)"
          fill={color}
        />
        <Path
          id="Path_64939"
          data-name="Path 64939"
          d="M.014,3.21c0-.394,0-.789,0-1.183A1.927,1.927,0,0,1,1.986.059Q3.278.052,4.57.061a.628.628,0,0,1,.624.553.646.646,0,0,1-.463.711.952.952,0,0,1-.272.023h-2.4a.667.667,0,0,0-.75.748c0,.829,0,1.659,0,2.488a.642.642,0,0,1-.878.608.634.634,0,0,1-.41-.6c0-.46,0-.921,0-1.381Z"
          transform="translate(-0.013 -0.054)"
          fill={color}
        />
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'ScanBarcode';

export const ScanBarcode = memo<IconProps>(themed(Icon));
