import React, { memo } from 'react';
import type { IconProps } from '@tamagui/helpers-icon';
import {
  Svg,
  Circle as _Circle,
  G,
  Path,
  Text as _Text,
} from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 15.852 19.373"
    {...otherProps}
  >
    <G
      id="sound_notifications"
      data-name="sound notifications"
      transform="translate(-285.574 -494.363)"
    >
      <G
        id="Group_61018"
        data-name="Group 61018"
        transform="translate(285.574 493.723)"
      >
        <Path
          id="Path_67116"
          data-name="Path 67116"
          d="M14.973,10.9q0,1.1,0,2.207a2.466,2.466,0,0,1-.113.791c-.046.139-.021.179.133.19a.87.87,0,0,1,.8,1.179.835.835,0,0,1-.72.567,2.461,2.461,0,0,1-.288.013c-1.038,0-2.076,0-3.114,0-.158,0-.231.027-.238.207a3.514,3.514,0,0,1-7.013.049c-.012-.206-.071-.26-.276-.258-1.038.011-2.076.005-3.114,0A1.36,1.36,0,0,1,.621,15.8a.886.886,0,0,1-.615-.957.849.849,0,0,1,.779-.752c.227-.012.248-.072.181-.271a2.223,2.223,0,0,1-.093-.712c0-1.43,0-2.86,0-4.289A7.033,7.033,0,0,1,5.993,2.042c.146-.042.164-.118.166-.249a1.763,1.763,0,0,1,3.526-.07c.005.207.064.276.262.342a6.971,6.971,0,0,1,4.936,5.641,6.127,6.127,0,0,1,.091,1.17c0,.674,0,1.347,0,2.021M7.92,14.078q2.135,0,4.269,0a.9.9,0,0,0,1.016-1.014q0-2.052,0-4.1a6.752,6.752,0,0,0-.076-1.006,5.278,5.278,0,0,0-10.487.874c-.007,1.4,0,2.8,0,4.207a.914.914,0,0,0,1.05,1.043H7.92m.013,1.768c-.529,0-1.057,0-1.586,0-.133,0-.182.035-.168.176a1.636,1.636,0,0,0,.377.917,1.68,1.68,0,0,0,1.784.606A1.7,1.7,0,0,0,9.651,16.16c.067-.3.045-.315-.256-.315H7.933"
          transform="translate(0 0.64)"
          fill={color}
        />
      </G>
      <Path
        id="Line_359"
        data-name="Line 359"
        d="M11,15a1,1,0,0,1-.787-.382l-11-14a1,1,0,0,1,.168-1.4,1,1,0,0,1,1.4.168l11,14A1,1,0,0,1,11,15Z"
        transform="translate(288 496.5)"
        fill={color}
      />
    </G>
  </Svg>
  )
}

Icon.displayName = 'BellOffOutline';

export const BellOffOutline = memo<IconProps>(themed(Icon));
