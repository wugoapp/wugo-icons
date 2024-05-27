import React, { memo } from 'react';
import { Svg, G, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 40.75 40.75" {...otherProps}>
    <G id="Group_59481" data-name="Group 59481" transform="translate(-138.375 -336.581)">
      <Path id="Path_65523" data-name="Path 65523" d="M31.321,40.75H9.429A9.429,9.429,0,0,1,0,31.321V9.429A9.429,9.429,0,0,1,9.429,0H31.321A9.429,9.429,0,0,1,40.75,9.429V31.321a9.429,9.429,0,0,1-9.429,9.429" transform="translate(138.375 336.581)" fill="#fff"/>
      <Path id="Path_65524" data-name="Path 65524" d="M52.948,110.253a12.431,12.431,0,0,1-8.816-3.646,1.027,1.027,0,1,1,1.452-1.453,10.426,10.426,0,0,0,14.728,0,1.027,1.027,0,0,1,1.452,1.453,12.428,12.428,0,0,1-8.816,3.646" transform="translate(105.802 258.659)" fill="#ec008c"/>
      <Path id="Path_65525" data-name="Path 65525" d="M26.512,36.423v5.832a6.792,6.792,0,0,0,13.584,0,6.792,6.792,0,1,0,13.584,0V36.423Z" transform="translate(118.673 309.513)" fill="#ec008c"/>
    </G>
  </Svg>);
};
Icon.displayName = 'WugoLogo';
export const WugoLogo = memo(themed(Icon));
