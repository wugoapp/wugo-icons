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
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    id="Konum_Profil"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={10.953}
    height={13.939}
    viewBox="0 0 10.953 13.939"
    {...props}
  >
    <Defs>
      <ClipPath id="clip-path">
        <Path
          id="Path_3652"
          data-name="Path 3652"
          d="M5463.736,2373.073a5.458,5.458,0,0,0-.5,7.156s.149.2.175.226l4.2,4.953,4.2-4.956.171-.223h0a5.409,5.409,0,0,0,1.1-3.284,5.48,5.48,0,0,0-5.476-5.476h0A5.487,5.487,0,0,0,5463.736,2373.073Zm3.871,5.22-1.793,1.141.3-2.028-1.493-1.37,2.091-.252.9-1.825.952,1.826,2.035.253-1.494,1.37.3,2.029Z"
          transform="translate(-5462.13 -2371.469)"
          fill="#ec008b"
        />
      </ClipPath>
      <ClipPath id="clip-path-2">
        <Rect
          id="Rectangle_148"
          data-name="Rectangle 148"
          width={459.613}
          height={335.823}
          fill="#ec008b"
        />
      </ClipPath>
    </Defs>
    <G id="Group_4013" data-name="Group 4013" clipPath="url(#clip-path)">
      <G
        id="Pin_icon"
        data-name="Pin icon"
        transform="translate(-210.848 -99.048)"
      >
        <G id="Group_4012" data-name="Group 4012">
          <G
            id="Group_4011"
            data-name="Group 4011"
            clipPath="url(#clip-path-2)"
          >
            <G
              id="Group_140"
              data-name="Group 140"
              transform="translate(204.719 92.918)"
            >
              <Path
                id="Path_122"
                data-name="Path 122"
                d="M5457.129,2366.468h23.212v26.2h-23.212Z"
                transform="translate(-5457.129 -2366.468)"
                fill="#ec008b"
              />
            </G>
          </G>
        </G>
      </G>
    </G>
  </Svg>
  )
}

Icon.displayName = 'Location';

export const Location = memo<IconProps>(themed(Icon));
