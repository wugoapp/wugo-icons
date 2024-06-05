import React, { memo } from 'react';
import { Svg, G, Path, Defs, ClipPath, Rect, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 13.813 13.813" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect id="Rectangle_147" data-name="Rectangle 147" width={13.813} height={13.813} fill={color}/>
      </ClipPath>
    </Defs>
    <G id="Mask_Group_3" data-name="Mask Group 3" clipPath="url(#clip-path)">
      <G id="Group_58035" data-name="Group 58035" transform="translate(0.891 1.937)">
        <G id="Group_58036" data-name="Group 58036" transform="translate(0 0)">
          <Path id="Path_64797" data-name="Path 64797" d="M12.085,3.813a6.775,6.775,0,0,1-.152.737,5.972,5.972,0,0,1-1.023,1.9A14.427,14.427,0,0,1,8.236,9.029a22.425,22.425,0,0,1-1.93,1.331.449.449,0,0,1-.525,0A19.3,19.3,0,0,1,1.857,7.265,7.531,7.531,0,0,1,.317,5.037a3.805,3.805,0,0,1-.3-1.111A.346.346,0,0,0,0,3.86V3.294a1.021,1.021,0,0,0,.021-.1A3.571,3.571,0,0,1,.942,1.079,3.014,3.014,0,0,1,4.059.11a3.157,3.157,0,0,1,1.919,1.43c.048.074.073.1.127,0a2.218,2.218,0,0,1,.292-.4A3.023,3.023,0,0,1,9.59.116a3.293,3.293,0,0,1,2.353,2.4A5.487,5.487,0,0,1,12.085,3.813ZM2.15,6.536A23.307,23.307,0,0,0,6.118,9.642" transform="translate(0 0)" fill={color} stroke={color} strokeWidth={0.7}/>
        </G>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'Favorite';
export const Favorite = memo(themed(Icon));
