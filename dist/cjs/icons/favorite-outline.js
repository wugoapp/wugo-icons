import React, { memo } from 'react';
import { Svg, G, Path, ClipPath, Defs, } from 'react-native-svg';
import { themed } from '@tamagui/helpers-icon';
const Icon = (props) => {
    const { color = 'black', size = 24, ...otherProps } = props;
    return (<Svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 26 25" {...otherProps}>
      <Defs>
        <ClipPath id="a">
          <Path data-name="Rectangle 8052" transform="translate(-.455 -.276)" fill={color} d="M0 0H26V25H0z"/>
        </ClipPath>
      </Defs>
      <G transform="translate(.455 .276)" clipPath="url(#a)">
        <G data-name="Group 60134">
          <G data-name="Group 60133">
            <Path data-name="Path 66429" d="M23.229 7.33a13.023 13.023 0 01-.293 1.416 11.479 11.479 0 01-1.967 3.647 27.731 27.731 0 01-5.139 4.962 43.1 43.1 0 01-3.71 2.558.863.863 0 01-1.009 0 37.1 37.1 0 01-7.541-5.948A14.476 14.476 0 01.61 9.683a7.314 7.314 0 01-.571-2.135A.665.665 0 000 7.421V6.332a1.963 1.963 0 00.04-.2 6.864 6.864 0 011.77-4.061A5.793 5.793 0 017.8.212a6.067 6.067 0 013.688 2.749c.092.142.14.2.245.009a4.262 4.262 0 01.567-.77A5.81 5.81 0 0118.434.224a6.329 6.329 0 014.522 4.622 11.054 11.054 0 01.273 1.44zM6.633 1.372a4.739 4.739 0 00-2.914.814A5.709 5.709 0 001.751 8.87a11.928 11.928 0 002.382 3.692 34.306 34.306 0 007.367 5.989.208.208 0 00.263-.018 36.258 36.258 0 006.665-5.282 14.084 14.084 0 002.821-3.89 5.6 5.6 0 00-.773-6.316 4.541 4.541 0 00-5.357-1.293 5.166 5.166 0 00-2.824 3.172.691.691 0 01-1.353 0 5.208 5.208 0 00-.368-.851 4.776 4.776 0 00-3.941-2.701" fill={color} stroke={color} strokeWidth={0.7} transform="translate(1.005 3.016)"/>
          </G>
        </G>
      </G>
    </Svg>);
};
Icon.displayName = 'FavoriteOutline';
export const FavoriteOutline = memo(themed(Icon));
