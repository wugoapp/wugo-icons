import React, { memo } from 'react';
import { Svg, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...otherProps}>
    <Path d="M8.47 3.47a.75.75 0 1 1 1.06 1.06L5.06 9l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06z" fill={color}/>
    <Path d="M19.25 14.5a4.75 4.75 0 0 0-4.75-4.75H4a.75.75 0 1 1 0-1.5h10.5a6.25 6.25 0 1 1 0 12.5H11a.75.75 0 0 1 0-1.5h3.5a4.75 4.75 0 0 0 4.75-4.75" fill={color}/>
    <Path d="M8.47 3.47a.75.75 0 1 1 1.06 1.06L5.06 9l4.47 4.47a.75.75 0 1 1-1.06 1.06l-5-5a.75.75 0 0 1 0-1.06z" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
    <Path d="M19.25 14.5a4.75 4.75 0 0 0-4.75-4.75H4a.75.75 0 1 1 0-1.5h10.5a6.25 6.25 0 1 1 0 12.5H11a.75.75 0 0 1 0-1.5h3.5a4.75 4.75 0 0 0 4.75-4.75" stroke={color} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>);
};
Icon.displayName = 'Refund';
export const Refund = memo(themed(Icon));
