import React, { memo } from 'react';
import { Svg, G, Path, Rect, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20.245 20.245" {...otherProps}>
    <G id="Group_63502" data-name="Group 63502" transform="translate(-569.943 -7468.943)">
      <Rect id="Rectangle_10293" data-name="Rectangle 10293" width={14.315} height={14.315} transform="translate(580.066 7468.943) rotate(45)" fill="transparent"/>
      <G id="Group_63501" data-name="Group 63501" transform="translate(575.908 7475.317)">
        <Path id="Path_70574" data-name="Path 70574" d="M2.26,37.194H0v-4.9a1.13,1.13,0,0,1,1.13-1.13H7.263v2.26h-5Z" transform="translate(0 -29.399)" fill={color}/>
        <Path id="Path_70575" data-name="Path 70575" d="M97.639,2.892,92.631,5.783V0Z" transform="translate(-87.624 0)" fill={color}/>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'DirectionSquare';
export const DirectionSquare = memo(themed(Icon));
