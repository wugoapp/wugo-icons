import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, Rect, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg id="star_2_1" data-name="star (2) 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 14 14" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect id="star_2_1_Background_Mask_" data-name="star (2) 1 (Background/Mask)" width={14} height={14} fill="none"/>
      </ClipPath>
    </Defs>
    <Rect id="star_2_1_Background_Mask_2" data-name="star (2) 1 (Background/Mask)" width={14} height={14} fill="none"/>
    <G id="star_2_1-2" data-name="star (2) 1" clipPath="url(#clip-path)">
      <Path id="Vector" d="M13.323,4.558,9.282,4.191,7.684.452a.744.744,0,0,0-1.369,0l-1.6,3.739L.677,4.558a.745.745,0,0,0-.422,1.3L3.309,8.539l-.9,3.967a.743.743,0,0,0,1.107.8L7,11.227l3.484,2.083a.744.744,0,0,0,1.107-.8l-.9-3.967,3.054-2.678a.744.744,0,0,0,.218-.791h0A.743.743,0,0,0,13.323,4.558Z" transform="translate(0 0.3)" fill={color}/>
    </G>
  </Svg>);
};
Icon.displayName = 'Star';
export const Star = memo(themed(Icon));
