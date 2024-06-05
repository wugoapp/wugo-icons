import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, Rect, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg id="Group_58677" data-name="Group 58677" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 22.845 22.247" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect id="Rectangle_7407" data-name="Rectangle 7407" width={22.845} height={22.247} fill={color}/>
      </ClipPath>
    </Defs>
    <G id="Group_58676" data-name="Group 58676" transform="translate(0 0)" clipPath="url(#clip-path)">
      <Path id="Path_65002" data-name="Path 65002" d="M22.844,11.439c-.056.183-.1.369-.17.548A2.4,2.4,0,0,1,21.4,13.324c-1.372.658-2.739,1.325-4.109,1.989L3.586,21.95a2.391,2.391,0,0,1-2.968-.5A2.339,2.339,0,0,1,.2,18.909Q1,16.9,1.8,14.9c.478-1.192.952-2.384,1.434-3.574a.483.483,0,0,0,0-.4c-1-2.492-1.994-4.988-3-7.48A2.4,2.4,0,0,1,.528.9,2.372,2.372,0,0,1,3.5.267C4.868.921,6.228,1.585,7.591,2.245q6.845,3.312,13.692,6.621a2.522,2.522,0,0,1,1.531,1.889.263.263,0,0,0,.03.059Zm-2.327-1.113.012-.041c-.063-.032-.126-.067-.19-.1L10.72,5.531,2.881,1.74a.957.957,0,0,0-.641-.128.815.815,0,0,0-.53,1.212q1.451,3.628,2.9,7.257a.33.33,0,0,0,.366.251q7.66-.011,15.321-.006Zm.008,1.651,0-.043c-.049,0-.1-.007-.146-.007q-7.74,0-15.478,0c-.16,0-.211.066-.264.2q-1.04,2.617-2.089,5.23c-.29.723-.585,1.444-.868,2.171a.8.8,0,0,0,.659,1.134,1.023,1.023,0,0,0,.553-.144q7-3.391,14.011-6.78l3.628-1.755" transform="translate(0 0)" fill={color}/>
    </G>
  </Svg>);
};
Icon.displayName = 'Send';
export const Send = memo(themed(Icon));
