import React, { memo } from 'react';
import { Svg, G, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 98 97.997" {...otherProps}>
    <G id="Group_64054" data-name="Group 64054" transform="translate(-108.238 -639.442)">
      <Path id="Path_71014" data-name="Path 71014" d="M125.25,76.259a49,49,0,1,0-49,49,49,49,0,0,0,49-49" transform="translate(80.988 612.182)" fill={color}/>
      <G id="Group_64049" data-name="Group 64049" transform="translate(125.551 670.593)">
        <Path id="Path_71015" data-name="Path 71015" d="M142.34,234.35h36.089s8.8.88,9.1,7.923v27.286H152.609s-9.976,1.173-10.269-9.1Z" transform="translate(-142.34 -234.35)" fill="transparent"/>
        <Path id="Path_71016" data-name="Path 71016" d="M471.93,234.35V269.6l-15.55-10.31V244.913Z" transform="translate(-409.141 -234.35)" fill="transparent"/>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'VideoCircle';
export const VideoCircle = memo(themed(Icon));
