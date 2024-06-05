import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, Rect, Line, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 12 15" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect id="Rectangle_9490" data-name="Rectangle 9490" width={12} height={15} transform="translate(0 -0.219)" fill="none" stroke={color} strokeWidth={0.75}/>
      </ClipPath>
    </Defs>
    <G id="Group_63409" data-name="Group 63409" transform="translate(-293 -198)">
      <G id="Group_63406" data-name="Group 63406" transform="translate(293 198.22)">
        <G id="Group_63405" data-name="Group 63405" clipPath="url(#clip-path)">
          <Path id="Path_70411" data-name="Path 70411" d="M55.1,45.853V45H47.245L45,47.245V59.028H55.1V52.078" transform="translate(-44.766 -44.482)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75}/>
          <Path id="Path_70412" data-name="Path 70412" d="M47.245,45v2.245H45" transform="translate(-44.766 -44.482)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75}/>
        </G>
      </G>
      <Line id="Line_396" data-name="Line 396" x2={7} transform="translate(295 211)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}/>
      <Line id="Line_397" data-name="Line 397" x2={7} transform="translate(295 209)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}/>
      <Line id="Line_398" data-name="Line 398" x1={5.797} transform="translate(294.637 207.716)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}/>
      <Line id="Line_399" data-name="Line 399" x1={4.829} transform="translate(294.637 206.033)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}/>
      <Line id="Line_400" data-name="Line 400" x1={5.787} transform="translate(294.637 204.349)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}/>
      <Line id="Line_401" data-name="Line 401" x1={6.759} transform="translate(294.637 202.666)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5}/>
      <G id="Group_63408" data-name="Group 63408" transform="translate(293 198.22)">
        <G id="Group_63407" data-name="Group 63407" clipPath="url(#clip-path)">
          <Path id="Path_70413" data-name="Path 70413" d="M1430.669,439.49l3.263-5.652,1.13.653-3.263,5.652-.565.326-.565.326V439.49Z" transform="translate(-1423.236 -431.298)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75}/>
          <Path id="Path_70414" data-name="Path 70414" d="M2059.91,309.033l-1.13-.653.338-.585a.14.14,0,0,1,.191-.051l.887.512a.14.14,0,0,1,.052.192Z" transform="translate(-2048.083 -305.842)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75}/>
          <Path id="Path_70415" data-name="Path 70415" d="M2145.609,650.746l.747-1.294a.329.329,0,0,0-.035-.354l-.3-.427" transform="translate(-2134.461 -645.016)" fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.75}/>
        </G>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'EditDocument';
export const EditDocument = memo(themed(Icon));
