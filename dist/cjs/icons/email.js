import React, { memo } from 'react';
import { Svg, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg data-name="Group 57536" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 15.49 12.65" {...otherProps}>
    <Path data-name="Path 63880" d="M17.611 251.65H7.878A2.881 2.881 0 015 248.772v-6.894A2.882 2.882 0 017.878 239h9.733a2.882 2.882 0 012.878 2.878v6.894a2.881 2.881 0 01-2.878 2.878m-9.733-11.617a1.848 1.848 0 00-1.846 1.846v6.894a1.848 1.848 0 001.846 1.845h9.733a1.848 1.848 0 001.846-1.845v-6.894a1.848 1.848 0 00-1.846-1.846z" transform="translate(-5 -239)" fill={color}/>
    <Path data-name="Path 63881" d="M15.949 249.052a1.835 1.835 0 01-1.307-.541l-5.323-5.323.868-.868 5.323 5.323a.636.636 0 00.878 0l5.323-5.323.868.868-5.323 5.323a1.835 1.835 0 01-1.307.541" transform="translate(-8.204 -241.463)" fill={color}/>
  </Svg>);
};
Icon.displayName = 'Email';
export const Email = memo(themed(Icon));
