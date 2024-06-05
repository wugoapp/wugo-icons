import React, { memo } from 'react';
import { Svg, G, Path, Rect, ClipPath, Defs, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 26 26" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect id="Rectangle_7405" data-name="Rectangle 7405" width={26} height={26} transform="translate(16 52)" fill="#fff" stroke="#707070" strokeWidth={1}/>
      </ClipPath>
      <ClipPath id="clip-path-2">
        <Rect id="Rectangle_7406" data-name="Rectangle 7406" width={4.331} height={19.365} fill="none"/>
      </ClipPath>
    </Defs>
    <G id="settings_in_conversation" data-name="settings in conversation" transform="translate(-16 -52)" clipPath="url(#clip-path)">
      <G id="Group_58674" data-name="Group 58674" transform="translate(27.123 55)">
        <G id="Group_58673" data-name="Group 58673" transform="translate(0 0)" clipPath="url(#clip-path-2)">
          <Path id="Path_64999" data-name="Path 64999" d="M2.545,0a2.329,2.329,0,0,1,1.29.766,2.171,2.171,0,0,1-2.1,3.515A2.172,2.172,0,0,1,1.611.056C1.671.04,1.73.019,1.79,0Z" transform="translate(-0.002 0)"/>
          <Path id="Path_65000" data-name="Path 65000" d="M1.788,40.636A2.329,2.329,0,0,1,.5,39.87a2.171,2.171,0,0,1,2.1-3.515,2.172,2.172,0,0,1,.126,4.224c-.06.016-.119.037-.179.056Z" transform="translate(0 -21.271)"/>
          <Path id="Path_65001" data-name="Path 65001" d="M2.173,18.139A2.168,2.168,0,1,1,0,20.292a2.158,2.158,0,0,1,2.168-2.153" transform="translate(-0.003 -10.624)"/>
        </G>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'EllipsisVertical';
export const EllipsisVertical = memo(themed(Icon));
