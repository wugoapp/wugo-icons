import React, { memo } from 'react';
import { Svg, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 25.108 22.853" {...otherProps}>
    <Path d="M24.656 9.923L13.101.361a.832.832 0 00-1.045 0L.5 9.923a.818.818 0 00-.109 1.147.858.858 0 001.156.109L3.776 9.35V19.4a3.475 3.475 0 003.632 3.3h10.315a3.475 3.475 0 003.632-3.3V9.35l2.229 1.829a.772.772 0 00.523.192.832.832 0 00.633-.3.77.77 0 00-.024-1.093.825.825 0 00-.064-.054m-14 11.087v-5.736a.809.809 0 01.8-.819h2.231a.808.808 0 01.825.79.14.14 0 010 .029v5.735zm9.079-1.584a1.835 1.835 0 01-1.981 1.666h-1.6v-5.818a2.457 2.457 0 00-2.455-2.457h-2.217a2.457 2.457 0 00-2.476 2.437v5.806h-1.6a1.834 1.834 0 01-1.981-1.666V7.985l7.158-5.924 7.151 5.926z" fill={color} stroke={color} strokeWidth={0.3}/>
  </Svg>);
};
Icon.displayName = 'HomeOutline';
export const HomeOutline = memo(themed(Icon));
