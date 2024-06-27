import React, { memo } from 'react';
import { Svg, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 11.772 8.318" {...props}>
  <Path id="Path_66317" data-name="Path 66317" d="M336.94,202.751a.879.879,0,0,1-.621-.257l-3.538-3.538a.879.879,0,1,1,1.243-1.243l2.912,2.912,5.855-5.931a.879.879,0,1,1,1.251,1.235l-6.477,6.561a.879.879,0,0,1-.623.261Z" transform="translate(-332.523 -194.433)" fill={color}/>
    </Svg>);
};
Icon.displayName = 'Tick';
export const Tick = memo(themed(Icon));
