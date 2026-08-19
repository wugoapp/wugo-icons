import React, { memo } from 'react';
import { Svg, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, strokeWidth = 2, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 19 22" fill="none" {...otherProps}>
    <Path d="M12.464 18a3 3 0 0 1-6 0M11.26 5.239a2.5 2.5 0 1 0-3.593 0m7.796 4.961c0-1.38-.632-2.702-1.757-3.677S11.055 5 9.463 5c-1.59 0-3.117.548-4.242 1.523S3.463 8.821 3.463 10.2c0 2.282-.565 3.95-1.271 5.145C1.387 16.705.984 17.386 1 17.549c.019.186.052.244.203.355.132.096.794.096 2.119.096h12.283c1.325 0 1.987 0 2.12-.096.15-.11.183-.17.202-.355.015-.163-.387-.843-1.192-2.204-.706-1.194-1.271-2.863-1.271-5.145" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round"/>
  </Svg>);
};
Icon.displayName = 'BellOutline';
export const BellOutline = memo(themed(Icon));
