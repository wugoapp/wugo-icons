import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, Rect, Stop, RadialGradient, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg id="Group_59663" data-name="Group 59663" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={size} height={size} viewBox="0 0 55 47.173" {...otherProps}>
    <Defs>
      <ClipPath id="clip-path">
        <Rect id="Rectangle_7874" data-name="Rectangle 7874" width={55} height={47.173} fill="none"/>
      </ClipPath>
      <ClipPath id="clip-path-2">
        <Path id="Path_66068" data-name="Path 66068" d="M11.468,2.974a19.1,19.1,0,0,0-4.7,2.98A14.708,14.708,0,0,0,5.682,7a.011.011,0,0,1,0,.007c-.238.3-.463.608-.68.925A19.093,19.093,0,0,0,2.009,18.9,28.071,28.071,0,0,0,30.078,46.969c.407,0,.808-.011,1.209-.028.7-.027,1.394-.086,2.081-.162A27.506,27.506,0,0,0,56.2,19.672c0-6.231-2.072-10.661-5.568-13.719a19.11,19.11,0,0,0-4.709-2.98C41.208.83,35.215,0,28.694,0S16.18.827,11.468,2.974" transform="translate(-2.009 -0.002)" fill="none"/>
      </ClipPath>
      <RadialGradient id="radial-gradient">
        <Stop offset={0} stopColor="#fcd428"/>
        <Stop offset={0.38} stopColor="#fad127"/>
        <Stop offset={0.552} stopColor="#f7ca24"/>
        <Stop offset={0.682} stopColor="#f1bd1f"/>
        <Stop offset={0.79} stopColor="#e8ab18"/>
        <Stop offset={0.826} stopColor="#e5a415"/>
        <Stop offset={1} stopColor="#e5a415"/>
      </RadialGradient>
    </Defs>
    <G id="Group_59658" data-name="Group 59658">
      <G id="Group_59657" data-name="Group 59657" clipPath="url(#clip-path)">
        <Path id="Path_66067" data-name="Path 66067" d="M55,19.672a27.5,27.5,0,0,1-22.828,27.1,27.271,27.271,0,0,1-3.486.371c-.394.017-.788.026-1.187.026A27.5,27.5,0,0,1,0,19.672,18.675,18.675,0,0,1,2.932,8.929,15.02,15.02,0,0,1,4.481,7a.01.01,0,0,0,0-.006C9.393,1.8,17.867,0,27.5,0,42.689,0,55,4.485,55,19.672" transform="translate(0 -0.001)" fill="#2d2d2d"/>
      </G>
    </G>
    <G id="Group_59660" data-name="Group 59660" transform="translate(0.812 0.001)">
      <G id="Group_59659" data-name="Group 59659" clipPath="url(#clip-path-2)">
        <Rect id="Rectangle_7875" data-name="Rectangle 7875" width={71.595} height={70.295} transform="translate(-22.722 17.553) rotate(-37.687)" fill="url(#radial-gradient)"/>
      </G>
    </G>
    <G id="Group_59662" data-name="Group 59662">
      <G id="Group_59661" data-name="Group 59661" clipPath="url(#clip-path)">
        <Path id="Path_66069" data-name="Path 66069" d="M71.217,43.074c.346,2.591,2.655,4.748,2.669,5.6.019,1.126-1.332,1.6-3.492,1.6" transform="translate(-41.951 -25.67)" fill="none" stroke="#2d2d2d" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={3}/>
        <Path id="Path_66070" data-name="Path 66070" d="M60.187,85.4c-.114.262-.238.518-.373.77a4.891,4.891,0,0,0-1.188-.145H28.593a4.888,4.888,0,0,0-1.188.145c-.135-.252-.259-.507-.373-.77a4.957,4.957,0,0,0,1.56.252H58.627a4.957,4.957,0,0,0,1.56-.252" transform="translate(-16.11 -50.897)" fill="#2d2d2d"/>
        <Path id="Path_66071" data-name="Path 66071" d="M59.786,68.9a9.765,9.765,0,0,1-.846,3.956,4.959,4.959,0,0,1-1.56.252H27.347a4.96,4.96,0,0,1-1.561-.252A9.765,9.765,0,0,1,24.94,68.9c0-2.554,1.012-3.759,2.755-4.253a6.468,6.468,0,0,1,.691-.155c3.176-.539,8.254.635,13.974.635s10.8-1.174,13.978-.635a6.46,6.46,0,0,1,.69.155c1.743.494,2.758,1.7,2.758,4.253" transform="translate(-14.863 -38.351)" fill="#fff"/>
        <Path id="Path_66072" data-name="Path 66072" d="M60.365,87.1a13.788,13.788,0,0,1-4.736,4.94c-.142.093-.29.187-.438.276a19.662,19.662,0,0,1-4.685,2.019,23.314,23.314,0,0,1-12.69,0,19.461,19.461,0,0,1-4.685-2.023c-.152-.086-.3-.179-.445-.273a13.736,13.736,0,0,1-4.729-4.94,4.888,4.888,0,0,1,1.188-.145H59.177a4.888,4.888,0,0,1,1.188.145" transform="translate(-16.66 -51.818)" fill="#fff"/>
        <Path id="Path_66073" data-name="Path 66073" d="M34.355,35.966a5.723,5.723,0,0,1,4.167-2.123,5.866,5.866,0,0,1,4.361,2.341" transform="translate(-20.474 -20.169)" fill="none" stroke="#2d2d2d" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={3}/>
        <Path id="Path_66074" data-name="Path 66074" d="M87.991,35.966a5.723,5.723,0,0,1,4.167-2.123,5.866,5.866,0,0,1,4.361,2.341" transform="translate(-52.438 -20.169)" fill="none" stroke="#2d2d2d" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={3}/>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'EmojiRating3';
export const EmojiRating3 = memo(themed(Icon));
