import React, { memo } from 'react';
import { Svg, G, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 15.92 15.915" {...otherProps}>
    <G id="Search_icon" data-name="Search icon" transform="translate(1 1)">
      <Path id="Vector-9" d="M2994.829,1376.467a6,6,0,1,1-6-6A6,6,0,0,1,2994.829,1376.467Z" transform="translate(-2982.829 -1370.467)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
      <Path id="Vector-10" d="M2996.335,1383.968l-3.265-3.263" transform="translate(-2982.829 -1370.467)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}/>
    </G>
  </Svg>);
};
Icon.displayName = 'Search';
export const Search = memo(themed(Icon));
