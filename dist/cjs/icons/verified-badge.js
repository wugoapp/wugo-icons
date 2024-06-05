import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, Rect, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 11 11" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect id="Rectangle_9471" data-name="Rectangle 9471" width={11} height={11} transform="translate(0 -0.141)" fill="none"/>
      </ClipPath>
    </Defs>
    <G id="Group_63295" data-name="Group 63295" transform="translate(0 0.488)">
      <G id="Group_63294" data-name="Group 63294" transform="translate(0 -0.347)" clipPath="url(#clip-path)">
        <Path id="Path_70399" data-name="Path 70399" d="M10.03,3.979c-.17-.51.527-1.478.2-1.9-.323-.442-1.445-.068-1.87-.391C7.939,1.38,7.922.19,7.412.02,6.919-.15,6.222.8,5.661.8S4.4-.15,3.91.02c-.51.17-.527,1.342-.952,1.665-.442.323-1.564-.051-1.87.391-.306.425.374,1.393.2,1.9C1.122,4.472,0,4.846,0,5.406s1.122.917,1.292,1.427-.527,1.478-.2,1.9c.323.442,1.445.068,1.87.391.425.306.442,1.5.952,1.665.493.17,1.19-.782,1.751-.782s1.241.952,1.751.782.527-1.342.952-1.665c.442-.323,1.564.051,1.87-.391.306-.425-.374-1.393-.2-1.9.17-.492,1.292-.867,1.292-1.427S10.2,4.489,10.03,3.979" transform="translate(0 0.047)" fill="#588df6"/>
        <Path id="Path_70400" data-name="Path 70400" d="M342.36,395.6l-2.395,2.435-1.4-1.251,0,0a.341.341,0,0,0-.451.512l1.639,1.468,0,0a.341.341,0,0,0,.466-.019l2.623-2.667,0,0a.341.341,0,0,0-.49-.475" transform="translate(-334.811 -391.722)" fill="#fff"/>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'VerifiedBadge';
export const VerifiedBadge = memo(themed(Icon));
