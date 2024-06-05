import React, { memo } from 'react';
import { Svg, Circle, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 37 37" {...otherProps}>
    <Circle id="Ellipse_3632" data-name="Ellipse 3632" cx={18.5} cy={18.5} r={18.5} fill={color}/>
  </Svg>);
};
Icon.displayName = 'CloseCircle';
export const CloseCircle = memo(themed(Icon));
