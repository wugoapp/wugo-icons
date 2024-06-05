import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, Rect, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 38.793 30.124" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect id="Rectangle_8313" data-name="Rectangle 8313" width={38.793} height={30.124} fill={color}/>
      </ClipPath>
    </Defs>
    <G id="Group_61031" data-name="Group 61031" transform="translate(36.793 28.417) rotate(180)">
      <G id="Group_61027" data-name="Group 61027" transform="translate(-2 -1.707)" clipPath="url(#clip-path)">
        <Path id="Path_67131" data-name="Path 67131" d="M33.033,174.05H2.407A2.388,2.388,0,0,1,0,171.688v-7.65a1.116,1.116,0,0,1,2.232,0v7.65a.161.161,0,0,0,.175.131H33.033a.161.161,0,0,0,.175-.131v-7.65a1.116,1.116,0,1,1,2.232,0v7.65a2.388,2.388,0,0,1-2.407,2.362" transform="translate(1.677 -145.684)" fill={color}/>
        <Path id="Path_67132" data-name="Path 67132" d="M172.247,19.157a1.04,1.04,0,0,1-1.116-.941V.941a1.132,1.132,0,0,1,2.232,0V18.216a1.04,1.04,0,0,1-1.116.941" transform="translate(-152.85 1.431)" fill={color}/>
        <Path id="Path_67133" data-name="Path 67133" d="M87.558,122.479a1.11,1.11,0,0,1-.756-.291l-9.147-8.517a.948.948,0,0,1,0-1.407,1.125,1.125,0,0,1,1.511,0l8.391,7.814,8.391-7.814a1.125,1.125,0,0,1,1.511,0,.948.948,0,0,1,0,1.407l-9.147,8.517a1.11,1.11,0,0,1-.756.291" transform="translate(-68.161 -99.677)" fill={color}/>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'Upload';
export const Upload = memo(themed(Icon));
