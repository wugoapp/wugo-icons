import React, { memo } from 'react';
import { Svg, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg data-name="marker (2)" xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 17.889 21.351" {...otherProps}>
    <Path data-name="Path 65214" d="M11.558 6a3.558 3.558 0 103.558 3.558A3.558 3.558 0 0011.558 6zm0 5.337a1.779 1.779 0 111.779-1.779 1.779 1.779 0 01-1.779 1.779z" transform="translate(-2.614 -.661)" fill={color}/>
    <Path data-name="Path 65215" d="M10.889 21.349a4.689 4.689 0 01-3.835-1.957c-3.39-4.677-5.109-8.192-5.109-10.45a8.944 8.944 0 0117.889 0c0 2.258-1.719 5.773-5.109 10.449a4.689 4.689 0 01-3.835 1.957zm0-19.409a7.012 7.012 0 00-7 7c0 1.788 1.684 5.094 4.74 9.31a2.8 2.8 0 004.528 0c3.056-4.216 4.74-7.522 4.74-9.31a7.012 7.012 0 00-7-7z" transform="translate(-1.945 .002)" fill={color}/>
  </Svg>);
};
Icon.displayName = 'LocationOutline';
export const LocationOutline = memo(themed(Icon));
