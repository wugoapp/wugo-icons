import React, { memo } from 'react';
import { Svg, G, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 11.756 12.378" {...otherProps}>
    <G data-name="Arrow Icon" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <Path d="M0 5.128h10.256" fill={color} transform="translate(.75 1.061)"/>
      <Path d="M5.128 0l5.128 5.128-5.128 5.128" fill="none" transform="translate(.75 1.061)"/>
    </G>
  </Svg>);
};
Icon.displayName = 'ArrowRight';
export const ArrowRight = memo(themed(Icon));
