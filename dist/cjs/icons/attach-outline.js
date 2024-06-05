import React, { memo } from 'react';
import { Svg, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 15.655 17.891" {...otherProps}>
    <Path id="Icon_metro-attachment" data-name="Icon metro-attachment" d="M13.431,7,12.3,5.865,6.621,11.539a2.407,2.407,0,0,0,3.4,3.4l6.81-6.809a4.012,4.012,0,1,0-5.674-5.674L4.011,9.61,4,9.625a5.6,5.6,0,0,0,7.914,7.913l.014-.015h0l4.88-4.88L15.67,11.509l-4.88,4.879-.015.015A3.991,3.991,0,0,1,5.13,10.76l.016-.015h0L12.3,3.6A2.407,2.407,0,1,1,15.7,7l-6.81,6.809a.8.8,0,0,1-1.135-1.134L13.431,7Z" transform="translate(-2.357 -1.285)" fill={color}/>
  </Svg>);
};
Icon.displayName = 'AttachOutline';
export const AttachOutline = memo(themed(Icon));
