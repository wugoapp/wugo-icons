import React, { memo } from 'react';
import { Svg, G, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 15.014 20.721" {...otherProps}>
    <G data-name="Group 60126" fill={color}>
      <Path data-name="Path 66427" d="M334.807 31.2a4.821 4.821 0 114.855-4.821 4.845 4.845 0 01-4.855 4.821m0-7.653a2.832 2.832 0 102.852 2.832 2.845 2.845 0 00-2.852-2.832" transform="translate(-327.3 -21.559)"/>
      <Path data-name="Path 66428" d="M337.072 43.022h-4.857a5.04 5.04 0 110-10.08h4.857a5.04 5.04 0 110 10.08m-4.857-8.092a3.052 3.052 0 100 6.1h4.857a3.052 3.052 0 100-6.1z" transform="translate(-327.136 -22.301)"/>
    </G>
  </Svg>);
};
Icon.displayName = 'PersonRoundedOutline';
export const PersonRoundedOutline = memo(themed(Icon));
