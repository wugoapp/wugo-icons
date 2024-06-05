import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, Rect, Stop, RadialGradient, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg id="Star_icon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 14.684 14.016" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Path id="Path_65245" data-name="Path 65245" d="M70.413,0a.471.471,0,0,0-.363.3L68.322,3.583a1.842,1.842,0,0,1-1.18.848l-3.667.6c-.439.072-.546.393-.234.713L65.832,8.4a1.848,1.848,0,0,1,.444,1.386l-.566,3.67c-.068.443.206.641.606.444l3.332-1.643a1.833,1.833,0,0,1,1.453.009l3.317,1.668a.64.64,0,0,0,.285.079h.007c.23,0,.364-.195.318-.517l-.534-3.675a1.84,1.84,0,0,1,.458-1.381L77.565,5.8a.543.543,0,0,0,.181-.349V5.434c0-.167-.148-.3-.411-.344L73.675,4.46A1.849,1.849,0,0,1,72.5,3.6L70.8.3a.469.469,0,0,0-.361-.3Z" transform="translate(-63.061)" fill="none"/>
      </ClipPath>
      <RadialGradient id="radial-gradient" cx={0.177} cy={1.006} r={1.089} gradientTransform="matrix(0.952, 0, 0, -1, -0.251, 1.988)" gradientUnits="objectBoundingBox">
        <Stop offset={0} stopColor="#ffc200"/>
        <Stop offset={0.355} stopColor="#ffc200"/>
        <Stop offset={0.509} stopColor="#ffbc06"/>
        <Stop offset={0.729} stopColor="#ffae19"/>
        <Stop offset={0.988} stopColor="#ff9638"/>
        <Stop offset={1} stopColor="#ff953a"/>
      </RadialGradient>
    </Defs>
    <G id="Group_58900" data-name="Group 58900" clipPath="url(#clip-path)">
      <Rect id="Rectangle_7512" data-name="Rectangle 7512" width={14.818} height={14.1} transform="translate(-0.133 0)" fill="url(#radial-gradient)"/>
    </G>
  </Svg>);
};
Icon.displayName = 'GradientStar';
export const GradientStar = memo(themed(Icon));
