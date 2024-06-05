import React, { memo } from 'react';
import { Svg, G, Path, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 17.21 17.2" {...otherProps}>
    <G id="Group_61006" data-name="Group 61006" transform="translate(0.15 0.15)">
      <G id="Group_60994" data-name="Group 60994" transform="translate(0 0)">
        <G id="Group_60993" data-name="Group 60993" transform="translate(3.128 0)">
          <Path id="Path_67084" data-name="Path 67084" d="M.428,12.345a.428.428,0,0,1-.422-.5l.536-3.2a.429.429,0,0,1,.12-.232L8.952.125a.428.428,0,0,1,.605,0L12.22,2.788a.428.428,0,0,1,0,.605l-8.29,8.29a.429.429,0,0,1-.232.12l-3.2.536a.427.427,0,0,1-.071.006m.936-3.422L.949,11.4l2.472-.414,7.89-7.89L9.254,1.033Zm2.264,2.457h0Z" transform="translate(0 1.427)" fill={color} stroke={color} strokeWidth={0.3}/>
          <Path id="Path_67085" data-name="Path 67085" d="M3.091,4.944a.426.426,0,0,1-.3-.125L.125,2.156a.428.428,0,0,1,0-.605L1.341.335a1.211,1.211,0,0,1,1.673,0l1.6,1.6a1.182,1.182,0,0,1,0,1.673L3.394,4.819a.427.427,0,0,1-.3.125M1.033,1.853,3.091,3.911,4,3a.326.326,0,0,0,0-.462L2.408.94a.335.335,0,0,0-.462,0Z" transform="translate(8.826 0)" fill={color} stroke={color} strokeWidth={0.3}/>
          <Path id="Path_67086" data-name="Path 67086" d="M3.091,3.519a.427.427,0,0,1-.3-.125L.125.731A.428.428,0,0,1,.731.125L3.394,2.788a.428.428,0,0,1-.3.731" transform="translate(0.536 9.714)" fill={color} stroke={color} strokeWidth={0.3}/>
        </G>
        <Path id="Path_67087" data-name="Path 67087" d="M14.216,15.8H1.58A1.582,1.582,0,0,1,0,14.216V1.58A1.582,1.582,0,0,1,1.58,0H8.817a.377.377,0,0,1,0,.754H1.58a.826.826,0,0,0-.825.825V14.216a.826.826,0,0,0,.825.825H14.216a.826.826,0,0,0,.825-.825V6.233a.377.377,0,0,1,.754,0v7.983a1.582,1.582,0,0,1-1.58,1.58" transform="translate(0 1.105)" fill={color} stroke={color} strokeWidth={0.3}/>
      </G>
    </G>
  </Svg>);
};
Icon.displayName = 'EditOutline';
export const EditOutline = memo(themed(Icon));
