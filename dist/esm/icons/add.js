import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 18.378 18.378" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Path id="Shape" d="M7.568,16.756V10.81H1.622a1.621,1.621,0,1,1,0-3.243H7.568V1.622a1.621,1.621,0,1,1,3.243,0V7.568h5.946a1.621,1.621,0,1,1,0,3.243H10.81v5.946a1.621,1.621,0,1,1-3.243,0Z" transform="translate(4.154 4.154)" fill={color}/>
      </ClipPath>
    </Defs>
    <G id="Icons_Plus" data-name="Icons/Plus" transform="translate(22.532 -4.154) rotate(90)">
      <G id="Mask_Group_112" data-name="Mask Group 112" clipPath="url(#clip-path)">
        <Path id="_510c44a574f3765bd8912da01a80fbd4" data-name="510c44a574f3765bd8912da01a80fbd4" d="M21.824,12.635H14.932V5.743a1.149,1.149,0,0,0-2.3,0v6.892H5.743a1.149,1.149,0,1,0,0,2.3h6.892v6.892a1.149,1.149,0,1,0,2.3,0V14.932h6.892a1.149,1.149,0,1,0,0-2.3Z" transform="translate(-0.441 -0.441)" fill={color}/>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'Add';
export const Add = memo(themed(Icon));
