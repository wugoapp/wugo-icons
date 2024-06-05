import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, Rect, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 23.168 25.001" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect id="Rectangle_9407" data-name="Rectangle 9407" width={23.168} height={25.001} transform="translate(0 0)" fill={color}/>
      </ClipPath>
    </Defs>
    <G id="Group_63117" data-name="Group 63117" transform="translate(0 0.001)">
      <G id="Group_63116" data-name="Group 63116" transform="translate(0 -0.001)" clipPath="url(#clip-path)">
        <Path id="Path_70080" data-name="Path 70080" d="M91.464,0H75.852a3.006,3.006,0,0,0-3.006,3.006V4.838H74.92a1.59,1.59,0,0,1,0,3.18H72.846v2.894H74.92a1.59,1.59,0,0,1,0,3.18H72.846v2.894H74.92a1.59,1.59,0,0,1,0,3.18H72.846V22A3.006,3.006,0,0,0,75.852,25H91.464A3.006,3.006,0,0,0,94.469,22V3.006A3.006,3.006,0,0,0,91.464,0M89.117,16.842l-.442.442a2.41,2.41,0,0,1-1.714.711,2.485,2.485,0,0,1-.76-.12,11.4,11.4,0,0,1-4.5-2.823,11.4,11.4,0,0,1-2.823-4.5,2.429,2.429,0,0,1,.591-2.473l.442-.442a1.414,1.414,0,0,1,2,0l.664.664a1.412,1.412,0,0,1,0,2,1.126,1.126,0,0,0,0,1.59l2.295,2.3a1.126,1.126,0,0,0,1.591,0,1.411,1.411,0,0,1,2,0l.664.664a1.414,1.414,0,0,1,0,2" transform="translate(-71.302 0)" fill={color}/>
        <Path id="Path_70081" data-name="Path 70081" d="M3.618,279.291H.53a.53.53,0,0,1,0-1.06H3.618a.53.53,0,0,1,0,1.06" transform="translate(0 -272.333)" fill={color}/>
        <Path id="Path_70082" data-name="Path 70082" d="M3.618,852.3H.53a.53.53,0,0,1,0-1.06H3.618a.53.53,0,0,1,0,1.06" transform="translate(0 -833.191)" fill={color}/>
        <Path id="Path_70083" data-name="Path 70083" d="M3.618,565.793H.53a.53.53,0,0,1,0-1.06H3.618a.53.53,0,0,1,0,1.06" transform="translate(0 -552.762)" fill={color}/>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'PhoneBook';
export const PhoneBook = memo(themed(Icon));
