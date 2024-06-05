import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, Rect, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg id="Group_61031" data-name="Group 61031" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 21.273 16.519" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect id="Rectangle_8313" data-name="Rectangle 8313" width={21.273} height={16.519} fill={color}/>
      </ClipPath>
    </Defs>
    <G id="Group_61027" data-name="Group 61027" transform="translate(0 0)" clipPath="url(#clip-path)">
      <Path id="Path_67131" data-name="Path 67131" d="M18.115,169.025H1.32a1.309,1.309,0,0,1-1.32-1.3v-4.2a.612.612,0,0,1,1.224,0v4.2a.089.089,0,0,0,.1.072H18.115a.089.089,0,0,0,.1-.072v-4.2a.612.612,0,0,1,1.224,0v4.2a1.309,1.309,0,0,1-1.32,1.3" transform="translate(0.919 -153.469)" fill={color}/>
      <Path id="Path_67132" data-name="Path 67132" d="M171.743,10.505a.57.57,0,0,1-.612-.516V.516a.621.621,0,0,1,1.224,0V9.989a.57.57,0,0,1-.612.516" transform="translate(-161.106 0.785)" fill={color}/>
      <Path id="Path_67133" data-name="Path 67133" d="M82.944,117.734a.609.609,0,0,1-.414-.16L77.514,112.9a.52.52,0,0,1,0-.772.617.617,0,0,1,.829,0l4.6,4.285,4.6-4.285a.617.617,0,0,1,.829,0,.52.52,0,0,1,0,.772l-5.016,4.671a.609.609,0,0,1-.414.16" transform="translate(-72.308 -105.229)" fill={color}/>
    </G>
  </Svg>);
};
Icon.displayName = 'Download';
export const Download = memo(themed(Icon));
